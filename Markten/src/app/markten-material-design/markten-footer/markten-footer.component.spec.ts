import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarktenFooterComponent } from './markten-footer.component';

describe('MarktenFooterComponent', () => {
  let component: MarktenFooterComponent;
  let fixture: ComponentFixture<MarktenFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarktenFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarktenFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
