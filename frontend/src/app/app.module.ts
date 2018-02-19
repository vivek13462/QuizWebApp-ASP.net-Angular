import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatInputModule, MatCardModule} from '@angular/material';
import { AppComponent } from './app.component';
import { QuestionComponent } from './question.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent, QuestionComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, MatButtonModule, MatInputModule, MatCardModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
