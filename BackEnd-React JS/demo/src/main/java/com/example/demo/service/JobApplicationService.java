package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.demo.entity.JobApplication;

import com.example.demo.repository.JobApplicationRepository;

@Service
public class JobApplicationService {
    @Autowired
	 private JobApplicationRepository jobapplicationRepository;
   
	

	public void saveJobapplication(JobApplication jobapply) 
	{
		jobapplicationRepository.save(jobapply);
	}



	public List<JobApplication> getJobapplication() 
	{
		return jobapplicationRepository.findAll();
		
		
	}



	public void updateJobapplication(JobApplication jobapply) {
		
		jobapplicationRepository.save(jobapply);
	}



	public void deleteContact(int applicationId) {
		jobapplicationRepository.deleteById(applicationId);
		
	}
    
}
