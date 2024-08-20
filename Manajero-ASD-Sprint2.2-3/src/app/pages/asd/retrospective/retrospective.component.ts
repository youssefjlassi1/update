import { Component, OnInit } from '@angular/core';
import { PostService } from '../Services/Communication/post.service';
import { Post  } from '../Entities/Workshop';
import { TypePost } from '../Entities/Workshop';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NbDialogService } from '@nebular/theme';
import { AddretrospectiveComponent } from './addretrospective/addretrospective.component';


@Component({
  selector: 'ngx-retrospective',
  templateUrl: './retrospective.component.html',
  styleUrls: ['./retrospective.component.scss']
})
export class RetrospectiveComponent implements OnInit {
  retrospectivePosts: Post[] = [];

  constructor(private postService: PostService, private dialogService: NbDialogService,   private sanitizer: DomSanitizer,) {}

  ngOnInit(): void {
    this.loadRetrospectivePosts();
  }

  loadRetrospectivePosts(): void {
    this.postService.getAllPosts().subscribe(
      (posts) => {
        this.retrospectivePosts = posts.filter(post => post.typePost === TypePost.Retrospective);
      },
      (error) => console.error(error)
    );
  }

  openAddRetrospectiveDialog(): void {
    this.dialogService.open(AddretrospectiveComponent)
      .onClose.subscribe((result) => {
        if (result) {
          this.loadRetrospectivePosts(); // Refresh the list after adding a new post
        }
      });
  }

  getImageUrl(imageName: string): SafeResourceUrl {
    const url = `http://localhost:8088/app/posts/loadImage/${imageName}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
