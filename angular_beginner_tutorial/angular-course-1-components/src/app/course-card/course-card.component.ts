import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Course } from '../model/course';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input()
  course: Course;

  @Input()
  cardIndex: number;

  // tslint:disable-next-line: no-output-rename
  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();

  constructor() {
    console.log(this.cardIndex);

  }

  ngOnInit(): void {
  }

  isImageVisible() {
    return (this.course && this.course.iconUrl);
  }

  onCourseViewed(): void {
    this.courseEmitter.emit(this.course);

  }

  cardClasses(): any {
    return {
      'beginner': this.course.category === 'BEGINNER'
    };
  }

  cardStyles(): any {
    return {
      'text-decoration': 'underline'
    };
  }

}
