package com.manajero.backend_springboot.Services.Backlog;

import com.manajero.backend_springboot.collections.Backlog.Task;
import com.manajero.backend_springboot.dto.TaskDTO;

import java.util.List;
import java.util.Optional;

public interface ITaskService {

    public Task addTask(String sprintid, Task task);
    public Task createTask(Task task);
    //public Task updateTaskk(String id, Task task);
   // public Task updateTask(Task task);
    public Task updateTask(String taskId, TaskDTO taskDTO);
    public List<Task> getAllTasks();
    public void deleteTask(String id);

    public Optional<Task> getTaskById(String id);
    public List<Task> getTaskssBySprintId(String sprintId);








}
