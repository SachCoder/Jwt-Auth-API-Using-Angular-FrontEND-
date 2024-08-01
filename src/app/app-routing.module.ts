import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'node:path';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AuthGuard } from './service/auth.guard';
 

const routes: Routes = [

{
  path:"",
  component:HomeComponent,
  pathMatch:'full'
},
{
  path:"login",
  component:LoginComponent,
  pathMatch:'full'
},
{
  path:"dashboard",
  component:DashboardComponent,
  pathMatch:'full',
   canActivate:[AuthGuard]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
