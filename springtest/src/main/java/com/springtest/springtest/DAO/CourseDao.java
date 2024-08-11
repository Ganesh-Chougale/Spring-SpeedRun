package com.springtest.springtest.DAO;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springtest.springtest.Entities.Course;

public interface CourseDao extends JpaRepository<Course, Long> {

}
