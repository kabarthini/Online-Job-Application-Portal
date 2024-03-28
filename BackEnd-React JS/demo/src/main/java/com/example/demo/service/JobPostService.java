package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;


import com.example.demo.entity.JobPost;
import com.example.demo.repository.JobPostRepository;

@Service
public class JobPostService {

  @Autowired
    private  JobPostRepository jobPostRepository;

 
    public void saveJob(JobPost job)
    {
        jobPostRepository.save(job);
    }
    public List<JobPost>getJob()
    {
        return jobPostRepository.findAll();
    }
    public void updateJob(JobPost job)
    {
        jobPostRepository.save(job);
    }
    public void deleteJob(long jobPostId)
    {
        jobPostRepository.deleteById(jobPostId);
    }

}

