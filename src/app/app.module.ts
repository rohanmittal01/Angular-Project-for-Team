import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PracticeComponent } from './practice/practice.component';

import { CaseCardComponent } from './case-card/case-card.component';
import { CasesComponent } from './cases/cases.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PracticeComponent,
    CaseCardComponent,
    CasesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
