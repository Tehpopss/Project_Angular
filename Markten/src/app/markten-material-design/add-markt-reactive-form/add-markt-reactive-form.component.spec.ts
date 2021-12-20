import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMarktReactiveFormComponent } from './add-markt-reactive-form.component';

describe('AddMarktReactiveFormComponent', () => {
  let component: AddMarktReactiveFormComponent;
  let fixture: ComponentFixture<AddMarktReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMarktReactiveFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMarktReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
