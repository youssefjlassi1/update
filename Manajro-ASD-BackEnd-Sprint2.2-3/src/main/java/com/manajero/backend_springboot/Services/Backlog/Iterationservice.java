package com.manajero.backend_springboot.Services.Backlog;

import com.manajero.backend_springboot.collections.Backlog.Iteration;
import com.manajero.backend_springboot.collections.Backlog.Task;
import com.manajero.backend_springboot.collections.interfacedynamique.Interface;
import com.manajero.backend_springboot.dto.IterationProgressDto;
import com.manajero.backend_springboot.dto.IterationTaskStatsDTO;
import com.manajero.backend_springboot.dto.TaskDTO;
import com.manajero.backend_springboot.repositories.Backlog.IterationRepository;
import com.manajero.backend_springboot.repositories.Backlog.TaskRepository;
import com.manajero.backend_springboot.repositories.interfacedynamique.InterfaceRepo;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import java.util.Optional;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class Iterationservice implements IIteration {


    @Autowired
    private IterationRepository iterationRepository;
    @Autowired
    private TaskRepository taskRepository;

    @Override
    public List<Iteration> getAllIterations() {
        return iterationRepository.findAll();
    }

    @Override
    public Optional<Iteration> getIterationById(String id) {
        return iterationRepository.findById(id);
    }

    @Override
    public Iteration createIteration(Iteration iteration) {
        return iterationRepository.save(iteration);
    }

    @Override
    public Iteration updateIteration(Iteration iteration) {
        return iterationRepository.save(iteration);
    }

    @Override
    public void deleteIteration(String id) {
        iterationRepository.deleteById(id);
    }


    @Override
   /* public Iteration addTaskToIteration(String iterationId, TaskDTO taskDTO) {
        // Find the iteration by ID
        Iteration iteration = iterationRepository.findById(iterationId)
                .orElseThrow(() -> new RuntimeException("Iteration not found"));

        // Convert TaskDTO to Task
        Task task = new Task();
        task.setTaskName(taskDTO.getTaskName());
        task.setDescription(taskDTO.getDescription());
        task.setCreatedDate(taskDTO.getCreatedDate());
        task.setDueDate(taskDTO.getDueDate());
        task.setIsCompleted(taskDTO.getIsCompleted());

        // Save the task (this ensures it gets an ID)
        Task savedTask = taskRepository.save(task);

        // Add the task to the iteration
        iteration.getTasks().add(savedTask);

        // Save the updated iteration
        return iterationRepository.save(iteration);
    }*/
    public Iteration addTaskToIteration(String iterationId, TaskDTO taskDTO) {
        // Find the iteration by ID
        Iteration iteration = iterationRepository.findById(iterationId)
                .orElseThrow(() -> new RuntimeException("Iteration not found"));

        // Create a new task from the TaskDTO
        Task task = new Task();
        task.setTaskName(taskDTO.getTaskName());
        task.setDescription(taskDTO.getDescription());

        //task.setCreatedDate(taskDTO.getCreatedDate());
        task.setDueDate(taskDTO.getDueDate());
        task.setPriority(taskDTO.getPriority());
        task.setIsCompleted(taskDTO.getIsCompleted());

        // Save the task to the repository (ensuring it gets an ID)
        Task savedTask = taskRepository.save(task);

        // Add the task to the iteration's task list
        iteration.getTasks().add(savedTask);

        // Save the updated iteration
        return iterationRepository.save(iteration);
    }



    public List<Task> getTasksByIterationId(String id) {
        Iteration iteration = iterationRepository.findIterationById(id);
        if (iteration != null) {
            return iteration.getTasks();
        }
        return Collections.emptyList();
    }


    ///dashboard
    // Method to count the total number of tasks for a given iteration
    public long countTotalTasks(String iterationId) {
        Iteration iteration = iterationRepository.findById(iterationId).orElse(null);
        if (iteration != null) {
            return iteration.getTasks().size();
        }
        return 0;
    }

    // Method to count the number of completed tasks for a given iteration
    public long countCompletedTasks(String iterationId) {
        Iteration iteration = iterationRepository.findById(iterationId).orElse(null);
        if (iteration != null) {
            return iteration.getTasks().stream()
                    .filter(Task::getIsCompleted)
                    .count();
        }
        return 0;
    }

    // Method to calculate the progress percentage for a given iteration
    public double getProgressPercentage(String iterationId) {
        long totalTasks = countTotalTasks(iterationId);
        long completedTasks = countCompletedTasks(iterationId);

        if (totalTasks == 0) {
            return 0.0; // Avoid division by zero if there are no tasks
        }

        return (completedTasks / (double) totalTasks) * 100;
    }

    public List<IterationProgressDto> getAllIterationsProgress() {
        List<Iteration> iterations = iterationRepository.findAll();
        return iterations.stream()
                .map(iteration -> new IterationProgressDto(
                        iteration.getId(),
                        iteration.getSprintName(),
                        getProgressPercentage(iteration.getId())
                ))
                .collect(Collectors.toList());
    }


    public List<IterationTaskStatsDTO> getTaskCompletionStats() {
        List<Iteration> iterations = iterationRepository.findAll();
        List<IterationTaskStatsDTO> stats = new ArrayList<>();

        for (Iteration iteration : iterations) {
            long totalTasks = iteration.getTasks().size();
            long completedTasks = iteration.getTasks().stream()
                    .filter(Task::getIsCompleted)
                    .count();
            double completionPercentage = totalTasks == 0 ? 0 : ((double) completedTasks / totalTasks) * 100;

            stats.add(new IterationTaskStatsDTO(iteration.getSprintName(), totalTasks, completionPercentage));
        }
        return stats;
    }

}





