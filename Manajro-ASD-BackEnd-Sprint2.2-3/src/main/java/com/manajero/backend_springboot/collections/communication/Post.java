package com.manajero.backend_springboot.collections.communication;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.manajero.backend_springboot.collections.ASDProject.ASDProject;
import com.manajero.backend_springboot.collections.user.User;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import java.time.LocalDateTime;
import java.util.List;
@Document(collection = "Post")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Post {

    @Id
    private String id;
    private String title;
    private String content;
    private String imageName;
    private String fileName;
    @Field("created_at")
    private LocalDateTime createdAt;
    @Field("updated_at")
    private LocalDateTime updatedAt;


    private int nbViews;

    @JsonIgnore
    @DBRef
    private User author;
    @JsonIgnore
    @DBRef
    private ASDProject asdProject;

    @JsonIgnore
    @DBRef
    private List<Comment> comments;
    @JsonIgnore
    @DBRef
    private List<React> reactions;

    //
    @Enumerated(EnumType.STRING)
    TypePost typePost;
}
