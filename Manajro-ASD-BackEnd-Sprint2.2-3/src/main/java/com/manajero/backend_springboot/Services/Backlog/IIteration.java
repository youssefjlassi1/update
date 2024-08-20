package com.manajero.backend_springboot.Services.Backlog;

import com.manajero.backend_springboot.collections.Backlog.Iteration;
import com.manajero.backend_springboot.collections.Backlog.Task;
import com.manajero.backend_springboot.dto.TaskDTO;

import java.util.List;
import java.util.Optional;

public interface IIteration {

    public    List<Iteration> getAllIterations();

    public Optional<Iteration> getIterationById(String id);

    public Iteration createIteration(Iteration iteration) ;

    public Iteration updateIteration(Iteration iteration) ;

    public void deleteIteration(String id);

    //public Iteration addTaskToIteration(String iterationId, Task task);
    public Iteration addTaskToIteration(String iterationId, TaskDTO taskDTO);
}
