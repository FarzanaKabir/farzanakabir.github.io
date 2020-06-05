import { Component, OnInit } from '@angular/core';
import {ApiService} from './api.service';
import {PortfolioData, ProfileResponse} from './data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  storedTheme: string = localStorage.getItem('theme-color');
  portfolio: PortfolioData;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.fetchData().subscribe((data: ProfileResponse) => {
      console.log(data);
      this.portfolio = data.data;
    });
  }
  setTheme(){
    if (this.storedTheme === 'theme-dark'){
      localStorage.setItem('theme-color', 'theme-light');
      this.storedTheme = localStorage.getItem('theme-color');
    }else{
      localStorage.setItem('theme-color', 'theme-dark');
      this.storedTheme = localStorage.getItem('theme-color');
    }
  }
}
