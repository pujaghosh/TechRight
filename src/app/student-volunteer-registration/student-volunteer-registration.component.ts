import { Component, OnInit } from '@angular/core';
import { Student } from '../_models/student.model';

@Component({
  selector: 'app-student-volunteer-registration',
  templateUrl: './student-volunteer-registration.component.html',
  styleUrls: ['./student-volunteer-registration.component.scss']
})
export class StudentVolunteerRegistrationComponent implements OnInit {
  student : Student=new Student();
  address : string;
  homephone : string;
  constructor() { }

  ngOnInit(): void {
  }

}
