import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Playlist } from '../models/playlist.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*' ,
    'Access-Control-Allow-Method': '*',
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class KaraokeService {
  BASE_URL = 'http://localhost:4200/api/';
  REQUEST_URL = this.BASE_URL + 'Requests';
  PLAYLIST_URL = this.BASE_URL + 'Playlist';

  constructor(private httpClient: HttpClient ) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  deletePlaylist(item: Playlist, hardDelete: boolean ) {
    console.log('Deleting ');
    let bodyText = null;
    let deleteHttpOptions;
    if (hardDelete) {
      console.log("ON HARD DELETE")
      deleteHttpOptions = {
        headers: new HttpHeaders({
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          body: 'DELETE'
        })
      };
    } else {
      console.log('SOFT DELETE')
      deleteHttpOptions = {
        headers: new HttpHeaders({
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        })
      };
    }
    console.log('Deleted 1');
    if (hardDelete) {
      this.httpClient.delete(this.PLAYLIST_URL + '?id=' + item.id + '&delete="DELETE"', deleteHttpOptions).subscribe(data => {
        console.log('Deleted 2');
      });
  
    } else {
      this.httpClient.delete(this.PLAYLIST_URL + '?id=' + item.id, deleteHttpOptions).subscribe(data => {
        console.log('Deleted 2');
      });
  
    }

    return this.getPlaylist();
  }

  getPlaylist(): Observable<Playlist[]> {
    const result: Observable<Playlist[]> = this.httpClient.get<Playlist[]>(this.PLAYLIST_URL);
    console.log(result);
    return result;
  }
}
