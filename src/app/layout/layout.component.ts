import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  topSchools: string[];
  topColleges: string[];
  topCoachings: string[];

  constructor(
    private dataService: DataService,
    private router: Router
  ) { }

  goToSchool(name: string) {
    this.dataService.selectInstitute('school', name);
    this.router.navigate(['/institute']);
  }

  goToCoaching(name: string) {
    this.dataService.selectInstitute('coaching', name);
    this.router.navigate(['/institute']);
  }

  goToCollege(name: string) {
    this.dataService.selectInstitute('college', name);
    this.router.navigate(['/institute']);
  }

  ngOnInit(): void {
    this.topSchools = this.dataService.getTopNames('school', 5);
    this.topColleges = this.dataService.getTopNames('college', 5);
    this.topCoachings = this.dataService.getTopNames('coaching', 5);
  }

}
