import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchLoungeComponent } from './watch-lounge.component';

describe('WatchLoungeComponent', () => {
  let component: WatchLoungeComponent;
  let fixture: ComponentFixture<WatchLoungeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WatchLoungeComponent]
    });
    fixture = TestBed.createComponent(WatchLoungeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
