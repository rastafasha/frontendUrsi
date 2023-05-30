import { Component, OnInit } from '@angular/core';
import { HttpBackend } from '@angular/common/http';
import { Banner } from 'src/app/models/banner';
import { BannerService } from 'src/app/services/banner.service';
// import * as $ from 'jquery';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {


  banners: Banner;
  error: string;
  msm_error: string;

  constructor(
    private bannerService: BannerService,
    handler: HttpBackend,
  ) {
   }

  ngOnInit(): void {
    this.getCursos();
    window.scrollTo(0,0);
  }

  getCursos(): void {
    this.bannerService.getBanners().subscribe(
      res =>{
        this.banners = res;
        error => this.error = error;
      }
    );
  }


}
