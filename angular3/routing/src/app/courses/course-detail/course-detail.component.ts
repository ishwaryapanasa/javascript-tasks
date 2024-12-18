import { Component, inject, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Course } from '../../Models/course';
import { CourseService } from '../../Services/course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.css'
})
export class CourseDetailComponent implements OnInit  {
  selectedcourse:Course;
  courseid:number;
  courseservice:CourseService=inject(CourseService);
  activeroute:ActivatedRoute=inject(ActivatedRoute);
  ngOnInit() {
  // this.courseid= +this.activeroute.snapshot.paramMap.get('id');
  this.activeroute.paramMap.subscribe((data) =>{
    this.courseid=+data.get('id');
    this.selectedcourse=this.courseservice.courses.find(course =>course.id === this.courseid
    );
  })
   
  }
}
