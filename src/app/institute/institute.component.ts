import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { TextFileService } from '../text-file.service';


@Component({
  selector: 'app-institute',
  templateUrl: './institute.component.html',
  styleUrls: ['./institute.component.css']
})
export class InstituteComponent implements OnInit {

  organizationDetails: any = {};
  orgInfo: any;

  constructor( private dataService: DataService, private textFileService: TextFileService ) { 
    

  }

  ngOnInit(): void {
    this.organizationDetails = this.dataService.getOrganizationDetails();
    console.log(this.organizationDetails);
    this.textFileService.getFile(this.organizationDetails.information)
      .subscribe((text) => this.orgInfo = text);

    
  }

}
