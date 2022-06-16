import { CoursesService } from './../services/courses.service';
import { Course } from './../model/course';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [{ _id: '1', name: 'Angular', category: 'Front-End' }];
  displayedColumns = ['name', 'category'];

  constructor(private coursesService: CoursesService) {
  }

  ngOnInit(): void {
    this.courses = this.coursesService.list();
  }
}
