import { AuthGuard } from './auth.guard';
import { AuthService } from './auth/auth.service';
import { FeedsService } from './shares/feeds.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { FeedsListComponent } from './feeds-list/feeds-list.component';
import { FeedItemComponent } from './feeds-list/feed-item/feed-item.component';
import { HeaderComponent } from './header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    FeedsListComponent,
    FeedItemComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [FeedsService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
