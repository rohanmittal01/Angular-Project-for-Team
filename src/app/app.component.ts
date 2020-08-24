import { Component } from '@angular/core';
import { CasesService } from './_services/cases.service';

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project';
  constructor(private caseService: CasesService){
    this.caseService.getCases().subscribe(x => {
      console.log(x);
    });
  }
}
