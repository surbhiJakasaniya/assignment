import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-create-update-project',
  templateUrl: './create-update-project.component.html',
  styleUrls: ['./create-update-project.component.css']
})
export class CreateUpdateProjectComponent implements OnInit {


  @Input()
  selectedProject;

  @Output()
  notify:EventEmitter<string> = new EventEmitter<string>();

  save_error: Array<string> = [];

  constructor(private api: ApiService) { }
  
  ngOnInit(): void {
  }

  fileChanged = (e) => {
    console.log("here in fiel change d 0000");
    const reader = new FileReader();
    reader.onload = () => {
      this.selectedProject.image = reader.result;
    };
    reader.readAsDataURL(e.target.files[0]);
  }

  updateProject = () => {
    if(this.selectedProject.image && this.selectedProject.image.includes('images/image')){
      delete this.selectedProject['image'];
      // console.log(this.selectedProject.image.includes('images/image'));
    }
    this.api.updateProject(this.selectedProject).subscribe(
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

  closeProject = () => {
    this.notify.emit();
  }

  createProject = () => {
    this.api.createProject(this.selectedProject).subscribe(
      data => {
        this.selectedProject = data;
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
