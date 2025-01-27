package com.manajero.backend_springboot.repositories.communication;

import com.manajero.backend_springboot.collections.communication.Comment;
import com.manajero.backend_springboot.collections.communication.Post;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


import java.util.List;

@Repository
public interface CommentRepository extends MongoRepository<Comment, String> {
    List<Comment> findAllByPost(Post post);
}