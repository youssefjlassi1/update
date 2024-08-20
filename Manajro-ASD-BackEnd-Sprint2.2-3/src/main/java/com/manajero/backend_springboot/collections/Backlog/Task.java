package com.manajero.backend_springboot.collections.Backlog;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

import java.util.List;
@Document (collection ="Tasks")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Task {

    @Id
    private String taskId;
    private String taskName;
    private String description;
    //private LocalDateTime createdDate;
    private LocalDateTime dueDate;
   // private StatusTask status;
    private Priority priority;
    private Boolean isCompleted;//bech ne7seb l pourcentage bel done /zid chouf

    @DBRef
   // @JsonIgnore
    private Iteration sprintTo;

}