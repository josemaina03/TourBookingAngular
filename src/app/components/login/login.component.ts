import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // loginObj: any = {
  //   "email": "",
  //   "password": ""
  // };
  loginObj: Login;
form: any;

  constructor(private http: HttpClient,private router: Router){
    this.loginObj = new Login();
  }
  onLogin(){
    debugger;
    this.http.post('http://localhost:3000/auth/login', this.loginObj).subscribe((res:any)=>{
      if(res.result){
        alert("login success");
        this.router.navigateByUrl('home')
      }else{
        alert(res.message)
      }

      })
    }

  }

  export class Login{

  
      EmailId: string;
      Password: string;
      constructor(){
        this.EmailId = '';
        this.Password = '';
      }
}
