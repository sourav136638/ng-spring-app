import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './site/home/home.component';
import { GetComponent } from './site/get/get.component';
import { PostComponent } from './site/post/post.component';



const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'post',component:PostComponent},
  {path:'user/:id',component:GetComponent},  
];


@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
