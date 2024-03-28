package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@Entity

@NoArgsConstructor

@AllArgsConstructor
@Table

public class JobPost {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long jobPostId;
    private String company;
    private String jobRole;
    private String salary;
    private String workMode;
    private String workTime;
    private String workShift;


}
