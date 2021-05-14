import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-public-init',
  templateUrl: './public-init.component.html',
  styleUrls: ['./public-init.component.scss']
})
export class PublicInitComponent implements OnInit {

  constructor() { }

  year: string = ""
  ngOnInit(): void {
    this.year = new Date().getFullYear().toString()
  }



}
