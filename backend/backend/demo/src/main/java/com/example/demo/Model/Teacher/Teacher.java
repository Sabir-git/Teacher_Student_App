package com.example.demo.Model.Teacher;

import jakarta.persistence.*;
import lombok.Getter;

@Getter
@Entity
@Table(name = "Teacher")
public class Teacher {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "email", unique = true)
    private String email;

    @Column(name = "password")
    private String password;

    @Column(name = "qualification")
    private String qualification;

    @Column(name = "subject")
    private String subject;

    @Column(name = "gender")
    private String gender;


}