'use client';
import { SpotifyApi } from '@spotify/web-api-ts-sdk';

export const spotifyClient = SpotifyApi.withUserAuthorization(
  process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID!,
  process.env.NEXT_PUBLIC_SPOTIFY_URL!,
  []
);
