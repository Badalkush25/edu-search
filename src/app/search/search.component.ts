import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  cities: string[];
  blocks: string[];
  boards: string[];
  selectedCity: string = '';
  selectedBlock: string = '';
  selectedBoard: string = '';
  institute: string = 'school';

  isSearch = false;

  constructor(
      private dataService: DataService,
      private router: Router
    ) { 
    this.cities = this.dataService.getCities();
    console.log(this.cities)
    this.institute = dataService.getInstitute();
    console.log(this.institute)
  }

  onCitySelection() {
      this.dataService.setCity(this.selectedCity);
      this.selectedBlock = '';
      this.selectedBoard = '';
      this.blocks = [];
      this.boards = [];
      this.blocks = this.dataService.getBlocks();
      console.log(this.blocks)
      this.isSearch = false;
  }

  onBlockSelection() {
    this.selectedBoard = '';
    this.boards = [];
    this.dataService.setBlock(this.selectedBlock);
    this.boards = this.dataService.getBoards();
    this.isSearch = false;
  }

  onBoardSelection() {
    this.dataService.setBoard(this.selectedBoard);
    this.isSearch = true;
  }

  onSearchClick() {
    this.router.navigate(['/schoolList']);
  }

  ngOnInit(): void {
    
    this.blocks = [];
    this.boards = [];
    this.selectedCity = '';
    this.selectedBlock = '';
    this.selectedBoard = '';
    
  }

  ngOnDestroy() {
  
  }

}
