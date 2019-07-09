import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { Component1Component } from './component1/component1.component';
import { Component3Component } from './component3/component3.component';
import { Component4Component } from './component4/component4.component';
import { Component2Component } from './component1/component2/component2.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes:Routes =[ {path:'component1', component : Component1Component},
                          
                          {path:'component3', component : Component3Component},
                          {path:'component4', component : Component4Component}];
@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    Component3Component,
    Component4Component,
    Component2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
