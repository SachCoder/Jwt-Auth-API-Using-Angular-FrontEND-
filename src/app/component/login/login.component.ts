import { Component } from '@angular/core';
import { LoginService } from '../../service/login.service';
 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private loginService:LoginService){
 
  }
   credentials:any={
      username:'',
      password:''
   }
   OnSubmit(){
    console.log("click")
    if((this.credentials.email!='' && this.credentials.password!='' ) && (this.credentials.email!='' && this.credentials.password!='' )){
      console.log("not null");
      //token
         this.loginService.generateToken(this.credentials).subscribe(
          (response:any)=>{
            // console.log(response);
            this.loginService.loginUser(response.token);
            window.location.href="/dashboard";
          },
          error=>{
            console.log("error hai", error);
          }
         )
    }
   
   else{
    console.log("credetials do not put any null or blank value");
   }
}


}
