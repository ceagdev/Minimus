import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WheatherCardComponent } from './wheather-card.component';

describe('WheatherCardComponent', () => {
  let component: WheatherCardComponent;
  let fixture: ComponentFixture<WheatherCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WheatherCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WheatherCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
