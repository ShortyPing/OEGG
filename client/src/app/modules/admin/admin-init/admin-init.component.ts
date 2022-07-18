import { Component, OnInit } from '@angular/core';
import {BackendService} from "../../../services/backend/backend.service";
import {User} from "../../../_interface/user.interface";

@Component({
  selector: 'app-admin-init',
  templateUrl: './admin-init.component.html',
  styleUrls: ['./admin-init.component.scss']
})
export class AdminInitComponent implements OnInit {

  constructor(public backendService: BackendService) { }

  user: User;

  ngOnInit(): void {
    this.backendService.user.subscribe({
      next: user => this.user = user
    })
  }

}
