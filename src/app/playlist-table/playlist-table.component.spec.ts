
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistTableComponent } from './playlist-table.component';

describe('PlaylistTableComponent', () => {
  let component: PlaylistTableComponent;
  let fixture: ComponentFixture<PlaylistTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaylistTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaylistTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
