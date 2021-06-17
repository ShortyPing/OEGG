import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';
import { PrivacyModalComponent } from './modals/privacy-modal/privacy-modal.component';

@Component({
  selector: 'app-public-init',
  templateUrl: './public-init.component.html',
  styleUrls: ['./public-init.component.scss']
})
export class PublicInitComponent implements OnInit {

  constructor(private cookieService: CookieService, private modalService: NgbModal, private router: Router) {
    
    
  }

  year: string = ""
  ngOnInit(): void {
    this.year = new Date().getFullYear().toString()

    
  }

  triggerPrivacyModal() {
    const modal = this.modalService.open(PrivacyModalComponent);
    modal.componentInstance.name = "ww"
  }



}
