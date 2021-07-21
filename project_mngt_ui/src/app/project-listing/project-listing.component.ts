import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-project-listing',
  templateUrl: './project-listing.component.html',
  styleUrls: ['./project-listing.component.css']
})
export class ProjectListingComponent implements OnInit {

  ngOnInit(): void {
  }

  projects = [{'id':-1,'name':'','description':''}];
  selectedProject;
  makeProjectEditable = false;

  constructor(private api: ApiService){
    this.getProjects();
    this.selectedProject = {'id':-1,'name':'','description':'','duration':'','image':''};
  }

  getProjects = () => {
    this.api.getAllProjects().subscribe(
      data => {
        this.projects = data;
      },
      error => {
        console.log("error is ");
        console.log(error);
      }
    )
  }

  viewProject = (project) => {
    this.api.getProject(project.id).subscribe(
      data => {
        this.selectedProject = data;
      },
      error => {
        console.log("error is ");
        console.log(error);
      }
    )
  }

  updateProjectData = (event) => {
    this.getProjects();
    this.makeProjectEditable = false;
  }


  deleteProject = (project) => {
    this.api.deleteProject(project.id).subscribe(
      data => {
        this.getProjects();
      },
      error => {
        console.log("error is ");
        console.log(error);
      }
    )
  }

  editProjectBtn = (project) => {
    this.selectedProject = project;
    this.makeProjectEditable = true;
  }
  

}
