package com.cursoloiane.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cursoloiane.model.Course;

@Repository
public interface CourseRepository extends JpaRepository<Course, Long> {
    
}
