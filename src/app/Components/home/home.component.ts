import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../../common-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  featuredProduct: any;

  constructor(private commonService: CommonServiceService){}

  ngOnInit(): void {
    this.fetchFeaturedProduct();
  }

  fetchFeaturedProduct(){
    this.commonService.getFeaturedProduct().subscribe((d:any)=>{
      this.featuredProduct = d;     
      
    });
  }

}
