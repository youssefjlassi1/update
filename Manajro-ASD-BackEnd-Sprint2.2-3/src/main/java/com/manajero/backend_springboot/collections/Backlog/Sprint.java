package com.manajero.backend_springboot.collections.Backlog;

import com.manajero.backend_springboot.collections.communication.React;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Document (collection ="Sprints")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Data

public class Sprint {

    @Id
    private String sprintId;
    private String sprintName;
    private String sprintDescription;
  //  private String startDate;
    //private String endDate;
    private int estimation ;
    // private StatusSprint statusSprint;
  //  private Boolean isCompleted;
    @DBRef
  //  private List<Task> tasks;
    List<Task> trainingChapters = new ArrayList<>();
}