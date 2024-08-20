package com.manajero.backend_springboot.collections.interfacedynamique;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Document(collection = "Interface")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Interface {
    @Id
    private String id;

    private String definition;
    private String origin;
    private String whyDescription;
    private String pro;
    private String con;

    //
    private String whatdesc;
    private String specGenral;
    private String collGenral;
    private String learnGenral;
    //
    private String howdesc;
    private String specdesc;
    private String colldesc;
    private String learndesc;

    private String whatifdesc;




}
