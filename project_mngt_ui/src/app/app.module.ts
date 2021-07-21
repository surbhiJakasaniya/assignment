import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule} from  '@angular/forms';
import { ProjectListingComponent } from './project-listing/project-listing.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { CreateUpdateProjectTaskComponent } from './create-update-project-task/create-update-project-task.component';
import { ProjectTaskDetailComponent } from './project-task-detail/project-task-detail.component';
import { CreateUpdateProjectComponent } from './create-update-project/create-update-project.component';
// import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CommonModule } from '@angular/common';
import { SystemAuthComponent } from './system-auth/system-auth.component';  


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ProjectListingComponent,
    ProjectDetailComponent,
    CreateUpdateProjectTaskComponent,
    ProjectTaskDetailComponent,
    CreateUpdateProjectComponent,
    SystemAuthComponent,
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // BsDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
