import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedListComponent } from 'src/app/components/feed-list/feed-list.component';

describe('FeedListComponent', () => {
  let component: FeedListComponent;
  let fixture: ComponentFixture<FeedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
