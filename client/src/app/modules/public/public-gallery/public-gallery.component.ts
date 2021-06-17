import { Component, OnInit } from '@angular/core';
import { Image } from './image.interface';

@Component({
  selector: 'app-public-gallery',
  templateUrl: './public-gallery.component.html',
  styleUrls: ['./public-gallery.component.scss']
})
export class PublicGalleryComponent implements OnInit {

  constructor() { }

  images: Array<Image> = [
    {
      imageName: "IMG_4924.webp"
    },
    {
      imageName: "IMG_4958.webp"
    },
    {
      imageName: "IMG_5291.webp"
    },
    {
      imageName: "IMG_5388.webp"
    },
    {
      imageName: "IMG_5401.webp"
    },
    {
      imageName: "IMG_5489.webp"
    },
    {
      imageName: "IMG_5519.webp"
    },
    {
      imageName: "IMG_5707.webp"
    },
    {
      imageName: "IMG_5823.webp"
    },
    {
      imageName: "IMG_5882.webp"
    },
    {
      imageName: "IMG_6537.webp"
    },
    {
      imageName: "IMG_6733.webp"
    }
  ]

  ngOnInit(): void {
  }

}
