package com.manajero.backend_springboot.collections;


import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;

@AllArgsConstructor
@Getter
@Setter
@NoArgsConstructor
@Data
@Document(collection ="training")
public class Trainings implements Serializable {
    @Id
    long id ;
    String title;
     String description;



}
