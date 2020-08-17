import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JkListComponent } from './jk-list/jk-list.component';

import { HttpClientModule } from '@angular/common/http';
import { JkListItemComponent } from './jk-list-item/jk-list-item.component';


@NgModule({
  declarations: [
    AppComponent,
    JkListComponent,
    JkListItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
