import { Request } from './request.model';

export interface Playlist {
  id: number;
  requestId: number;
  request: Request;
  playOrder: number;
}
