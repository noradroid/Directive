import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountEnterComponent } from './count-enter.component';

describe('CountEnterComponent', () => {
  let component: CountEnterComponent;
  let fixture: ComponentFixture<CountEnterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountEnterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountEnterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
