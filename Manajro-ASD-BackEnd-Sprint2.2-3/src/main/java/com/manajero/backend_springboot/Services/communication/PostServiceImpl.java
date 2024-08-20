package com.manajero.backend_springboot.Services.communication;

import com.manajero.backend_springboot.collections.communication.Post;
import com.manajero.backend_springboot.collections.communication.TypePost;
import com.manajero.backend_springboot.collections.user.User;
import com.manajero.backend_springboot.repositories.communication.PostRepository;
import com.manajero.backend_springboot.repositories.user.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;
import java.util.UUID;

@Service
@AllArgsConstructor
public class PostServiceImpl implements IPostService {

    private final PostRepository postRepo;
    private final UserRepository userRepo;
    private final Path root = Paths.get("src/main/resources/uploads");

    @Override
    public List<Post> getAllPosts() {
        return postRepo.findAll();
    }

    @Override
    public Post getPost(String idPost) {
        Post post = postRepo.findById(idPost).orElseThrow(() -> new RuntimeException("Post not found"));
        post.setNbViews(post.getNbViews() + 1);
        return postRepo.save(post);
    }

    @Override
    public Post addPost(String idUser, Post post) {
        User author = userRepo.findById(idUser).orElseThrow(() -> new RuntimeException("User not found"));

        if (containsBadWords(post.getTitle()) || containsBadWords(post.getContent())) {
            throw new RuntimeException("Post contains bad words");
        }

        post.setAuthor(author);
        post.setCreatedAt(LocalDateTime.now());
        post.setNbViews(0);

        return postRepo.save(post);
    }

    @Override
    public Post updatePost(String idPost, Post post) {
        Post existingPost = getPost(idPost);

        if (containsBadWords(post.getTitle()) || containsBadWords(post.getContent())) {
            throw new RuntimeException("Post contains bad words");
        }

        existingPost.setTitle(post.getTitle());
        existingPost.setContent(post.getContent());
        existingPost.setUpdatedAt(LocalDateTime.now());
        return postRepo.save(existingPost);
    }

    @Override
    public void deletePost(String idPost) {
        Post post = getPost(idPost);
        postRepo.delete(post);
    }

    @Override
    public List<Post> getPostsByUser(String idUser) {
        return postRepo.findAllByAuthorId(idUser);
    }

    private boolean containsBadWords(String text) {
        List<String> badWords = Arrays.asList("stupid","hell","badword1", "badword2", "badword3");

        for (String badWord : badWords) {
            if (text.contains(badWord)) {
                return true;
            }
        }

        return false;
    }

    @Override
    public void saveImage(MultipartFile file, String idPost) {
        try {
            String fileName = UUID.randomUUID() + "_" + file.getOriginalFilename();
            Path filePath = this.root.resolve(fileName);
            Files.copy(file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);

            Post post = getPost(idPost);
            post.setImageName(fileName);
            postRepo.save(post);

        } catch (IOException e) {
            throw new RuntimeException("Could not save the image file: " + e.getMessage());
        }
    }

    @Override
    public Resource loadImage(String fileName) {
        try {
            Path file = root.resolve(fileName);
            Resource resource = new UrlResource(file.toUri());

            if (resource.exists() && resource.isReadable()) {
                return resource;
            } else {
                throw new RuntimeException("Could not read the file: " + fileName);
            }
        } catch (MalformedURLException e) {
            throw new RuntimeException("Error: " + e.getMessage());
        }
    }

    //
    @Override
    public List<Post> getPostsByType(TypePost typePost) {
        return postRepo.findAllByTypePost(typePost);
    }
}

