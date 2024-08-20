package com.manajero.backend_springboot.collections.user;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@AllArgsConstructor
@Getter
@Setter
@Builder
@Data
@Document(collection = "roles")
public class Role {
     @Id
     private String id;
     private ERole name;

     public Role() {

     }

     public Role(ERole name) {
          this.name = name;
     }

     public String getId() {
          return id;
     }

     public void setId(String id) {
          this.id = id;
     }

     public ERole getName() {
          return name;
     }

     public void setName(ERole name) {
          this.name = name;
     }


}
