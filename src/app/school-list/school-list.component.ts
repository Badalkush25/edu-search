import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-school-list',
  templateUrl: './school-list.component.html',
  styleUrls: ['./school-list.component.css']
})
export class SchoolListComponent implements OnInit {

  schoolList: string[] =  [];
  

  constructor(
    private dataService: DataService,
    private router: Router
  ) { 
    this.schoolList = dataService.getInstitutes();
    console.log(this.schoolList);

  }

  onSchoolClick(school: string) {
    this.dataService.setOrganization(school);
    this.router.navigate(['/institute']);
  }

  ngOnInit(): void {
  }

}
