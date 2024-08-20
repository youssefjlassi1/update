package com.manajero.backend_springboot.Services.communication;



import com.manajero.backend_springboot.collections.communication.Comment;

import java.util.List;

public interface ICommentService {
    List<Comment> getCommentsByPost(String idPost);

    Comment getComment(String idComment);

    Comment addComment(String idUser, String idPost, Comment comment);

    Comment updateComment(String idComment, Comment comment);

    void deleteComment(String idComment);
}
