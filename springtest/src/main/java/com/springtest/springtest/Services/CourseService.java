package com.springtest.springtest.Services;

import java.util.List;

import com.springtest.springtest.Entities.Course;

public interface CourseService {
	
	public List<Course> getCourses();
	
	public Course getCourse(long courseId);
	
	public Course addCourse(Course course);

	public Course updateCourse(Course course);
	
	public void deletCourse(long parseLong);	

}
