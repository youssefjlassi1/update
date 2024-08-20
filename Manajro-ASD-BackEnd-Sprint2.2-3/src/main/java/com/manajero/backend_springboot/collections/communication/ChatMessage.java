// src/main/java/com/manajero/backend_springboot/collections/communication/ChatMessage.java
package com.manajero.backend_springboot.collections.communication;

import com.manajero.backend_springboot.collections.user.User;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import java.time.LocalDateTime;

@Document(collection = "ChatMessage")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ChatMessage {
    @Id

    private String id;
    private String senderId;
    private String receiverId;
    private String content;
    @Field("created_at")
    private LocalDateTime createdAt;




   // @DBRef
   // private User sender;
  //  @DBRef
  //  private User receiver;
}
