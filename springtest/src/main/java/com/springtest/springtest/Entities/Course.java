package com.springtest.springtest.Entities;

public class Course {

	private long id;
	private String title;
	private String description;
	
	// constructor from field
	public Course(long id, String title, String description) {
		super();
		this.id = id;
		this.title = title;
		this.description = description;
	}
	
	// default constructor
	public Course() {
		super();
	}

	
	// getter & setter
	public long getId() {
		return id;
	}
	
	public void setId(long id) {
		this.id = id;
	}
	
	public String getTitle() {
		return title;
	}
	
	public void setTitle(String title) {
		this.title = title;
	}
	
	public String getDescription() {
		return description;
	}
	
	public void setDescription(String description) {
		this.description = description;
	}
	
	
	@Override
	public String toString() {
		return "Course[id=" + id +", title="+ title +",description="+ description +"]";
	}
	
	 
}
