import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarktenToolbarComponent } from './markten-toolbar.component';

describe('MarktenToolbarComponent', () => {
  let component: MarktenToolbarComponent;
  let fixture: ComponentFixture<MarktenToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarktenToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarktenToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
