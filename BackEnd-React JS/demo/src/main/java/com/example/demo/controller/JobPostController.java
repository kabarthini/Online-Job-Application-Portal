package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody; // Correct import
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.JobApplication;
import com.example.demo.entity.JobPost;
import com.example.demo.service.JobPostService;

@RestController
@CrossOrigin(origins="http://localhost:5174")
@RequestMapping("/job")
public class JobPostController {

    @Autowired
    private JobPostService jobPostService;

    @GetMapping("/getjob")
    public List<JobPost> getJobDetails() {
        return jobPostService.getJob();
    }

 ///@PreAuthorize("hasAuthority('ADMIN')")
    @PostMapping("/postjob")
    public String saveJobDetails(@RequestBody JobPost job) {
        jobPostService.saveJob(job);
        return("Job Successfully posted");
    }

    
    @PreAuthorize("hasAuthority('ADMIN')")
     @PutMapping("/putjob")
	    public String updateJobDetails(@RequestBody JobPost job,@RequestParam int jobPostId)
	    {
	    	job.setJobPostId(jobPostId);
	   	    jobPostService.updateJob(job);
	   	    return ("Successfully Updated");
	    }
    
    @PreAuthorize("hasAuthority('ADMIN')")
    @DeleteMapping("/deletejob")
    public String deleteJobDetails(@RequestParam long jobPostId) {
        jobPostService.deleteJob(jobPostId);
        return("Successfully Deleted");
    }
}
