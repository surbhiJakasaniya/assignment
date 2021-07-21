import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  // id = any;
  selectedProject;
  selectedProjectName;
  selectedProjectTasks;
  selectedProjectTask;
  makeTaskEditable = false;
  makeProjectEditable = false;

  constructor(private route: ActivatedRoute,private api: ApiService) { }
  
  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    console.log(this.route.snapshot.params['id']);
    this.selectedProject = {'id':-1,'name':'','description':'','duration':'','image':''};
    this.selectedProjectTask = {'id':-1,'name':'','description':'','start_date':'','end_date':'','project':this.selectedProject.id};

    this.viewProject(id);
    this.viewProjectTasks(id);
  }

  viewProjectTasks = (project_id) => {
    this.api.getAllProjectTasks(project_id).subscribe(
      data => {
        this.selectedProjectTasks = data;
      },
      error => {
        console.log("error is ");
        console.log(error);
      }
    )
  }

  updateTaskList = (event) => {
    this.viewProjectTasks(this.selectedProject.id);
    this.makeTaskEditable = false;
  }

  editProjectBtn = (event) => {
    this.makeProjectEditable = true;
  }

  updateProjectData = (event) => {
    this.viewProject(this.selectedProject.id);
    this.makeProjectEditable = false;
  }

  editTaskBtn = (project_task) => {
    this.selectedProjectTask = project_task;
    this.makeTaskEditable = true;
  }

  fileChanged = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      this.selectedProject.image = reader.result;
    };
    reader.readAsDataURL(e.target.files[0]);
  }

  viewProject = (project_id) => {
    this.api.getProject(project_id).subscribe(
      data => {
        this.selectedProject = data;
        this.selectedProjectName = data['name'];
      },
      error => {
        console.log("error is " + error);
      }
    )
  }

  updateProject = () => {
    this.api.updateProject(this.selectedProject).subscribe(
      data => {
        this.selectedProject = data;
      },
      error => {
        console.log("error is ");
        console.log(error);
      }
    )
  }


  deleteProjectTask = (project_task) => {
    this.api.deleteProjectTask(project_task.id).subscribe(
      data => {
        this.viewProjectTasks(this.selectedProject.id);
      },
      error => {
        console.log("error is ");
        console.log(error);
      }
    )
  }

}
