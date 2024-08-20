package com.manajero.backend_springboot.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class IterationProgressDto {
    private String id;
    private String sprintName;
    private double progressPercentage;
}
