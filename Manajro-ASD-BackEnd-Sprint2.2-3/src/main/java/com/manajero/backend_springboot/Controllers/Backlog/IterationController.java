package com.manajero.backend_springboot.Controllers.Backlog;

import com.manajero.backend_springboot.Services.Backlog.Iterationservice;

import com.manajero.backend_springboot.Services.communication.DashboardService;
import com.manajero.backend_springboot.collections.Backlog.Iteration;

import com.manajero.backend_springboot.collections.Backlog.Task;
import com.manajero.backend_springboot.collections.communication.Post;
import com.manajero.backend_springboot.dto.IterationProgressDto;
import com.manajero.backend_springboot.dto.IterationTaskStatsDTO;
import com.manajero.backend_springboot.dto.TaskDTO;
import com.manajero.backend_springboot.dto.UserActivity;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/iterations")
@Tag(name = "iteration Management")
@CrossOrigin(origins = "http://localhost:4200")
@AllArgsConstructor
public class IterationController {
    @Autowired
    private final DashboardService dashboardService;
    @Autowired
    private Iterationservice iterationService;

    @GetMapping
    public List<Iteration> getAllIterations() {
        return iterationService.getAllIterations();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Iteration> getIterationById(@PathVariable String id) {
        Optional<Iteration> iteration = iterationService.getIterationById(id);
        return iteration.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Iteration createIteration(@RequestBody Iteration iteration) {
        return iterationService.createIteration(iteration);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Iteration> updateIteration(@PathVariable String id, @RequestBody Iteration iteration) {
        Optional<Iteration> existingIteration = iterationService.getIterationById(id);
        if (existingIteration.isPresent()) {
            iteration.setId(id);
            return ResponseEntity.ok(iterationService.updateIteration(iteration));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteIteration(@PathVariable String id) {
        iterationService.deleteIteration(id);
        return ResponseEntity.ok().build();
    }
    /*@PostMapping("/{id}/tasks")
    public ResponseEntity<Iteration> addTaskToIteration(@PathVariable String id, @RequestBody TaskDTO taskDTO) {
        Task task = new Task();
        task.setTaskName(taskDTO.getTaskName());
        task.setDescription(taskDTO.getDescription());
        task.setCreatedDate(taskDTO.getCreatedDate());
        task.setDueDate(taskDTO.getDueDate());
        task.setIsCompleted(taskDTO.getIsCompleted());

        Iteration updatedIteration = iterationService.addTaskToIteration(id, task);
        return ResponseEntity.ok(updatedIteration);
    }
*/

  /*  @PostMapping("/{iterationId}/tasks")
    public ResponseEntity<Iteration> addTaskToIteration(@PathVariable String iterationId, @RequestBody Task task) {
        Iteration updatedIteration = iterationService.addTaskToIteration(iterationId, task);
        return ResponseEntity.ok(updatedIteration);
    }*/

    @PostMapping("/{id}/tasks")
    public ResponseEntity<Iteration> addTaskToIteration(@PathVariable String id, @RequestBody TaskDTO taskDTO) {
        Iteration updatedIteration = iterationService.addTaskToIteration(id, taskDTO);
        return ResponseEntity.ok(updatedIteration);
    }




    @GetMapping("/{id}/tasksit")
    public List<Task> getTasksByIterationId(@PathVariable String id) {
        return iterationService.getTasksByIterationId(id);
    }
//dashboard
@GetMapping("/{id}/task-count")
public ResponseEntity<Long> getTotalTaskCount(@PathVariable String id) {
    long count = iterationService.countTotalTasks(id);
    return ResponseEntity.ok(count);
}

    @GetMapping("/{id}/completed-task-count")
    public ResponseEntity<Long> getCompletedTaskCount(@PathVariable String id) {
        long count = iterationService.countCompletedTasks(id);
        return ResponseEntity.ok(count);
    }
    @GetMapping("/{id}/progress")
    public ResponseEntity<Double> getProgressPercentage(@PathVariable String id) {
        double percentage = iterationService.getProgressPercentage(id);
        return ResponseEntity.ok(percentage);
    }

    @GetMapping("/all-progress")
    public ResponseEntity<List<IterationProgressDto>> getAllIterationsProgress() {
        List<IterationProgressDto> progressList = iterationService.getAllIterationsProgress();
        return ResponseEntity.ok(progressList);
    }

    @GetMapping("/task-completion-stats")
    public ResponseEntity<List<IterationTaskStatsDTO>> getTaskCompletionStats() {
        List<IterationTaskStatsDTO> stats = iterationService.getTaskCompletionStats();
        return ResponseEntity.ok(stats);
    }


   ///

    @GetMapping("/stats")
    public ResponseEntity<Map<String, Long>> getDashboardStats() {
        Map<String, Long> stats = Map.of(
                "totalPosts", dashboardService.getTotalPosts(),
                "totalComments", dashboardService.getTotalComments(),
                "totalReacts", dashboardService.getTotalReacts()
        );
        return new ResponseEntity<>(stats, HttpStatus.OK);
    }

    @GetMapping("/top-posts")
    public ResponseEntity<List<Post>> getTopPostsByEngagement(@RequestParam(defaultValue = "10") int limit) {
        List<Post> topPosts = dashboardService.getTopPostsByEngagement(limit);
        return new ResponseEntity<>(topPosts, HttpStatus.OK);
    }

    @GetMapping("/most-active-users")
    public ResponseEntity<List<UserActivity>> getMostActiveUsers(@RequestParam(defaultValue = "10") int limit) {
        return new ResponseEntity<>(dashboardService.getMostActiveUsers(limit), HttpStatus.OK);
    }

    @GetMapping("/average-comments-reacts")
    public ResponseEntity<Map<String, Double>> getAverageCommentsAndReacts() {
        Map<String, Double> averages = dashboardService.getAverageCommentsAndReacts();
        return new ResponseEntity<>(averages, HttpStatus.OK);
    }

}
