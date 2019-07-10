import { FeedComponent } from './feed/feed.component';
// import { FeedComponent } from './feeds-list/feed-item/feed-item.component';
import { FeedsListComponent } from './feeds-list/feeds-list.component';
import { AuthComponent } from './auth/auth.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: AuthComponent},
  {path: 'feeds', canActivate: [AuthGuard], component: FeedsListComponent},
  {path: 'feeds/:id', canActivate: [AuthGuard], component: FeedComponent},
  // {path: 'feeds/:id', component: FeedComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
