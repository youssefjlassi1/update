import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../../Services/Communication/post.service';
import { Post } from '../../Entities/Workshop';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommentService } from '../../Services/Communication/comment.service';
@Component({
  selector: 'ngx-post-retro-details',
  templateUrl: './post-retro-details.component.html',
  styleUrls: ['./post-retro-details.component.scss']
})
export class PostRetroDetailsComponent implements OnInit{
  post: any;
  comments!: any[];
  reacts!: any[];
  idPost!: any;
  idUser!: any;
  type!: any;

  likesCount = 0;
  dislikesCount = 0;
  commentBeingEdited: any = null;

  showUpdateDialog = false;
  postToUpdate: any;


  constructor(private postService: PostService,
              private commentService: CommentService,
              private router: Router,
              private route: ActivatedRoute,
              private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
      this.idPost = this.route.snapshot.paramMap.get('id');
      this.idUser = "66993493d8ee4233fa884311";
      this.getPost(this.idPost);
      this.getCommentsByPost(this.idPost);
   
  }

  getPost(idPost: string): void {
      this.postService.getPost(idPost).subscribe((response) => {
          this.post = response;
      });
  }

  getImageUrl(imageName: string): SafeResourceUrl {
      const url = `http://localhost:8088/app/posts/loadImage/${imageName}`;
      return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  getCommentsByPost(idPost: string): void {
      this.commentService.getCommentsByPost(idPost).subscribe((response) => {
          this.comments = response;
          console.log("Comments fetched successfully");
      });
  }

 

  updatePost(id: string, updatedPost: any): void {
      this.postService.updatePost(id, updatedPost)
          .subscribe(post => {
              this.getPost(this.idPost);
          });
      this.showUpdateDialog = false;
  }

  deletePost(id: string) {
      if (window.confirm('Are you sure you want to delete this post?')) {
          this.postService.deletePost(id).subscribe(() => {
              this.router.navigate(['posts']);
          });
      }
  }


  addComment(idUser: string, idPost: string, content: string): void {
      const newComment = {
          
          content: content
          

      };
      this.commentService.addComment(idUser, idPost, newComment).subscribe((response) => {
          console.log('Comment added successfully:', response);
          this.getCommentsByPost(this.idPost);
      });
  }

  editComment(comment: any): void {
      this.commentBeingEdited = comment;
  }
  updateComment(idComment: string, content: string): void {
      const updatedComment = {
          content: content
      };

      this.commentService.updateComment(idComment, updatedComment).subscribe((response) => {
          console.log('Comment updated successfully:', response);
          this.getCommentsByPost(this.idPost);
          this.commentBeingEdited = null;
      });
  }

  deleteComment(idComment: string): void {
      this.commentService.deleteComment(idComment).subscribe(() => {
          console.log('Comment deleted successfully');
          this.getCommentsByPost(this.idPost);
      });
  }

  

}
