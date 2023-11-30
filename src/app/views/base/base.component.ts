import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {
menuItems = [
  {url: "/notes", icon: "fa-note-sticky", isActive: true},
  {url: "/", icon: "fa-user", isActive: false}
]
  constructor() { }

  ngOnInit(): void {
  }

}
