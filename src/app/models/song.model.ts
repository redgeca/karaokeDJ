import { Artist } from './artist.model';

export interface Song {
  id: number;
  title: string;
  artistId: number;
  artist: Artist;
}
