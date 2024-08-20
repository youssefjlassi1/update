package com.manajero.backend_springboot.collections.ASDProject;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.manajero.backend_springboot.collections.communication.Comment;
import com.manajero.backend_springboot.collections.communication.Post;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;


@Document(collection = "asd_projects")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class ASDProject {
    @Id
    private String id;
    private String userId;
    private String name;
    private String definition;
    private String origin;
    private String content;

    @JsonIgnore
    @DBRef
    private List<Post> posts;
    // Add other fields as needed

    // Getters and Setters

}
