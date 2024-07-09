import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Exam1Component } from './exam1/exam1.component';
import { Exam2Component } from './exam2/exam2.component';
import { Ex1recipeofthemonthComponent } from './ex1recipeofthemonth/ex1recipeofthemonth.component';
import { Ex1aboutComponent } from './ex1about/ex1about.component';
import { Exam3homeComponent } from './exam3/exam3home/exam3home.component';
import { Exam3aboutUsComponent } from './exam3/exam3about-us/exam3about-us.component';
import { Exam3cartComponent } from './exam3/exam3cart/exam3cart.component';
import { Exam3contactComponent } from './exam3/exam3contact/exam3contact.component';
import { Exam3detailsComponent } from './exam3/exam3details/exam3details.component';
import { Exam3productsComponent } from './exam3/exam3products/exam3products.component';


const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
    pathMatch: 'full'
  }, {
    path: 'exam1', component: Exam1Component,
  }, {
    path: 'exam2', component: Exam2Component,
  }, {
    path: 'ex1recipeofthemonth', component: Ex1recipeofthemonthComponent
  }, {
    path: 'ex1about', component: Ex1aboutComponent
  },
  { path: 'exam3', component: Exam3homeComponent

  }, {
    path: 'ex3about', component: Exam3aboutUsComponent
  }, {
    path: 'ex3cart', component: Exam3cartComponent
  },
  {
    path: 'ex3contact', component: Exam3contactComponent
  }, {
    path: 'ex3details/:id', component: Exam3detailsComponent
  }, {
    path: 'ex3products', component: Exam3productsComponent
  },
  {
    path: '**', redirectTo: '/home'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  ],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
