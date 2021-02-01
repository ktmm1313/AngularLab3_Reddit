import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface PaupersReddits {
  title: string;
  image: string;
  link: string;
};

@Injectable({
  providedIn: 'root'
})
export class RedditApiService {
  reddits: PaupersReddits[] = [];

  constructor(private http: HttpClient) {}

getReddits() {
 const url = "https://www.reddit.com/r/aww/.json";
  this.http.get(url)
    .subscribe((response: any) => {
     
      const reddits = response.data.children;

      for (let reddit of reddits) {
          const paupersReddits : PaupersReddits = {
          title: reddit.data.title,
          link: "https://reddit.com" + reddit.data.permalink,
          image: reddit.data.thumbnail
        };
        this.reddits.push(paupersReddits);
        }
    }, (error) => {
  console.error(error);
}
    );
}
}
