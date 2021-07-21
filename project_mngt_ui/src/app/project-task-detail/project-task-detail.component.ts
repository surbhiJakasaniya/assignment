import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-project-task-detail',
  templateUrl: './project-task-detail.component.html',
  styleUrls: ['./project-task-detail.component.css']
})
export class ProjectTaskDetailComponent implements OnInit {

  projectTask;
  makeTaskEditable = false;
  projectTaskName;

  constructor(private route: ActivatedRoute,private api: ApiService) { 

  }
  
  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.projectTask = {'id':-1,'name':'','description':'','start_date':'','end_date':'','project':''};
    this.viewTask(id);
  }

  viewTask = (task_id) => {
    this.api.getProjectTask(task_id).subscribe(
      data => {
        this.projectTask = data;
        this.projectTaskName = data['name'];
      },
      error => {
        console.log("error is " + error);
      }
    )
  }
  
  editTaskBtn = (project_task) => {
    this.projectTask = project_task;
    this.makeTaskEditable = true;
  }

  updateTaskList = (event) => {
    this.makeTaskEditable = false;
    this.projectTaskName = this.projectTask['name'];

  }
}
