package com.manajero.backend_springboot.Controllers.communication;

import com.manajero.backend_springboot.Services.communication.IPostService;
import com.manajero.backend_springboot.Services.communication.IReactService;
import com.manajero.backend_springboot.collections.communication.Post;
import com.manajero.backend_springboot.collections.communication.React;
import com.manajero.backend_springboot.collections.communication.TypePost;
import com.manajero.backend_springboot.collections.communication.TypeReact;
import lombok.AllArgsConstructor;
import org.apache.coyote.BadRequestException;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.Assert;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.Map;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RequestMapping("/app/posts")
@AllArgsConstructor
public class PostController {

    private final IPostService postService;
    private final IReactService reactService;

    @GetMapping
    public ResponseEntity<List<Post>> getAllPosts() {
        List<Post> posts = postService.getAllPosts();
        return new ResponseEntity<>(posts, HttpStatus.OK);
    }

    @GetMapping("/{idPost}")
    public ResponseEntity<Post> getPost(@PathVariable String idPost) {
        Post post = postService.getPost(idPost);
        return new ResponseEntity<>(post, HttpStatus.OK);
    }

    @GetMapping("/getPostsByUser/{idUser}")
    public ResponseEntity<List<Post>> getPostsByUser(@PathVariable String idUser) {
        List<Post> posts = postService.getPostsByUser(idUser);
        return new ResponseEntity<>(posts, HttpStatus.OK);
    }

    @PostMapping("/saveImage/{idPost}")
    public ResponseEntity<?> saveImage(@RequestParam("file") MultipartFile file, @PathVariable String idPost) {
        postService.saveImage(file, idPost);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/loadImage/{fileName}")
    public ResponseEntity<Resource> loadImage(@PathVariable String fileName) {
        Resource resource = postService.loadImage(fileName);
        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType("application/octet-stream"))
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + resource.getFilename() + "\"")
                .body(resource);
    }

    @GetMapping("/getReactByPost/{idPost}")
    public ResponseEntity<List<React>> getReactByPost(@PathVariable String idPost) {
        List<React> reacts = reactService.getReactByPost(idPost);
        return new ResponseEntity<>(reacts, HttpStatus.OK);
    }

    @GetMapping("/getReact/{idReact}")
    public ResponseEntity<React> getReact(@PathVariable String idReact) {
        React react = reactService.getReact(idReact);
        return new ResponseEntity<>(react, HttpStatus.OK);
    }

    @PostMapping("/addReact/{idUser}/{idPost}")
    public ResponseEntity<React> addReact(@PathVariable String idUser, @PathVariable String idPost, @RequestBody Map<String, String> body) {
        String type = body.get("type");
        React react = reactService.addReact(idUser, idPost, type);
        return new ResponseEntity<>(react, HttpStatus.CREATED);
    }

    @GetMapping("/getTypeReact/{idUser}/{idPost}")
    public ResponseEntity<TypeReact> getTypeReact(@PathVariable String idUser, @PathVariable String idPost) {
        TypeReact typeReact = reactService.getTypeReact(idUser, idPost);
        return new ResponseEntity<>(typeReact, HttpStatus.OK);
    }

    @DeleteMapping("/deleteReact/{idUser}/{idPost}")
    public ResponseEntity<?> deleteReact(@PathVariable String idUser, @PathVariable String idPost) {
        reactService.deleteReact(idUser, idPost);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

   /* @PostMapping("/addPost/{idUser}")
    public ResponseEntity<Post> addPost(@PathVariable String idUser, @RequestParam("title") String title, @RequestParam("content") String content, @RequestParam(value = "image", required = false) MultipartFile image) throws BadRequestException {
        Post post = new Post();
        post.setTitle(title);
        post.setContent(content);
        Post newPost = postService.addPost(idUser, post);

        if (image != null && !image.isEmpty()) {
            postService.saveImage(image, newPost.getId());
        }

        return new ResponseEntity<>(newPost, HttpStatus.CREATED);
    }*/
    //
    @PostMapping("/addPost/{idUser}")
    public ResponseEntity<Post> addPost(
            @PathVariable String idUser,
            @RequestParam("title") String title,
            @RequestParam("content") String content,
            @RequestParam("typePost") String typePost, // Accept typePost as a request parameter
            @RequestParam(value = "image", required = false) MultipartFile image) throws BadRequestException {

        Assert.notNull(idUser, "The given id must not be null");

        Post post = new Post();
        post.setTitle(title);
        post.setContent(content);
        post.setTypePost(TypePost.valueOf(typePost)); // Set typePost based on the parameter
        Post newPost = postService.addPost(idUser, post);

        if (image != null && !image.isEmpty()) {
            postService.saveImage(image, newPost.getId());
        }

        return new ResponseEntity<>(newPost, HttpStatus.CREATED);
    }
}
