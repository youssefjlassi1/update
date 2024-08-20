package com.manajero.backend_springboot.collections.communication;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.manajero.backend_springboot.collections.user.User;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import java.time.LocalDateTime;

@Document(collection = "React")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class React {

    @Id
    private String id;

    @Enumerated(EnumType.STRING)
    TypeReact typeReact;
    private LocalDateTime createdAt;

    @DBRef
    private Post post;
    @JsonIgnore
    @DBRef
    private User author;


    public React(TypeReact typeReact, LocalDateTime createdAt, User author, Post post) {
        this.typeReact = typeReact;
        this.createdAt = createdAt;
        this.author = author;
        this.post = post;
    }

}