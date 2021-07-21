import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // baseurl = 'http://127.0.0.1:8000';
  baseurl = 'http://3.108.250.204:8000';
  httpHeaders = new HttpHeaders({'Content-Type':'application/json'});

  constructor(private http: HttpClient) { }

  getAllProjects(): Observable<any>{
    return this.http.get(this.baseurl + '/projects/',{headers : this.httpHeaders});
  }

  getProject(id): Observable<any>{    
    return this.http.get(this.baseurl + '/projects/'+ id + '/',{headers : this.httpHeaders});
  }

  updateProject(project): Observable<any>{    
    const body = {name:project.name,description:project.description,duration:project.duration,image:project.image};
    return this.http.patch(this.baseurl + '/projects/'+ project.id + '/',body,{headers : this.httpHeaders});
  }
  
  createProject(project): Observable<any>{    
    const body = {name:project.name,description:project.description,duration:project.duration,image:project.image};
    return this.http.post(this.baseurl + '/projects/',body,{headers : this.httpHeaders});
  }

  deleteProject(id): Observable<any>{    
    return this.http.delete(this.baseurl + '/projects/'+ id + '/',{headers : this.httpHeaders});
  }


  registerUser(user_data): Observable<any>{    
    return this.http.post(this.baseurl + '/users/',user_data,{headers : this.httpHeaders});
  }

  
  loginUser(user_data): Observable<any>{    
    return this.http.post(this.baseurl + '/auth/',user_data,{headers : this.httpHeaders});
  }




  getAllProjectTasks(project_id): Observable<any>{
    return this.http.get(this.baseurl + '/project_tasks/?project='+project_id,{headers : this.httpHeaders});
  }

  getProjectTask(id): Observable<any>{    
    return this.http.get(this.baseurl + '/project_tasks/'+ id + '/',{headers : this.httpHeaders});
  }

  updateProjectTask(project_task): Observable<any>{    
    const body = {name:project_task.name,description:project_task.description,start_date:project_task.start_date,end_date:project_task.end_date,project:project_task.project};
    return this.http.put(this.baseurl + '/project_tasks/'+ project_task.id + '/',body,{headers : this.httpHeaders});
  }
  
  createProjectTask(project_task): Observable<any>{  
    const body = {name:project_task.name,description:project_task.description,start_date:project_task.start_date,end_date:project_task.end_date,project:project_task.project};
    return this.http.post(this.baseurl + '/project_tasks/',body,{headers : this.httpHeaders});
  }

  deleteProjectTask(id): Observable<any>{    
    return this.http.delete(this.baseurl + '/project_tasks/'+ id + '/',{headers : this.httpHeaders});
  }

  
}
