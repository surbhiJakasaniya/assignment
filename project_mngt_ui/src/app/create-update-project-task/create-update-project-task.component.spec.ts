import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateProjectTaskComponent } from './create-update-project-task.component';

describe('CreateUpdateProjectTaskComponent', () => {
  let component: CreateUpdateProjectTaskComponent;
  let fixture: ComponentFixture<CreateUpdateProjectTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUpdateProjectTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUpdateProjectTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
