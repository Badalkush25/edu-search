import { Injectable } from '@angular/core';
import * as instituteData from '../assets/data/dataInstitute.json';


interface InstituteData {
  name: string,
  location: string,
  block: string,
  information: string,
  board: string
}


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private institutes: InstituteData[];

  private allData = {
    school: instituteData["school"],

    college: instituteData["college"],

    coaching: instituteData["coaching"]
  }

  private selectedOrganization: string = '';
  private selectedCity: string = '';
  private selectedBlock: string = '';
  private selectedBoard: string = '';
  private selectedInstitute: string = '';
  private blocksToShow: string[] = [];
  private boardsToShow: string[] = [];
  private institutesToShow: string[] = [];

  private homeInstituteType: string;
  private homeInstitute: string;

  private allInfo: any;


  constructor() {

  }


  setInstitute(institueType: string) {
    this.selectedInstitute = institueType;
    console.log(institueType);

    this.selectedBoard = '';
    this.selectedBlock = '';
    this.blocksToShow = [];
    this.boardsToShow = [];
    this.institutesToShow = [];

    this.institutes = this.allData[institueType].map(
      (data) => {
        return <InstituteData> {
          name: data.name,
          location: data.location,
          block: data.block,
          information: data.information,
          board: data.board
        };
      }
    );
  }

  getInstitute() {
    return this.selectedInstitute;
  }

  getCities(): string[] {
      let citiesSet = this.institutes.map( value => value.location);
      citiesSet = [...new Set(citiesSet)];
      return citiesSet;
  }

  setCity(city: string) {
    this.selectedCity = city;
    this.selectedBoard = '';
    this.selectedBlock = '';
    this.blocksToShow = [];
    this.boardsToShow = [];
    this.institutesToShow = [];
    this.institutes.forEach((data) => {
        if (data.location === this.selectedCity) {
          this.blocksToShow.push(data.block);
        }
    });
    this.blocksToShow = [...new Set(this.blocksToShow)];
  };

  getBlocks(): string[] {
    return this.blocksToShow;
  }

  setBlock(block: string) {
      this.selectedBlock = block;
      this.boardsToShow = [];
      this.selectedBoard = '';
      this.institutesToShow = [];
      this.institutes.forEach(data => {
          if( data.block === this.selectedBlock ) {
              this.boardsToShow.push(data.board);
          }
      })
      this.boardsToShow = [... new Set(this.boardsToShow)];
  }

  getBoards(): string[] {
    return this.boardsToShow;
  }

  setBoard(board: string) {
    this.selectedBoard = board;
    this.institutesToShow = [];

    this.institutes.forEach((data) => {
        if( data.block === this.selectedBlock
          && this.selectedCity === data.location
          && this.selectedBoard === data.board) {
            this.institutesToShow.push(data.name);
        }
    })
  }

  getInstitutes() {
    return this.institutesToShow;
  }

  setOrganization(org: string) {
    this.selectedOrganization = org;
    this.allInfo = this.allData[this.selectedInstitute]
                      .filter(value => value.name === this.selectedOrganization)[0]
  }

  getOrganizationDetails() {
    return this.allInfo;
  }

  getTopNames(instituteType: string, topCount: number) {
    const topInsitutes = this.allData[instituteType].slice(0, topCount).map(
      (val) => val.name
    )

    return topInsitutes;
  }

  selectInstitute(instituteType: string, instituteName: string) {
    this.homeInstitute = instituteName;
    this.homeInstituteType = instituteType;
    this.allInfo = this.allData[this.homeInstituteType]
    .filter(value => value.name === this.homeInstitute)[0]
    console.log(this.allInfo);
  }

}
