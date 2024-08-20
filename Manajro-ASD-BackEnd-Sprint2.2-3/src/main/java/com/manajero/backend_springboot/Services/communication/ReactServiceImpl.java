package com.manajero.backend_springboot.Services.communication;

import com.manajero.backend_springboot.collections.communication.Post;
import com.manajero.backend_springboot.collections.communication.React;
import com.manajero.backend_springboot.collections.communication.TypeReact;
import com.manajero.backend_springboot.collections.user.User;
import com.manajero.backend_springboot.repositories.communication.PostRepository;
import com.manajero.backend_springboot.repositories.communication.ReactRepository;
import com.manajero.backend_springboot.repositories.user.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@AllArgsConstructor
public class ReactServiceImpl implements IReactService {

    private ReactRepository reactRepo;
    private PostRepository postRepo;
    private UserRepository userRepo;

    @Override
    public List<React> getReactByPost(String idPost) {
        return reactRepo.findAllByPost(postRepo.findById(idPost).orElseThrow(() -> new RuntimeException("Post not found")));
    }

    @Override
    public React getReact(String idReact) {
        return reactRepo.findById(idReact).orElseThrow(() -> new RuntimeException("React not found"));
    }

    @Override
    public React addReact(String idUser, String idPost, String type) {
        User author = userRepo.findById(idUser).orElseThrow(() -> new RuntimeException("User not found"));
        Post post = postRepo.findById(idPost).orElseThrow(() -> new RuntimeException("Post not found"));

        React react = reactRepo.findByAuthorAndPost(author, post);

        TypeReact typeReact;
        try {
            typeReact = TypeReact.valueOf(type);
        } catch (IllegalArgumentException e) {
            throw new RuntimeException("Invalid react type");
        }

        if (react != null) {
            if (react.getTypeReact().equals(typeReact)) {
                react.setTypeReact(typeReact == TypeReact.Like ? TypeReact.Dislike : TypeReact.Like);
            } else {
                react.setTypeReact(typeReact);
            }
        } else {
            react = new React(typeReact, LocalDateTime.now(), author, post);
        }

        return reactRepo.save(react);
    }

    @Override
    public TypeReact getTypeReact(String idUser, String idPost) {
        React react = reactRepo.findByAuthorAndPost(
                userRepo.findById(idUser).orElseThrow(() -> new RuntimeException("User not found")),
                postRepo.findById(idPost).orElseThrow(() -> new RuntimeException("Post not found"))
        );
        return react != null ? react.getTypeReact() : null;
    }

    @Override
    public void deleteReact(String idUser, String idPost) {
        reactRepo.deleteByAuthorAndPost(
                userRepo.findById(idUser).orElseThrow(() -> new RuntimeException("User not found")),
                postRepo.findById(idPost).orElseThrow(() -> new RuntimeException("Post not found"))
        );
    }
}
