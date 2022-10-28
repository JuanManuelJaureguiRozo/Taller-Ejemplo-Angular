import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CourseModule } from './course/course.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CourseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
