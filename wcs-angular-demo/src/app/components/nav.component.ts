import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
    <wcs-nav>
      <wcs-nav-item text="Accueil" routerLink="/">
        <wcs-mat-icon icon="home" size="l"></wcs-mat-icon>
      </wcs-nav-item>
    </wcs-nav>
  `,
  styles: [`
    //todo: remove this temporary fix
    wcs-mat-icon {
      margin-bottom: 8px;
    }
  `]
})
export class NavComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
