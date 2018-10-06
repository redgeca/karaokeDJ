import { Song } from './song.model';

export interface Request {
  id: number;
  songId: number;
  song: Song;
  singerName: string;
  requestTime: Date;
  notes: string;

}
