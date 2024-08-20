package com.manajero.backend_springboot.collections.communication;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.manajero.backend_springboot.collections.user.User;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Document(collection = "Comment")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Comment {

    @Id
    private String id;
    private String content;
    private LocalDateTime createdAt;
    @JsonIgnore
    @DBRef
    private Post post;
    @JsonIgnore
    @DBRef
    private User author;


}
