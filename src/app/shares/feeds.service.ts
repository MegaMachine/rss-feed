import { Feed } from './feed.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';


@Injectable()
export class FeedsService {
  feeds = new BehaviorSubject<Feed[]>([]);

  constructor(
    private httpClient: HttpClient
  ) {}

  getFeeds() {
    return this.httpClient.get('http://localhost:5000/feeds')
      .subscribe((res: Feed[]) => {
        this.feeds.next(res);
      });
  }
  deleteFeed(deleteFeed) {
    console.log(deleteFeed);
    return this.httpClient.delete('http://localhost:5000/feeds', deleteFeed)
      .subscribe((res: any) => {
        this.feeds.next(res);
      });
  }
  addFeed(feed: Feed) {
    return this.httpClient.put('http://localhost:5000/feeds', feed)
      .subscribe((res: Feed[]) => {
        this.feeds.next(res);
      });
  }
}
