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

    // In production, this would call the Google Business Profile API
    // For now, log the post that would be published
    console.log(`[GBP Auto-Post] Publishing: "${template.keyword}" → ${template.targetPage}`);
    console.log(`[GBP Auto-Post] Text: ${template.textTemplate}`);
    console.log(`[GBP Auto-Post] Image prompt: ${template.imagePrompt}`);

    // TODO: Integrate Google Business Profile API when credentials are configured
    // const gbpResponse = await publishToGBP(template);

    return NextResponse.json({
      success: true,
      published: {
        keyword: template.keyword,
        text: template.textTemplate,
        targetPage: template.targetPage,
        callToAction: template.callToAction,
        timestamp: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error('GBP poster cron error:', error);
    return NextResponse.json({ error: 'Failed to create GBP post' }, { status: 500 });
  }
}
