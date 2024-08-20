import { Component, OnInit } from '@angular/core';
import {PostService} from "../../../Services/Communication/post.service";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import { Router } from '@angular/router';
import { TypePost } from '../../../Entities/Workshop';
import { AddpostComponent } from '../addpost/addpost.component';
import { NbDialogService } from '@nebular/theme';
@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
    posts: any[] = [];
    post: any;
    reacts: any[] = [];
    react: any;
    typeReact: any;
    image: any;
    searchTerm: string = '';
    sortBy: string = '';

    constructor(private postService: PostService, private sanitizer: DomSanitizer, private router: Router, private dialogService: NbDialogService,) { }

    ngOnInit(): void {
        this.getAllPosts();
    }

    getAllPosts(): void {
        this.postService.getAllPosts().subscribe(
            (posts) => {
              this.posts = posts.filter(post => post.typePost === TypePost.Forum);
            },
            (error) => console.error(error)
          );
    
        }
    getImageUrl(imageName: string): SafeResourceUrl {
        const url = `http://localhost:8088/app/posts/loadImage/${imageName}`;
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }

    filterPosts() {
        if (!this.searchTerm) {
            this.getAllPosts();
            return;
        }
        this.posts = this.posts.filter(post =>
            post.title.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
    }

    sortPosts() {
        if (this.sortBy === 'asc') {
            this.posts.sort((a, b) => a.nbViews - b.nbViews);
        } else if (this.sortBy === 'des') {
            this.posts.sort((a, b) => b.nbViews - a.nbViews);
        }
    }
    viewPost(postId: string) {
        this.router.navigate(['/pages/agile/post', postId]);
      }

      openAddRetrospectiveDialog(): void {
        this.dialogService.open(AddpostComponent)
          .onClose.subscribe((result) => {
            if (result) {
              this.getAllPosts(); // Refresh the list after adding a new post
            }
          });
      }
}

