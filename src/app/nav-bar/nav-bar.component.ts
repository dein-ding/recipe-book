import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  navBarCollapsed: boolean = true;
  showManageDropDown: boolean = false;

  @Input() currentRoute: string;

  @Output() onNavigation = new EventEmitter<string>()
  navigateTo(route: string) {
    this.onNavigation.emit(route)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
