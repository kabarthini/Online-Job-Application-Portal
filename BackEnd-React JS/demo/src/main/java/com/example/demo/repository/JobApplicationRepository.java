package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.JobApplication;

@Repository


public interface JobApplicationRepository extends JpaRepository<JobApplication, Integer>{
}

