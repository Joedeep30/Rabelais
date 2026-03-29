import { NextRequest, NextResponse } from 'next/server';
import { GBP_POST_TEMPLATES } from '@/lib/keywords';

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    // Rotate through templates based on day of year
    const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000);
    const templateIndex = dayOfYear % GBP_POST_TEMPLATES.length;
    const template = GBP_POST_TEMPLATES[templateIndex];

    // Build enriched post text with links (per video strategy)
    const GOOGLE_MAPS_URL = 'https://g.co/kgs/Centre-Ophtalmologique-Rabelais';
    const websiteLink = template.links?.website || template.targetPage;
    const mapsLink = template.links?.googleMaps || GOOGLE_MAPS_URL;
    
    // Get next template for cross-post link (video strategy: link to another GBP post page)
    const nextTemplate = GBP_POST_TEMPLATES[(templateIndex + 1) % GBP_POST_TEMPLATES.length];
    
    // Enriched text: original + links at bottom
    const enrichedText = `${template.textTemplate}\n\n🔗 ${websiteLink}\n📍 ${mapsLink}\n➡️ ${nextTemplate.targetPage}`;

    // In production, this would call the Google Business Profile API
    console.log(`[GBP Auto-Post] Publishing: "${template.keyword}" → ${websiteLink}`);
    console.log(`[GBP Auto-Post] Text: ${enrichedText}`);

    // TODO: Integrate Google Business Profile API when credentials are configured
    // const gbpResponse = await publishToGBP({ ...template, text: enrichedText });

    return NextResponse.json({
      success: true,
      published: {
        keyword: template.keyword,
        text: enrichedText,
        targetPage: websiteLink,
        googleMapsLink: mapsLink,
        crossPostLink: nextTemplate.targetPage,
        callToAction: template.callToAction,
        timestamp: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error('GBP poster cron error:', error);
    return NextResponse.json({ error: 'Failed to create GBP post' }, { status: 500 });
  }
}
