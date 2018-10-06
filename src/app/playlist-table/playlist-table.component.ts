import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { PlaylistTableDataSource } from './playlist-table-datasource';
import { MatDialog } from '@angular/material';
import { ConfirmationComponent } from '../confirmation/confirmation.component';
import { KaraokeService } from '../services/karaoke.service';
import { Request as SongRequest } from '../models/request.model';
import { Playlist } from '../models/playlist.model';
import { ReloadService } from './../services/reload.service';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-playlist-table',
  templateUrl: './playlist-table.component.html',
  styleUrls: ['./playlist-table.component.css']
})
export class PlaylistTableComponent implements OnInit {
  dataSource: PlaylistTableDataSource;
  notification: Subscription;
  second=timer(0, 5000);

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['title'];

  constructor(private service: KaraokeService, public dialog: MatDialog,
    private changeDetectorRefs: ChangeDetectorRef, private reloadService: ReloadService) {
      this.notification = this.reloadService.getNotified().subscribe(n => {
        this.dataSource = new PlaylistTableDataSource(this.service);
        this.changeDetectorRefs.detectChanges();
      });

    }

  ngOnInit() {
    this.dataSource = new PlaylistTableDataSource(this.service);
    this.second.subscribe(n => {                                        
      this.dataSource = new PlaylistTableDataSource(this.service);      
      this.changeDetectorRefs.detectChanges();                          
    });                                                                 }


  onClick(item: Playlist ) {
    const dialogRef = this.dialog.open(ConfirmationComponent, {
      data: { title: item.request.song.title + ' par ' + item.request.song.artist.name, singer: item.request.singerName
    } });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        console.log('On efface');
        this.service.deletePlaylist(item, true).subscribe(data => {
          this.dataSource = new PlaylistTableDataSource(this.service);
          console.log(data);
          this.changeDetectorRefs.detectChanges();
        });
      }
    });
  }

}
