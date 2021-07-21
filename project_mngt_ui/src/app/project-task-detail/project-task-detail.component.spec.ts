import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTaskDetailComponent } from './project-task-detail.component';

describe('ProjectTaskDetailComponent', () => {
  let component: ProjectTaskDetailComponent;
  let fixture: ComponentFixture<ProjectTaskDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectTaskDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectTaskDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
