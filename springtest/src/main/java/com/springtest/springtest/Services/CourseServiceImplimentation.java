package com.springtest.springtest.Services;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;


import com.springtest.springtest.Entities.Course;

@Service
public class CourseServiceImplimentation implements CourseService {

	List<Course> list;
	
	public CourseServiceImplimentation() {
		
		list = new ArrayList<>();
		
		list.add(new Course(145, "Java Core Course","this course includes core java"));
		list.add(new Course(321, "Spring Boot", "Creating rest API using spring boot"));
		
		
	}
	
	
	@Override
	public List<Course> getCourses() {
		return list;
	}


	@Override
	public Course getCourse(long courseId) {
		
		Course c = null;
		
		for(Course course:list) {
			if(course.getId()==courseId) {
				c = course;
				break;
			}
		}

		return c;
	}


	@Override
	public Course addCourse(Course course) {
		list.add(course);
		return course;
	}
	
	@Override
	public Course updateCourse(Course course) {
		list.forEach (e->{
			if(e.getId()==course.getId()){
				e.setTitle(course.getTitle());
				e.setDescription(course.getDescription());
			}
		});
		return course;
	}
	
	@Override
	public void deletCourse(long parseLong) {
		list = this.list.stream()
				.filter(e-> e.getId()!=parseLong)
				.collect(Collectors.toList());
	}	 


}
