package com.manajero.backend_springboot.repositories.Backlog;

import com.manajero.backend_springboot.collections.Backlog.Task;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TaskRepository extends MongoRepository<Task, String>

{
    public Task findTaskByTaskId (String taskId);

    List <Task> findTaskBySprintTo_Id (String sprintid);
    public  long countTaskBySprintTo_Id(String sprintid);

  //  List<Task> findAllById(List<String> ids);
}
