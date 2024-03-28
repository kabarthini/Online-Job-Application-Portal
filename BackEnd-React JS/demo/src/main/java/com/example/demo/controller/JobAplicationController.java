package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.JobApplication;
import com.example.demo.service.JobApplicationService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/apply")
@CrossOrigin(origins="http://localhost:5174")
public class JobAplicationController {
    @Autowired
      private JobApplicationService jobapplicationService;
   
	    @GetMapping("/getapply")
	    public List<JobApplication> getJobapplicationDetails()
	    {
	    	return jobapplicationService.getJobapplication();
	    }
	    
	    @PostMapping("/postapply")
	    public String postContactDetails(@RequestBody JobApplication jobapply)
	    {
	    	jobapplicationService.saveJobapplication(jobapply);
	    	return("Sucessfully saved");
	    }
	    @PutMapping("/putapply")
	    public String updateContactDetails(@RequestBody JobApplication jobapply,@RequestParam int applicationId)
	    {
	    	jobapply.setApplicationId(applicationId);
	   	    jobapplicationService.updateJobapplication(jobapply);
	   	    return ("Successfully Updated");
	    }
	    
	    @DeleteMapping("/deleteapply")
	    public String deleteJobapplicationDetails(@RequestParam int applicationId)
	    {
	    jobapplicationService.deleteContact(applicationId);
	   	 return ("Successfully Deleted");
	    }
}
