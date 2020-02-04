import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartexComponent } from './chartex.component';

describe('ChartexComponent', () => {
  let component: ChartexComponent;
  let fixture: ComponentFixture<ChartexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
