export class Feed {
  public user;
  public title;
  public url;
  public date;
  constructor( user, title, url) {
    this.user = user;
    this.title = title;
    this.url = url;
    this.date = new Date().toLocaleString(
      'en-US',
      {
        hour12: false,
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      }
    );
  }
}
