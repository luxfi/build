import type { NextRequest } from 'next/server';
import { ImageResponse } from 'next/og';
import { loadFonts, createOGResponse } from '@/utils/og-image';

export const runtime = 'edge';

export async function GET(
  request: NextRequest,
): Promise<ImageResponse> {
  const { searchParams } = request.nextUrl;
  const rawTitle = searchParams.get('title');
  const title = rawTitle?.replace(/\s*\|\s*Lux Lux Build$/, '');
  const description = searchParams.get('description');

  const fonts = await loadFonts();

  return createOGResponse({
    title: title ?? 'Hackathons',
    description: description ?? 'Join exciting blockchain hackathons and build the future on Lux',
    path: 'hackathons',
    fonts
  });
}