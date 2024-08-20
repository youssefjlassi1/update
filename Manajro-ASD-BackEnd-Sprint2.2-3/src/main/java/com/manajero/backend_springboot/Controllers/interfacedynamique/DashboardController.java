package com.manajero.backend_springboot.Controllers.interfacedynamique;

import com.manajero.backend_springboot.Services.communication.DashboardService;
import com.manajero.backend_springboot.collections.communication.Post;
import com.manajero.backend_springboot.dto.UserActivity;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;


@RestController
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RequestMapping("/app/dashboard")
@Tag(name = ("/dashboard"))
@AllArgsConstructor
public class DashboardController {

    private final DashboardService dashboardService;

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