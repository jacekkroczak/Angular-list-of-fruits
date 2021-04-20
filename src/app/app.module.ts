import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JkListComponent } from './jk-list/jk-list.component';

import { JkListItemComponent } from './jk-list-item/jk-list-item.component';
import { JkScrollToTopComponent } from './jk-scroll-to-top/jk-scroll-to-top.component';


@NgModule({
  declarations: [
    AppComponent,
    JkListComponent,
    JkListItemComponent,
    JkScrollToTopComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
