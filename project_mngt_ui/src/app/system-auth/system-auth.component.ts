import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-system-auth',
  templateUrl: './system-auth.component.html',
  styleUrls: ['./system-auth.component.css'],
  providers: [ApiService]
})
export class SystemAuthComponent implements OnInit {

  user_input;
  save_error: Array<string> = [];

  constructor(private api: ApiService, private router: Router) { 

  }
  
  ngOnInit(): void {
    this.user_input = {'username':'','password':''};
  }
  loginUser = () => {
    this.api.loginUser(this.user_input).subscribe(
      data => {
        this.router.navigate(['projects']);
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

  registerUser = () =>{
    this.api.registerUser(this.user_input).subscribe(
      data => {
        alert("user created");
      },
      error => {
        console.log("error is " + error);
      }
    )
  }
}
