import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path: '', component : LoginComponent, pathMatch: 'full'},
  {path: 'signup', component : SignUpComponent,},
  {path: 'login', component : LoginComponent, pathMatch: 'full'}, 
  {path: 'home', component : HomeComponent,},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
