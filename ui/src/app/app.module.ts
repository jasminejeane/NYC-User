import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { UserCardComponent } from './user-card/user-card.component';
import { UserCardService } from './user-card/user-card.service';
import { NewUserFormComponent } from './new-user-form/new-user-form.component';


@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent,
    NewUserFormComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [UserCardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
