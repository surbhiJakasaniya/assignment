import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../api.service';

// import { EventEmitter } from 'events';


@Component({
  selector: 'app-create-update-project-task',
  templateUrl: './create-update-project-task.component.html',
  styleUrls: ['./create-update-project-task.component.css']
})
export class CreateUpdateProjectTaskComponent implements OnInit {

  @Input()
  selectedTask;

  @Input()
  selectedProject;

  save_error: Array<string> = [];

  @Output()
  notify:EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
  }

  constructor(private api: ApiService){
  }

  createProjectTask = () => {
    this.selectedTask.project = this.selectedProject.id;
    this.api.createProjectTask(this.selectedTask).subscribe(
      data => {
        this.selectedTask = data;
        this.notify.emit();
      },
      error => {
        this.save_error = [];
        if (typeof error['error'] == "object"){
          for (const k in error['error']) { 
            let error_msg = error['error'][k][0];
            if(!this.save_error.includes(error_msg)){
              this.save_error.push(error_msg);
            }
          }
        }
        else{
          this.save_error.push(error['message']);
        }
      }
    )
  }

  closeTask = () => {
    this.notify.emit();
  }

  updateProjectTask = () => {
    this.api.updateProjectTask(this.selectedTask).subscribe(
      data => {
        this.notify.emit();
      },
      error => {
        this.save_error = [];
        if (typeof error['error'] == "object"){
          for (const k in error['error']) { 
            let error_msg = error['error'][k][0];
            if(!this.save_error.includes(error_msg)){
              this.save_error.push(error_msg);
            }
          }
        }
        else{
          this.save_error.push(error['message']);
        }
      }
    )
  }  

}
