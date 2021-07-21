import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemAuthComponent } from './system-auth.component';

describe('SystemAuthComponent', () => {
  let component: SystemAuthComponent;
  let fixture: ComponentFixture<SystemAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemAuthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
