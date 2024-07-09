import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeroComponent } from './hero/hero.component';
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


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeroComponent,
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

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
