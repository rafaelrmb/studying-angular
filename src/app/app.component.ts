import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
  errorMsg = '';

  constructor(private http: HttpClient, private postsService: PostsService) {}

  ngOnInit() {
    this.isLoading = true;
    this.onFetchPosts();
  }

  onCreatePost(postData: Post) {
    this.postsService.createPost(postData).subscribe((responseData) => {
      console.log('This should be the post ID: ' + responseData.name);
      this.fetchPosts();
    });
  }

  onFetchPosts() {
    this.fetchPosts();
  }

  onClearPosts() {
    this.postsService.deletePosts().subscribe(() => {
      this.loadedPosts = [];
    });
  }

  private fetchPosts() {
    this.postsService.getPosts().subscribe({
      next: (responseData) => {
        this.isLoading = true;
        this.loadedPosts = responseData;
      },
      error: (error) => (this.errorMsg = error.message),
      complete: () => (this.isLoading = false),
    });
  }
}
