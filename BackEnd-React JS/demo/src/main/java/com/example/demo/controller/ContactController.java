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

import com.example.demo.entity.Contact;
import com.example.demo.service.ContactService;

import lombok.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/contact")
@CrossOrigin(origins="http://localhost:5174")
public class ContactController 
{
	  @Autowired
      private ContactService contactService;
   
	    @GetMapping("/getcontact")
	    public List<Contact> getContactDetails()
	    {
	    	return contactService.getContact();
	    }
	    
	    @PostMapping("/postcontact")
	    public String postContactDetails(@RequestBody Contact contact)
	    {
	    	contactService.saveContact(contact);
	    	return("Sucessfully saved");
	    }
	    @PutMapping("/putcontact")
	    public String updateContactDetails(@RequestBody Contact contact,@RequestParam int contactId)
	    {
	    	contact.setContactId(contactId);
	   	    contactService.updateContact(contact);
	   	    return ("Successfully Updated");
	    }
	    
	    @DeleteMapping("/deletecontact")
	    public String deleteContactDetails(@RequestParam int contactId)
	    {
	     contactService.deleteContact(contactId);
	   	 return ("Successfully Deleted");
	    }
}
