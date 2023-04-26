import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}

  createPost(postData: Post) {
    return this.http.post<{ name: string }>(
      'https://ng-complete-course-97a40-default-rtdb.firebaseio.com/posts.json',
      postData
    );
  }

  deletePosts() {
    return this.http.delete(
      'https://ng-complete-course-97a40-default-rtdb.firebaseio.com/posts.json'
    );
  }

  getPosts(): Observable<Post[]> {
    return this.http
      .get<{ [key: string]: Post }>(
        'https://ng-complete-course-97a40-default-rtdb.firebaseio.com/posts.json'
      )
      .pipe(
        map((responseData) => {
          const postsArray: Post[] = [];

          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        })
      );
  }
}
