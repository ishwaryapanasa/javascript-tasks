import { Component ,inject, OnInit} from '@angular/core';
import { Course } from '../../Models/course';
import { CourseService } from '../../Services/course.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrl: './popular.component.css'
})
export class PopularComponent implements OnInit {
 courseService:CourseService=inject(CourseService)
 popularCourses:Course[]=[];
 router:Router=inject(Router);
 activeroute:ActivatedRoute=inject(ActivatedRoute);

 ngOnInit() {
  this.popularCourses=this.courseService.courses.filter(c => c.rating >= 4.5);
 }
 btnclicked(){

  this.router.navigate(['/courses'],{relativeTo:this.activeroute});
 // this.router.navigateByUrl('courses');

 }

}
