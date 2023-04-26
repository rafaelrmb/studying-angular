import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Post } from './models/post.model';
import { PostsService } from './services/posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  loadedPosts: Post[] = [];
  isLoading: boolean = false;

  constructor(private http: HttpClient, private postsService: PostsService) {}

  ngOnInit() {
    this.onFetchPosts();
  }

  onCreatePost(postData: Post) {
    this.postsService.createPost(postData).subscribe((responseData) => {
      console.log('This should be the post ID: ' + responseData);
    });
  }

  onFetchPosts() {
    this.fetchPosts();
  }

  onClearPosts() {}

  private fetchPosts() {
    this.isLoading = true;
    this.postsService.getPosts().subscribe((postsData) => {
      this.loadedPosts = postsData;
    });
    this.isLoading = false;
  }
}
