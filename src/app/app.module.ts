import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Exam1Component } from './exam1/exam1.component';
import { Exam2Component } from './exam2/exam2.component';
import { Ex1aboutComponent } from './ex1about/ex1about.component';
import { Ex1recipeofthemonthComponent } from './ex1recipeofthemonth/ex1recipeofthemonth.component';

import { Exam3aboutUsComponent } from './exam3/exam3about-us/exam3about-us.component';
import { Exam3cartComponent } from './exam3/exam3cart/exam3cart.component';
import { Exam3contactComponent } from './exam3/exam3contact/exam3contact.component';
import { Exam3detailsComponent } from './exam3/exam3details/exam3details.component';
import { Exam3homeComponent } from './exam3/exam3home/exam3home.component';
import { Exam3productsComponent } from './exam3/exam3products/exam3products.component';
import { CVComponent } from './cv/cv.component';

import { Ex4navbarComponent } from './exam4/ex4navbar/ex4navbar.component';
import { Ex4footerComponent } from './exam4/ex4footer/ex4footer.component';
import { Ex4AlmnGradComponent } from './exam4/ex4-almn-grad/ex4-almn-grad.component';
import { Ex4AlmnDefComponent } from './exam4/ex4-almn-def/ex4-almn-def.component';
import { Ex4AlmnMethodComponent } from './exam4/ex4-almn-method/ex4-almn-method.component';
import { Ex4CareerComponent } from './exam4/ex4-career/ex4-career.component';
import { Ex4CarListComponent } from './exam4/ex4-car-list/ex4-car-list.component';
import { Ex4EventsComponent } from './exam4/ex4-events/ex4-events.component';
import { Ex4HomeComponent } from './exam4/ex4-home/ex4-home.component';
import { Ex4StoriesComponent } from './exam4/ex4-stories/ex4-stories.component';
import { Ex4StoryDetComponent } from './exam4/ex4-story-det/ex4-story-det.component';
import { Ex4InterDetComponent } from './exam4/ex4-inter-det/ex4-inter-det.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    Exam1Component,
    Exam2Component,
    Ex1aboutComponent,
    Ex1recipeofthemonthComponent,

    Exam3aboutUsComponent,
    Exam3cartComponent,
    Exam3contactComponent,
    Exam3detailsComponent,
    Exam3homeComponent,
    Exam3productsComponent,
    CVComponent,

    Ex4navbarComponent,
    Ex4footerComponent,
    Ex4AlmnGradComponent,
    Ex4AlmnDefComponent,
    Ex4AlmnMethodComponent,
    Ex4CareerComponent,
    Ex4CarListComponent,
    Ex4EventsComponent,
    Ex4HomeComponent,
    Ex4StoriesComponent,
    Ex4StoryDetComponent,
    Ex4InterDetComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
