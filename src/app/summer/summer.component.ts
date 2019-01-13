import { Component, OnInit } from '@angular/core';
import {NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions} from "ngx-gallery";

@Component({
  selector: 'app-summer',
  templateUrl: './summer.component.html',
  styleUrls: ['./summer.component.scss']
})
export class SummerComponent implements OnInit {

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
        small: '../assets/gtr_back.jpg',
        medium: '../assets/gtr_back.jpg',
        big: '../assets/gtr_back.jpg'
      },
      {
        small: '../assets/gtr_side.jpg',
        medium: '../assets/gtr_side.jpg',
        big: '../assets/gtr_side.jpg'
      },
      {
        small: '../assets/bmw.jpg',
        medium: '../assets/bmw.jpg',
        big: '../assets/bmw.jpg'
      },
      {
        small: '../assets/gulf.jpg',
        medium: '../assets/gulf.jpg',
        big: '../assets/gulf.jpg'
      },
      {
        small: '../assets/corvette.jpg',
        medium: '../assets/corvette.jpg',
        big: '../assets/corvette.jpg'
      },
    ];
  }

}
