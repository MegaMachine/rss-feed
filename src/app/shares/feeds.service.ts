import { Feed } from './feed.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';


@Injectable()
export class FeedsService {
  bsFeeds = new BehaviorSubject<Feed[]>([]);
  feeds: Feed[];
  saveCheck = new BehaviorSubject<boolean>(false);
  constructor(
    private httpClient: HttpClient
  ) {
    this.bsFeeds.subscribe(
      (res) => {
        this.feeds = res;
      }
    );
  }

  getFeeds() {
    return this.httpClient.get('http://localhost:5000/feeds')
      .subscribe((res: Feed[]) => {
        this.bsFeeds.next(res);
      });
  }
  putFeeds() {
    return this.httpClient.put('http://localhost:5000/feeds', this.feeds)
      .subscribe((res) => {
        // this.bsFeeds.next(res);
      });
  }
  deleteFeed(deleteFeed: Feed) {
    for (const key in this.feeds) {
      if (deleteFeed.user === this.feeds[key].user && deleteFeed.title === this.feeds[key].title ) {
        this.feeds.splice(Number(key), 1);
      }
    }
    this.bsFeeds.next(this.feeds);
  }
  addFeed(feed: Feed) {
    console.log(feed);
    this.feeds.push(feed);
    this.bsFeeds.next(this.feeds);
  }
}
