import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-privacy-modal',
  templateUrl: './privacy-modal.component.html',
  styleUrls: ['./privacy-modal.component.scss']
})
export class PrivacyModalComponent implements OnInit {

  constructor(public activateModal: NgbActiveModal, public config: NgbModalConfig, private cookieService: CookieService) {
    
  }

  @Input() name;

  ngOnInit(): void {
  }

}
