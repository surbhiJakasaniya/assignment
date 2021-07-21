import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SystemAuthComponent } from './system-auth/system-auth.component';
import { ProjectListingComponent } from './project-listing/project-listing.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectTaskDetailComponent } from './project-task-detail/project-task-detail.component';

const routes: Routes = [
  { path : '', redirectTo: '/auth', pathMatch: 'full'},
  { path : 'auth', component : SystemAuthComponent},
  { path : 'projects', component : ProjectListingComponent},
  { path : 'project/:id', component : ProjectDetailComponent},
  { path : 'project/:id/task/:id', component : ProjectTaskDetailComponent},
  { path : '**', redirectTo: '/projects'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ProjectDetailComponent]