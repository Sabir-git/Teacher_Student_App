package com.example.demo.repository;

import com.example.demo.Model.Student.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Long> {
   public  Student findByemail(String email) ;


}