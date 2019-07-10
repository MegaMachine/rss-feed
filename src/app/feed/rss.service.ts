import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { map, catchError} from 'rxjs/operators';

@Injectable()
export class RssService {

  private rssToJsonServiceBaseUrl: string = 'https://rss2json.com/api.json?rss_url=';

  constructor(
    private httpClient: HttpClient
  ) { }

  getFeedContent(url: string): Observable<any> {
    return this.httpClient.get(this.rssToJsonServiceBaseUrl + url)
      .pipe(
        map(this.extractFeeds),
        catchError(this.handleError)
      );
  }

  private extractFeeds(res: Response): any {
    let feed = res;
    return feed || { };
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
