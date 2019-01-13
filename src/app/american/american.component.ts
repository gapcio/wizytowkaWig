import { Component, OnInit } from '@angular/core';
import {NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions} from "ngx-gallery";

@Component({
  selector: 'app-american',
  templateUrl: './american.component.html',
  styleUrls: ['./american.component.scss']
})
export class AmericanComponent implements OnInit {
  private _opened: boolean = true;
  private _toggleSidebar(){
    console.log("klik");
    this._opened = !this._opened;
  }

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  constructor() { }

  ngOnInit() {
    this.galleryOptions = [
      {
        width: '90vh',
        height: '90vh',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 1920,
        width: '90vh',
        height: '90vh',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = [
      {
        small: '../assets/wimborne.jpg',
        medium: '../assets/wimborne.jpg',
        big: '../assets/wimborne.jpg'
      },
      {
        small: '../assets/wimborne2.jpg',
        medium: '../assets/wimborne2.jpg',
        big: '../assets/wimborne2.jpg'
      },
      {
        small: '../assets/corvette2.jpg',
        medium: '../assets/corvette2.jpg',
        big: '../assets/corvette2.jpg'
      },
      {
        small: '../assets/cadilac.jpg',
        medium: '../assets/cadilac.jpg',
        big: '../assets/cadilac.jpg'
      },
      {
        small: '../assets/truck.jpg',
        medium: '../assets/truck.jpg',
        big: '../assets/truck.jpg'
      },
    ];
  }

}
