import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {

  condition = true;
  courses = ['c1', 'c2', 'c3'];
  constructor() { }

  ngOnInit(): void {
  }

}
