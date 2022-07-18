import { Component, OnInit } from '@angular/core';
import { Image } from './image.interface';
import {GalleryService} from "../../../services/gallery/gallery.service";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-public-gallery',
  templateUrl: './public-gallery.component.html',
  styleUrls: ['./public-gallery.component.scss']
})
export class PublicGalleryComponent implements OnInit {

  constructor(private galleryService: GalleryService) { }

  images: Array<Image> = []

  ngOnInit(): void {
    this.galleryService.getAllImages().subscribe({
      next: value => {
        value.forEach(image => {
          this.images.push({
            imageName: environment.backendUrl + "/gallery/stream/" + image._id
          })
        })
      }
    })
  }

}
