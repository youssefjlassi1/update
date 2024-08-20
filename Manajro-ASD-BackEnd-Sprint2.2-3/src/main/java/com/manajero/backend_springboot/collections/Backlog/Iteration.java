


package com.manajero.backend_springboot.collections.Backlog;



import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import org.springframework.data.annotation.Id;

import org.springframework.data.mongodb.core.mapping.DBRef;

import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@AllArgsConstructor
@Getter
@Setter
@NoArgsConstructor
@Data
@Document(collection ="iteration")
public class Iteration implements Serializable {



        @Id
        private String id;
        private String sprintName;
        private String sprintDescription;
        private LocalDateTime startDate;
        private LocalDateTime endDate;
        private int estimation ;
        private Boolean isCompleted;

        @DBRef
        @JsonIgnore
      //  private List<Task> tasks;
        private List<Task> tasks = new ArrayList<>();





}
