package com.manajero.backend_springboot.collections;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.*;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Document(collection ="tests")
public class Test {
    @Id
    long id ;
    String titre;
     String description;
     String date;
}
