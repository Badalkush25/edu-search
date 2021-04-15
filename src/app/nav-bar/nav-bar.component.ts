import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  school = 'school';
  college = 'college';
  coaching = 'coaching';
  home = 'home';
  about = 'about';
  search = 'search';
  isHomeActive = true
  isSchoolActive = false
  isCollegeActive = false
  isCoachingActive = false
  isAboutActive = false


  constructor(private router: Router, private dataService: DataService) { }


  makeAllOff() {
    this.isHomeActive = false
    this.isSchoolActive = false
    this.isCollegeActive = false
    this.isCoachingActive = false
    this.isAboutActive = false
  }

  openNav(button: string) {
    this.makeAllOff();
    switch(button) {
      case this.home:
        this.isHomeActive = true;
        break;
      case this.school:
        this.dataService.setInstitute(this.school);
        this.isSchoolActive = true;
        break;
      case this.about:
        this.isAboutActive = true;
        break;
      case this.college:
        this.isCollegeActive = true;
        this.dataService.setInstitute(this.college);
        break;
      case this.coaching:
        this.isCoachingActive = true;
        this.dataService.setInstitute(this.coaching);
    }
    this.router.navigate([`/${button}`]);
  }


  ngOnInit(): void {
  }

}
