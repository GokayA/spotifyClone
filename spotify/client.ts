'use client';
import { SpotifyApi } from '@spotify/web-api-ts-sdk';

export const spotifyClient = SpotifyApi.withUserAuthorization(
  '5a59dc2bc99243e287ee761eaf9d3410',
  'http://localhost:3000',
  []
);
