package com.manajero.backend_springboot.repositories.communication;

import com.manajero.backend_springboot.collections.communication.Post;
import com.manajero.backend_springboot.collections.communication.React;

import com.manajero.backend_springboot.collections.communication.TypeReact;
import com.manajero.backend_springboot.collections.user.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface ReactRepository extends MongoRepository<React, String> {
    List<React> findAllByPost(Post post);
    React findByAuthorAndPost(User author, Post post);
    TypeReact findTypeReactByAuthorAndPost(User author, Post post);
    void deleteByAuthorAndPost(User author, Post post);
}
