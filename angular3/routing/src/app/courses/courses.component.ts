import { Component, inject, OnInit } from '@angular/core';
import { Course } from '../Models/course';
import { CourseService } from '../Services/course.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent implements OnInit {
courseService=inject(CourseService);
AllCourses:Course[];
activeroute:ActivatedRoute=inject(ActivatedRoute);
searchstring:string;

ngOnInit() {
  this.activeroute.queryParamMap.subscribe((data)=>{
    this.searchstring=data.get('search')
  });
 if(this.searchstring===undefined || this.searchstring===''||this.searchstring===null){
  this.AllCourses=this.courseService.courses;
 }else{
  this.AllCourses=this.courseService.courses.filter(x => x.title.toLocaleLowerCase().includes(this.searchstring.toLowerCase()))
 }
}s


}
