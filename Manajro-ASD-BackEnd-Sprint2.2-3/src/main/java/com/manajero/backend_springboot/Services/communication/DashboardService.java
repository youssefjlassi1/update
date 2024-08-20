package com.manajero.backend_springboot.Services.communication;

import com.manajero.backend_springboot.collections.communication.Post;
import com.manajero.backend_springboot.dto.UserActivity;
import com.manajero.backend_springboot.repositories.communication.CommentRepository;
import com.manajero.backend_springboot.repositories.communication.PostRepository;
import com.manajero.backend_springboot.repositories.communication.ReactRepository;
import com.manajero.backend_springboot.repositories.user.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable; // Corrected import
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@AllArgsConstructor
public class DashboardService {

    private final PostRepository postRepo;
    private final ReactRepository reactRepo;
    private final CommentRepository commentRepo;
    private final UserRepository userRepo;

    public long getTotalPosts() {
        return postRepo.count();
    }

    public long getTotalComments() {
        return commentRepo.count();
    }

    public long getTotalReacts() {
        return reactRepo.count();
    }

    public List<Post> getTopPostsByEngagement(int limit) {
        return postRepo.findTopPostsByEngagement(limit);
    }

    public List<UserActivity> getMostActiveUsers(int limit) {
        Pageable pageable = PageRequest.of(0, limit); // Correct usage
        return userRepo.findMostActiveUsers(pageable); // Correct usage
    }

    public Map<String, Double> getAverageCommentsAndReacts() {
        long totalPosts = postRepo.count();
        long totalComments = commentRepo.count();
        long totalReacts = reactRepo.count();

        Map<String, Double> averages = new HashMap<>();
        averages.put("averageCommentsPerPost", totalPosts > 0 ? (double) totalComments / totalPosts : 0);
        averages.put("averageReactsPerPost", totalPosts > 0 ? (double) totalReacts / totalPosts : 0);

        return averages;
    }
}
