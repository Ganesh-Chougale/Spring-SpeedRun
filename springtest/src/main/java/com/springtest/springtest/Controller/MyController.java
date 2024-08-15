package com.springtest.springtest.Controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


import com.springtest.springtest.Entities.Course;
import com.springtest.springtest.Services.CourseService;

@RestController
@CrossOrigin("*")
public class MyController {
	
	@Autowired
	public CourseService courseService;
	
	@GetMapping("/home")
	public String home() {
		return "this is a home page";
	}
	
//	@RequestMapping(path="/course", method = RequestMethod.GET)
	@GetMapping("/courses")
	public List<Course> getCourses(){
		return this.courseService.getCourses();
	}
	// get all courses
	
	@GetMapping("/courses/{courseId}")
	public Course getCourse(@PathVariable String courseId) {
		return this.courseService.getCourse(Long.parseLong(courseId));
	}
	// get single course
	
	@PostMapping("/courses")	
	public Course addCourse(@RequestBody Course course) {
		return this.courseService.addCourse(course);		
	}
	// add a course
	
	@PutMapping("/courses")
	public Course updateCourse(@RequestBody Course course) {
		return this.courseService.updateCourse(course);
	}
	// update course
	
	@DeleteMapping("/courses/{courseId}")
	public ResponseEntity<HttpStatus> deletCourse(@PathVariable String courseId){
		try {
			this.courseService.deletCourse(Long.parseLong(courseId));
			return new ResponseEntity<>(HttpStatus.OK);
		}
		catch(Exception e){
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	// delete course

}
