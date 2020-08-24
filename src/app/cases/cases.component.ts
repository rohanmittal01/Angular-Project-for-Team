import { Component, OnInit } from '@angular/core';
import { CasesService } from '../_services/cases.service';


@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css']
})
export class CasesComponent implements OnInit {

  cases: any;
  constructor(private caseService: CasesService) {
    this.caseService.getCases().subscribe( x => {
      console.log(x);
      this.cases = x;
    });
   }

  ngOnInit(): void {
  }

}
