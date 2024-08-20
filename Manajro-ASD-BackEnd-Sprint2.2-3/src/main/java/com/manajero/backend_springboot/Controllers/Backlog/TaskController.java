package com.manajero.backend_springboot.Controllers.Backlog;

import com.manajero.backend_springboot.Services.Backlog.TaskServiceImpl;
import com.manajero.backend_springboot.collections.Backlog.Task;
import com.manajero.backend_springboot.dto.TaskDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import com.manajero.backend_springboot.Services.Backlog.TaskServiceImpl;
import com.manajero.backend_springboot.collections.Backlog.Task;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/task")
@Tag(name = "Task Management")
@CrossOrigin(origins = "http://localhost:4200")
@AllArgsConstructor
public class TaskController {
    @Autowired
    private TaskServiceImpl taskService ;
   /* @PostMapping("/{sprintId}/addTask")
    public Task TaskToSprint(@PathVariable String sprintId, @RequestBody Task task) {
        if(sprintId != null){
            return taskService.addTask(sprintId, task);
        } else {
            throw new IllegalArgumentException("ID de formation NULL");
        }
    }

    @GetMapping("/getall")
    public List<Task> getAllTasks() {
        return taskService.getAllTasks();
    }

    @GetMapping("/get/{id}")
    public Task getTaskById(@PathVariable String id) {
        return taskService.getTaskById(id);
    }

    @PutMapping("/update/{id}")
    public Task updateTask(@PathVariable String id, @RequestBody Task task) {
        return taskService.updateTask(id, task);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteTask(@PathVariable String id) {
        taskService.deleteTask(id);
    }

    @GetMapping("/sprint/{sprintId}/tasks")
    public ResponseEntity<List<Task>> getTasks(@PathVariable String sprintId) {
        List<Task> tasks = taskService.getTaskssBySprintId(sprintId);
        if (tasks.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(tasks, HttpStatus.OK);
    }*/


    @GetMapping
    public List<Task> getAllTasks() {
        return taskService.getAllTasks();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Task> getTaskById(@PathVariable String id) {
        Optional<Task> task = taskService.getTaskById(id);
        return task.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Task createTask(@RequestBody Task task) {
        return taskService.createTask(task);
    }

  /*  @PutMapping("/{id}")
    public ResponseEntity<Task> updateTask(@PathVariable String id, @RequestBody Task task) {
        Optional<Task> existingTask = taskService.getTaskById(id);
        if (existingTask.isPresent()) {
            task.setTaskId(id);
            return ResponseEntity.ok(taskService.updateTask(task));
        } else {
            return ResponseEntity.notFound().build();
        }
    }*/


    @PutMapping("/{id}")
    public ResponseEntity<Task> updateTask(@PathVariable String id, @RequestBody TaskDTO taskDTO) {
        Task updatedTask = taskService.updateTask(id, taskDTO);
        return ResponseEntity.ok(updatedTask);
    }



    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTask(@PathVariable String id) {
        taskService.deleteTask(id);
        return ResponseEntity.ok().build();
    }
}
