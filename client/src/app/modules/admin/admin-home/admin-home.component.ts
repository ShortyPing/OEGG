import { Component, OnInit } from '@angular/core';
import {User} from "../../../_interface/user.interface";
import {BackendService} from "../../../services/backend/backend.service";

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {

  constructor(private backendService: BackendService) { }

  user: User;

  ngOnInit(): void {

    this.backendService.user.subscribe({
      next: user => this.user = user
    })
  }

}
