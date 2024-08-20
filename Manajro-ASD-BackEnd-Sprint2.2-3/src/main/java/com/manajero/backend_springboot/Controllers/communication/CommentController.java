package com.manajero.backend_springboot.Controllers.communication;

import com.manajero.backend_springboot.Services.communication.ICommentService;
import com.manajero.backend_springboot.collections.communication.Comment;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RequestMapping("/app/comments")
@Tag(name = ("/comment"))
@AllArgsConstructor
public class CommentController {

    private final ICommentService commentService;

    @GetMapping("/getAllCommentsByPost/{idPost}")
    public ResponseEntity<List<Comment>> getAllCommentsByPost(@PathVariable String idPost) {
        List<Comment> comments = commentService.getCommentsByPost(idPost);
        return new ResponseEntity<>(comments, HttpStatus.OK);
    }

    @GetMapping("/getComment/{idComment}")
    public ResponseEntity<Comment> getComment(@PathVariable String idComment) {
        Comment comment = commentService.getComment(idComment);
        return new ResponseEntity<>(comment, HttpStatus.OK);
    }

    @PostMapping("/addComment/{idUser}/{idPost}")
    public ResponseEntity<Comment> addComment(@PathVariable String idUser, @PathVariable String idPost, @RequestBody Comment comment) {
        try {
            Comment newComment = commentService.addComment(idUser, idPost, comment);
            return new ResponseEntity<>(newComment, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/updateComment/{idComment}")
    public ResponseEntity<Comment> updateComment(@PathVariable String idComment, @RequestBody Comment comment) {
        Comment updatedComment = commentService.updateComment(idComment, comment);
        return new ResponseEntity<>(updatedComment, HttpStatus.OK);
    }

    @DeleteMapping("/deleteComment/{idComment}")
    public ResponseEntity<?> deleteComment(@PathVariable String idComment) {
        commentService.deleteComment(idComment);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
