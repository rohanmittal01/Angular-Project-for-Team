import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-case-card',
  templateUrl: './case-card.component.html',
  styleUrls: ['./case-card.component.css']
})
export class CaseCardComponent implements OnInit {

  @Input('cases') cases: any;
  constructor() { }

  ngOnInit(): void {
  }

}
