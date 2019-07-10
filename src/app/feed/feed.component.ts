import { RssService } from './rss.service';
import { HttpClient } from '@angular/common/http';
import { FeedsService } from './../shares/feeds.service';
import { Feed } from './../shares/feed.interface';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  subscribe: Subscription;
  feed: Feed;
  feeds: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private feedsService: FeedsService,
    private httpClient: HttpClient,
    private rssService: RssService
  ) { }

  ngOnInit() {
    this.subscribe = this.activatedRoute.params.subscribe(
      (res) => {
        this.feed = this.feedsService.feeds[res.id];
      }
    );
    this.rssService.getFeedContent(this.feed.url)
      .subscribe(
        (feeds) => {
          this.feeds = feeds.items;
          console.log(feeds);
        }
      );
  }

}
