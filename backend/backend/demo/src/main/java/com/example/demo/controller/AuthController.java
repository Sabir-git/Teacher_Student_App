package com.example.demo.controller;

import com.example.demo.Model.Student.Student;
import com.example.demo.Model.Teacher.Teacher;
import com.example.demo.dto.LoginRequest;
import com.example.demo.repository.StudentRepository;
import com.example.demo.repository.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {

    @Autowired
    private TeacherRepository teacherRepository;

    @Autowired
    private StudentRepository studentRepository;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {

        String email = loginRequest.getEmail();
        String password = loginRequest.getPassword();

        // Check if user is a teacher
        Teacher teacher = teacherRepository.findByemail(email);

        if (teacher != null && teacher.getPassword().equals(password)) {

            Map<String, Object> response = new HashMap<>();

            response.put("name",
                    teacher.getFirstName() + " " + teacher.getLastName());
            response.put("email", teacher.getEmail());
            response.put("qualification", teacher.getQualification());
            response.put("subject", teacher.getSubject());
            response.put("gender", teacher.getGender());

            return ResponseEntity.ok(response);
        }

        // Check if user is a student
        Student student = studentRepository.findByemail(email);

        if (student != null && student.getPassword().equals(password)) {

            Map<String, Object> response = new HashMap<>();

            response.put("email", student.getEmail());
            response.put("name",
                    student.getFirstName() + " " + student.getLastName());
            response.put("dob", student.getDob());
            response.put("gender", student.getGender());
            response.put("rollno", student.getRollno());

            return ResponseEntity.ok(response);
        }

        // Invalid login
        Map<String, String> error = new HashMap<>();
        error.put("error", "Invalid email or password");

        return ResponseEntity
                .status(HttpStatus.UNAUTHORIZED)
                .body(error);
    }
}

