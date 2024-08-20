package com.manajero.backend_springboot.dto;


import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor

public class UserActivity {

    private String userId;
    private String username;
    private long postCount;
    private long reactCount;
    private long activityCount;
    public UserActivity(String userId, long activityCount) {
        this.userId = userId;
        this.activityCount = activityCount;
    }
}
