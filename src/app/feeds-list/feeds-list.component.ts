import { Feed } from './../shares/feed.interface';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-feeds-list',
  templateUrl: './feeds-list.component.html',
  styleUrls: ['./feeds-list.component.scss']
})
export class FeedsListComponent implements OnInit,OnDestroy {
  feeds: Feed[];
  subscriptionFeeds: Subscription;
  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
    this.subscriptionFeeds = this.httpClient.get('./assets/feeds.json')
      .subscribe( (data: Feed[]) => {
        this.feeds = data;
      });
  }
  onSubmit(form: NgForm) {

  }
  ngOnDestroy() {
    this.subscriptionFeeds.unsubscribe();
  }

}
