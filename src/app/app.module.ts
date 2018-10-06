import { KaraokeService } from './services/karaoke.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,
  MatTableModule, MatPaginatorModule, MatSortModule, MatCardModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { PlaylistTableComponent } from './playlist-table/playlist-table.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material';
import { NgDragDropModule } from 'ng-drag-drop';
import { ConfirmationComponent } from './confirmation/confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    PlaylistTableComponent,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    HttpClientModule,
    NgDragDropModule.forRoot(),
  ],
  entryComponents: [ConfirmationComponent],
  providers: [ KaraokeService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
