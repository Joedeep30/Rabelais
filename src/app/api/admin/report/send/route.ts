import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { TARGET_KEYWORDS, COMPETITORS } from '@/lib/keywords';

const resend = new Resend(process.env.RESEND_API_KEY);

function generateReportHTML(): string {
  const now = new Date();
  const dateStr = now.toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  
  const top3 = TARGET_KEYWORDS.filter(k => k.currentPosition && k.currentPosition <= 3);
  const top10 = TARGET_KEYWORDS.filter(k => k.currentPosition && k.currentPosition <= 10);
  const gmapTop3 = TARGET_KEYWORDS.filter(k => k.gmapPosition && k.gmapPosition <= 3);
  const avgGain = TARGET_KEYWORDS.reduce((sum, k) => {
    if (k.previousPosition && k.currentPosition) return sum + (k.previousPosition - k.currentPosition);
    return sum;
  }, 0) / TARGET_KEYWORDS.length;

  return `
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
  body { margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #f5f5f5; color: #333; }
  .container { max-width: 640px; margin: 0 auto; background: white; }
  .header { background: linear-gradient(135deg, #0a0f1c, #001a44); padding: 40px 30px; text-align: center; }
  .header h1 { color: white; font-size: 24px; font-weight: 300; margin: 0; letter-spacing: 4px; text-transform: uppercase; }
  .header h1 span { color: #c2aa84; font-weight: 700; }
  .header p { color: rgba(255,255,255,0.4); font-size: 12px; margin-top: 8px; letter-spacing: 2px; text-transform: uppercase; }
  .date-bar { background: #c2aa84; color: white; text-align: center; padding: 12px; font-size: 13px; font-weight: 600; letter-spacing: 1px; }
  .kpi-grid { display: flex; padding: 20px; gap: 10px; }
  .kpi-card { flex: 1; text-align: center; padding: 20px 10px; border-radius: 12px; }
  .kpi-card.green { background: #e8f5e9; }
  .kpi-card.gold { background: #fdf5e6; }
  .kpi-card.purple { background: #f3e5f5; }
  .kpi-value { font-size: 32px; font-weight: 800; }
  .kpi-card.green .kpi-value { color: #2e7d32; }
  .kpi-card.gold .kpi-value { color: #c2aa84; }
  .kpi-card.purple .kpi-value { color: #7b1fa2; }
  .kpi-label { font-size: 10px; color: #999; text-transform: uppercase; letter-spacing: 2px; margin-top: 4px; }
  .section { padding: 24px 30px; }
  .section-title { font-size: 13px; color: #c2aa84; text-transform: uppercase; letter-spacing: 3px; font-weight: 700; margin-bottom: 16px; border-bottom: 2px solid #f0f0f0; padding-bottom: 8px; }
  table { width: 100%; border-collapse: collapse; font-size: 13px; }
  th { text-align: left; color: #999; font-size: 10px; text-transform: uppercase; letter-spacing: 1px; padding: 8px 10px; border-bottom: 2px solid #f0f0f0; }
  td { padding: 10px; border-bottom: 1px solid #f8f8f8; }
  .pos { font-weight: 800; font-size: 16px; }
  .pos.top3 { color: #2e7d32; }
  .pos.top10 { color: #c2aa84; }
  .pos.other { color: #999; }
  .gain { color: #2e7d32; font-weight: 700; font-size: 12px; }
  .loss { color: #c62828; font-weight: 700; font-size: 12px; }
  .competitor-row { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #f8f8f8; }
  .threat-high { color: #c62828; font-weight: 700; font-size: 11px; }
  .threat-medium { color: #f9a825; font-weight: 700; font-size: 11px; }
  .threat-low { color: #2e7d32; font-weight: 700; font-size: 11px; }
  .footer { background: #0a0f1c; padding: 30px; text-align: center; }
  .footer p { color: rgba(255,255,255,0.3); font-size: 11px; margin: 4px 0; }
  .footer a { color: #c2aa84; text-decoration: none; }
</style>
</head>
<body>
<div class="container">
  <div class="header">
    <h1>Centre <span>Rabelais</span></h1>
    <p>Rapport SEO / GEO Hebdomadaire</p>
  </div>
  <div class="date-bar">${dateStr}</div>
  
  <div class="kpi-grid">
    <div class="kpi-card green">
      <div class="kpi-value">${top3.length}</div>
      <div class="kpi-label">Top 3 Google</div>
    </div>
    <div class="kpi-card gold">
      <div class="kpi-value">${top10.length}</div>
      <div class="kpi-label">Top 10 Google</div>
    </div>
    <div class="kpi-card purple">
      <div class="kpi-value">+${avgGain.toFixed(0)}</div>
      <div class="kpi-label">Gain Moyen</div>
    </div>
  </div>

  <div class="section">
    <div class="section-title">🎯 Positions Organiques Google</div>
    <table>
      <tr>
        <th>Mot-clé</th>
        <th>Position</th>
        <th>Évolution</th>
        <th>Google Maps</th>
      </tr>
      ${TARGET_KEYWORDS.map(kw => {
        const gain = kw.previousPosition && kw.currentPosition ? kw.previousPosition - kw.currentPosition : 0;
        const posClass = kw.currentPosition && kw.currentPosition <= 3 ? 'top3' : kw.currentPosition && kw.currentPosition <= 10 ? 'top10' : 'other';
        return `
        <tr>
          <td><strong>${kw.keyword}</strong><br><span style="color:#999;font-size:10px">${kw.targetPage}</span></td>
          <td><span class="pos ${posClass}">#${kw.currentPosition || '—'}</span></td>
          <td>${gain > 0 ? `<span class="gain">↑ ${gain} pos.</span>` : gain < 0 ? `<span class="loss">↓ ${Math.abs(gain)} pos.</span>` : '—'}</td>
          <td><span class="pos ${kw.gmapPosition && kw.gmapPosition <= 3 ? 'top3' : 'other'}">#${kw.gmapPosition || '—'}</span></td>
        </tr>`;
      }).join('')}
    </table>
  </div>

  <div class="section">
    <div class="section-title">🗺️ Google Maps — Top 3 Atteint</div>
    <table>
      <tr><th>Mot-clé</th><th>Position Maps</th><th>Progrès</th></tr>
      ${gmapTop3.map(kw => {
        const gain = kw.previousGmapPosition && kw.gmapPosition ? kw.previousGmapPosition - kw.gmapPosition : 0;
        return `<tr>
          <td><strong>${kw.keyword}</strong></td>
          <td><span class="pos top3">#${kw.gmapPosition}</span></td>
          <td>${gain > 0 ? `<span class="gain">↑ ${gain}</span>` : '='}</td>
        </tr>`;
      }).join('')}
    </table>
  </div>

  <div class="section">
    <div class="section-title">⚔️ Veille Concurrentielle</div>
    ${COMPETITORS.map(c => `
    <div class="competitor-row">
      <div>
        <strong>${c.name}</strong>
        <br><span style="color:#999;font-size:11px">${c.url}</span>
      </div>
      <span class="threat-${c.threat}">${c.threat === 'high' ? '🔴 Menace élevée' : c.threat === 'medium' ? '🟡 Modérée' : '🟢 Faible'}</span>
    </div>`).join('')}
  </div>

  <div class="footer">
    <p><a href="https://centrerabelaislyon.fr">centrerabelaislyon.fr</a></p>
    <p>Rapport généré automatiquement — Ne pas répondre à cet email</p>
    <p>© 2026 Centre Ophtalmologique Rabelais</p>
  </div>
</div>
</body>
</html>`;
}

export async function POST() {
  try {
    const html = generateReportHTML();
    const now = new Date();
    const subject = `📊 Rapport SEO/GEO — Centre Rabelais — Semaine du ${now.toLocaleDateString('fr-FR')}`;

    if (!process.env.RESEND_API_KEY) {
      // Dev mode: return the report HTML for preview
      return NextResponse.json({ 
        success: true, 
        mode: 'preview',
        message: 'RESEND_API_KEY non configurée. Rapport généré en mode aperçu.',
        html 
      });
    }

    await resend.emails.send({
      from: 'Centre Rabelais <reports@centrerabelaislyon.fr>',
      to: ['jeffos101@gmail.com', 'ophrabelais@hotmail.fr'],
      subject,
      html,
    });

    return NextResponse.json({ success: true, message: 'Rapport envoyé avec succès' });
  } catch (error) {
    console.error('Report send error:', error);
    return NextResponse.json({ error: 'Erreur lors de l\'envoi du rapport' }, { status: 500 });
  }
}
