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
import { CVComponent } from './cv/cv.component';
import { Ex4HomeComponent } from './exam4/ex4-home/ex4-home.component';
import { Ex4AlmnDefComponent } from './exam4/ex4-almn-def/ex4-almn-def.component';
import { Ex4AlmnGradComponent } from './exam4/ex4-almn-grad/ex4-almn-grad.component';
import { Ex4CarListComponent } from './exam4/ex4-car-list/ex4-car-list.component';
import { Ex4CareerComponent } from './exam4/ex4-career/ex4-career.component';
import { Ex4EventsComponent } from './exam4/ex4-events/ex4-events.component';
import { Ex4InterDetComponent } from './exam4/ex4-inter-det/ex4-inter-det.component';
import { Ex4StoriesComponent } from './exam4/ex4-stories/ex4-stories.component';
import { Ex4StoryDetComponent } from './exam4/ex4-story-det/ex4-story-det.component';
import { Ex4AlmnMethodComponent } from './exam4/ex4-almn-method/ex4-almn-method.component';



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
    path: 'ex4home', component: Ex4HomeComponent
  },{
  path: 'ex4almndef', component: Ex4AlmnDefComponent
  },{
    path: 'ex4almngrad', component: Ex4AlmnGradComponent
  },{
    path: 'ex4almnmethod', component: Ex4AlmnMethodComponent
  },
  {
    path: 'ex4carlist', component: Ex4CarListComponent
  }, {
    path: 'ex4career', component: Ex4CareerComponent
  },{
    path: 'ex4events', component: Ex4EventsComponent
  }, {
    path: 'ex4interview/:id2', component: Ex4InterDetComponent
  },{
    path: 'ex4stories', component: Ex4StoriesComponent
  }, {
    path: 'ex4stories/:id', component: Ex4StoryDetComponent
  },


  { path: 'cv', component: CVComponent},
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
