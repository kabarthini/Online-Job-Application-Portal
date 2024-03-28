package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import jakarta.persistence.GenerationType;

@Data
@Builder
@Entity

@NoArgsConstructor

@AllArgsConstructor
@Table
public class JobApplication {
    
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)

    private int applicationId;
    private String firstName;
    private String lastName;
    private String email;
    private String jobRole;
    private String dob;
    private String skills;
    private String address;
    private String city;
    private String pincode;
    private String cv;

}
