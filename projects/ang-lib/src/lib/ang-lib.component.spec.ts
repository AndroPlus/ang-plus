import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngLibComponent } from './ang-lib.component';

describe('AngLibComponent', () => {
  let component: AngLibComponent;
  let fixture: ComponentFixture<AngLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
