import { Component, OnInit} from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'wizytowka';

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  ngOnInit(){
    this.galleryOptions = [
      {
        width: '600px',
        height: '400px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
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
        small: 'assets/gtr_back.jpg',
        medium: 'assets/gtr_back.jpg',
        big: 'assets/gtr_back.jpg'
      },
      {
        small: 'assets/gtr_side.jpg',
        medium: 'assets/gtr_side.jpg',
        big: 'assets/gtr_side.jpg'
      },
      {
        small: 'assets/bmw.jpg',
        medium: 'assets/bmw.jpg',
        big: 'assets/bmw.jpg'
      },
      {
        small: 'assets/gulf.jpg',
        medium: 'assets/gulf.jpg',
        big: 'assets/gulf.jpg'
      },
      {
        small: 'assets/corvette.jpg',
        medium: 'assets/corvette.jpg',
        big: 'assets/corvette.jpg'
      },
    ];
  }


}
