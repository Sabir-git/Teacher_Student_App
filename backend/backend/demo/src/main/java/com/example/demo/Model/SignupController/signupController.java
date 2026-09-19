package com.example.demo.Model.SignupController;

import com.example.demo.Model.Student.Student;
import com.example.demo.Model.Teacher.Teacher;
import com.example.demo.repository.StudentRepository;
import com.example.demo.repository.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class signupController {

    @Autowired
    private TeacherRepository teacherRepository;

    @Autowired
    private StudentRepository studentRepository;

    @PostMapping("/signup/teacher")
    public String TeacherSignup(@RequestBody Teacher teacher) {
        // Check if the email already exists
        if (teacherRepository.findByemail(teacher.getEmail()) != null) {
            return "Teacher with this email already exists!";
        }

        // Save the teacher to the database (without password encryption)
        teacherRepository.save(teacher);

        System.out.println("Teacher Signup Successful for " + teacher.getEmail());
        return "Teacher Signup Successful for " + teacher.getEmail();
    }

    @PostMapping("/signup/student")
    public String StudentSignup(@RequestBody Student student) {
        // Check if the email already exists
        if (studentRepository.findByemail(student.getEmail()) != null) {
            return "Student with this email already exists!";
        }

        // Save the student to the database (without password encryption)
        studentRepository.save(student);

        System.out.println("Student Signup Successful for " + student.getEmail());
        return "Student Signup Successful for " + student.getEmail();
    }
}
