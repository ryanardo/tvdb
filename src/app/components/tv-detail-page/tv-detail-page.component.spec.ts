import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvDetailPageComponent } from './tv-detail-page.component';

describe('TvDetailPageComponent', () => {
  let component: TvDetailPageComponent;
  let fixture: ComponentFixture<TvDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
