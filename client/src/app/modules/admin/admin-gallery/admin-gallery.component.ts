import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {GalleryService} from "../../../services/gallery/gallery.service";
import {ImageInterface} from "../../../_interface/image.interface";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-admin-gallery',
  templateUrl: './admin-gallery.component.html',
  styleUrls: ['./admin-gallery.component.scss']
})
export class AdminGalleryComponent implements OnInit {

  constructor(private fb: FormBuilder, private galleryService: GalleryService) { }

  form = this.fb.group({
    file: ['', Validators.required],
    fileSource: ['', Validators.required]
  })

  files: ImageInterface[] = []
  backendUrl = environment.backendUrl


  onFileChange(event: any) {
    if(event.target.files.length > 0) {

      const file = event.target.files[0];
      this.form.patchValue({
        fileSource: file
      })
    }
  }

  upload() {
    if(this.form.valid) {
      const formData = new FormData()
      formData.append("file", this.form.value.fileSource)

      this.galleryService.uploadFile(formData).subscribe({
        next: () => {
          this.form.reset()
          this.ngOnInit()
        }
      })
    }
  }

  ngOnInit(): void {
    this.galleryService.getAllImages().subscribe({
      next: value => this.files = value
    })
  }

  deleteImage(id: string) {
    this.galleryService.deleteImage(id).subscribe({
      next: () => this.ngOnInit()
    })
  }
}
