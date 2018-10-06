import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { Playlist } from '../models/playlist.model';
import { KaraokeService } from '../services/karaoke.service';
/**
 * Data source for the RequestsTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class PlaylistTableDataSource extends DataSource<Playlist> {

  constructor(private service: KaraokeService) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Playlist[]> {
    return this.service.getPlaylist();
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

}
