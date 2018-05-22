import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms'; //import FormsModule
import { HttpModule } from '@angular/http';
import { UserCardComponent } from './user-card/user-card.component'; //import module
import { UserCardService } from './user-card/user-card.service';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    UserCardComponent
  ],
  imports: [
    BrowserModule,
    HttpModule, //add HttpModule here
    FormsModule //add it as an import

  ],
  providers: [UserCardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
