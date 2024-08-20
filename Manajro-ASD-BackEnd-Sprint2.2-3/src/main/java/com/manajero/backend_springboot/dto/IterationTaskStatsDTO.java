package com.manajero.backend_springboot.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class IterationTaskStatsDTO {
    private String sprintName;
    private long totalTasks;
    private double completionPercentage;
}

