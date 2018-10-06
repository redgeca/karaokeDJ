import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReloadService {
  private subject = new Subject<any>();

  notify() {
    this.subject.next();
  }
  constructor() { }

  getNotified(): Observable<any> {
    return this.subject.asObservable();
  }
}
