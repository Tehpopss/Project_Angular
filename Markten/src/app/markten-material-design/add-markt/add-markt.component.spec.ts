import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMarktComponent } from './add-markt.component';

describe('AddMarktComponent', () => {
  let component: AddMarktComponent;
  let fixture: ComponentFixture<AddMarktComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMarktComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMarktComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
