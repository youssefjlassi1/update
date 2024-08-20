package com.manajero.backend_springboot.Services.Backlog;

import com.manajero.backend_springboot.collections.Backlog.Iteration;
import com.manajero.backend_springboot.collections.Backlog.Sprint;
import com.manajero.backend_springboot.collections.Backlog.Task;
import com.manajero.backend_springboot.dto.TaskDTO;
import com.manajero.backend_springboot.repositories.Backlog.IterationRepository;
import com.manajero.backend_springboot.repositories.Backlog.SprintRepository;
import com.manajero.backend_springboot.repositories.Backlog.TaskRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@Service
@AllArgsConstructor
public class TaskServiceImpl  implements ITaskService{
    @Autowired
    TaskRepository taskRepository ;
    SprintRepository sprintRepository;
    IterationRepository it;


    @Override
    public Task addTask(String sprintid, Task task) {
        return null;
    }

    @Override
    public Task createTask(Task task) {
        return null;
    }

    /* @Override
     public Task updateTaskk(String id, Task task) {
         return null;
     }

 @Override
     public Task updateTask(Task task) {
         return taskRepository.save(task);
     }*/
   @Override
    public Task updateTask(String taskId, TaskDTO taskDTO) {
        // Fetch the existing task
       Task task = taskRepository.findTaskByTaskId(taskId);

        // Update task properties
        task.setTaskName(taskDTO.getTaskName());
        task.setDescription(taskDTO.getDescription());
        task.setDueDate(taskDTO.getDueDate());
        task.setPriority(taskDTO.getPriority());
        task.setIsCompleted(taskDTO.getIsCompleted());
        // Update other properties as needed

        // Save updated task
        return taskRepository.save(task);
    }


    @Override
    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    @Override
    public void deleteTask(String id) {
        taskRepository.deleteById(id);

    }

    @Override
    public Optional<Task> getTaskById(String id) {
        return taskRepository.findById(id);
    }

    @Override
    public List<Task> getTaskssBySprintId(String sprintId) {
        return null;
    }



}




