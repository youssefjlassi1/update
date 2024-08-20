package com.manajero.backend_springboot.Services.communication;

import com.manajero.backend_springboot.collections.communication.Comment;
import com.manajero.backend_springboot.collections.communication.Post;
import com.manajero.backend_springboot.collections.user.User;
import com.manajero.backend_springboot.repositories.communication.CommentRepository;
import com.manajero.backend_springboot.repositories.communication.PostRepository;
import com.manajero.backend_springboot.repositories.user.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@AllArgsConstructor
public class CommentServiceImpl implements ICommentService {

    private final CommentRepository commentRepo;
    private final PostRepository postRepo;
    private final UserRepository userRepo;

    @Override
    public List<Comment> getCommentsByPost(String idPost) {
        Post post = postRepo.findById(idPost).orElseThrow(() -> new RuntimeException("Post not found"));
        return commentRepo.findAllByPost(post);
    }

    @Override
    public Comment getComment(String idComment) {
        return commentRepo.findById(idComment).orElseThrow(() -> new RuntimeException("Comment not found"));
    }

    @Override
    public Comment addComment(String idUser, String idPost, Comment comment) {
        User author = userRepo.findById(idUser).orElseThrow(() -> new RuntimeException("User not found"));
        Post post = postRepo.findById(idPost).orElseThrow(() -> new RuntimeException("Post not found"));
        comment.setAuthor(author);
        comment.setPost(post);
        comment.setCreatedAt(LocalDateTime.now());
        return commentRepo.save(comment);
    }


    @Override
    public Comment updateComment(String idComment, Comment comment) {
        Comment existingComment = getComment(idComment);
        existingComment.setContent(comment.getContent());
        return commentRepo.save(existingComment);
    }

    @Override
    public void deleteComment(String idComment) {
        commentRepo.deleteById(idComment);
        System.out.println("Comment deleted!");
    }
}
