package com.manajero.backend_springboot.dto;

import com.manajero.backend_springboot.collections.Backlog.Priority;
import lombok.*;

import java.time.LocalDateTime;
import org.springframework.data.annotation.Id;
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class TaskDTO {
    @Id
    private String taskId;
    private String taskName;
    private String description;
  ////  private LocalDateTime createdDate;
  private Priority priority;
    private LocalDateTime dueDate;
    private String sprintTo;  // String to hold the Iteration ID

    private Boolean isCompleted;


}
