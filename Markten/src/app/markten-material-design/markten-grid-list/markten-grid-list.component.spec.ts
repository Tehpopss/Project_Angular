import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarktenGridListComponent } from './markten-grid-list.component';

describe('MarktenGridListComponent', () => {
  let component: MarktenGridListComponent;
  let fixture: ComponentFixture<MarktenGridListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarktenGridListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarktenGridListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
