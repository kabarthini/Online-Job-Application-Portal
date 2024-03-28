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


public class Contact {
    
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int contactId;
    private String user_name;
    private String user_email;
    private String message;


}
