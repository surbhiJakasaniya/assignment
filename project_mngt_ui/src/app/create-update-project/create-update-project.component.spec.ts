import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateProjectComponent } from './create-update-project.component';

describe('CreateUpdateProjectComponent', () => {
  let component: CreateUpdateProjectComponent;
  let fixture: ComponentFixture<CreateUpdateProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUpdateProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUpdateProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
