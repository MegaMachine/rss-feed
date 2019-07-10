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
    this.httpClient.get('http://localhost:5000/feeds')
      .subscribe((data: Feed[]) => {
        this.feeds.next(data);
      });
  }
}
