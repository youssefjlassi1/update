package com.manajero.backend_springboot.collections.user;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.manajero.backend_springboot.collections.communication.ChatMessage;
import com.manajero.backend_springboot.collections.communication.Comment;
import com.manajero.backend_springboot.collections.communication.Post;
import com.manajero.backend_springboot.collections.communication.React;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Data
@Builder
@Document(collection ="user")
public class User {
     @Id
     private String id ;
    public String identifiant;

    @NotBlank
    @Size(max = 20)
    private String username;


    @NotBlank
    @Size(max = 20)
    @Email
    private String email;
    private String password;
    private String telephone;
    private String genre;
    private String adresse;// Size of the file in bytes

    private String dateNaissance;
    private String aboutMe;

    //credancials
    private Boolean verified;
    private boolean enabled;

    private String verify;
    private String verificationCode;

    private String Author ;


    public User(String username, String email, String password, String telephone, String genre, String adresse) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.telephone = telephone;
        this.genre = genre;
        this.adresse = adresse;

    }

    //Association

    @JsonIgnore
    @DBRef
    private Set<Role> roles = new HashSet<> ();
    @JsonIgnore
    @DBRef
    private List<Post> posts = new ArrayList<>();

    @JsonIgnore
    @DBRef
    private List<Comment> comments = new ArrayList<>();

    @JsonIgnore
    @DBRef
    private List<React> reacts = new ArrayList<>();

    @JsonIgnore
    @DBRef
    private List<ChatMessage> chatMessages = new ArrayList<>();



    public User(String username, String email, String encode, String telephone, String dateNaissance, String genre, String adresse, String aboutMe, String verificationCode) {
              this.username = username;
              this.email = email;
              this.password = encode;
              this.telephone = telephone;
              this.dateNaissance = dateNaissance;
              this.genre = genre;
              this.adresse = adresse;
              this.aboutMe = aboutMe;
              this.verificationCode = verificationCode;
    }
}
