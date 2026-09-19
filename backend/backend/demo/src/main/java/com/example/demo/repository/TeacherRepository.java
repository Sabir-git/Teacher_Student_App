package com.example.demo.repository;

import com.example.demo.Model.Teacher.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TeacherRepository extends JpaRepository<Teacher, Long> {
   public  Teacher findByemail(String email);



}