import { Component , OnInit } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { __importDefault } from 'tslib';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  public loggedIn = false;
 ngOnInit(): void {
   this.loggedIn = this.loginService.isLoggedIn();

 }
constructor(private loginService:LoginService){}

logout(){
  this.loginService.logout();
  location.reload()
}

}
