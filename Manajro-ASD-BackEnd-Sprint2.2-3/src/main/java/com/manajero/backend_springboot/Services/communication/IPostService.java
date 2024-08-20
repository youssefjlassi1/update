package com.manajero.backend_springboot.Services.communication;


import com.manajero.backend_springboot.collections.communication.Post;
import com.manajero.backend_springboot.collections.communication.TypePost;
import com.manajero.backend_springboot.collections.user.User;
import org.apache.coyote.BadRequestException;
import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface IPostService {
    List<Post> getAllPosts();

    //public Post addPost(Post post);

    Post getPost(String idPost);

    Post addPost(String idUser, Post post) throws BadRequestException;

    Post updatePost(String idPost, Post post) throws BadRequestException;

    void deletePost(String idPost);

    List<Post> getPostsByUser(String idUser);

    void saveImage(MultipartFile file, String idPost);

    Resource loadImage(String fileName);

    public List<Post> getPostsByType(TypePost typePost);
}
