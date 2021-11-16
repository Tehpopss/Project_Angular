import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarktenCardComponent } from './markten-card.component';

describe('MarktenCardComponent', () => {
  let component: MarktenCardComponent;
  let fixture: ComponentFixture<MarktenCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarktenCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarktenCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
