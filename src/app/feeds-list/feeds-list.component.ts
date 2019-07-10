import { FeedsService } from './../shares/feeds.service';
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
export class FeedsListComponent implements OnInit {
  feeds: Feed[];
  constructor(
    private feedsService: FeedsService
  ) { }

  ngOnInit() {
    this.feedsService.getFeeds();
    this.feedsService.feeds
      .subscribe((data: Feed[]) => {
        this.feeds = data;
      });
  }

  onSubmit(form: NgForm) {
    const feed: Feed = form.form.value;
    this.feedsService.addFeed(feed);
  }
}
