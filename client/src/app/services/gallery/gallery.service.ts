import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BackendService} from "../backend/backend.service";
import {environment} from "../../../environments/environment";
import {ImageInterface} from "../../_interface/image.interface";

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private client: HttpClient, private backendService: BackendService) { }

  uploadFile(formData: FormData) {
    return this.client.post(environment.backendUrl + "/gallery/upload", formData, {
      headers: new HttpHeaders()
        .set("Authorization", `Bearer ${this.backendService.getToken()}`)
    })
  }

  getAllImages() {
    return this.client.get<ImageInterface[]>(environment.backendUrl + "/gallery")
  }

  deleteImage(id: string) {
    return this.client.delete(environment.backendUrl + "/gallery/" + id, {
      headers: new HttpHeaders()
        .set("Authorization", `Bearer ${this.backendService.getToken()}`)
    })
  }
}
