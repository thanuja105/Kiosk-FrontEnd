import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartersafeComponent } from './smartersafe.component';

describe('SmartersafeComponent', () => {
  let component: SmartersafeComponent;
  let fixture: ComponentFixture<SmartersafeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartersafeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartersafeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
