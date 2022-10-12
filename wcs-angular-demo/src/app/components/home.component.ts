import {Component} from '@angular/core';

@Component({
  selector: 'home',
  template: `
    <wcs-action-bar gutter="">
        Home sweet home
    </wcs-action-bar>
    <div id="home">
    Start hacking here for bug report. Thanks.
    </div>
  `,
  styles: [`
    #home {
      margin: var(--wcs-base-margin);
    }

    .grid-container {
      display: grid;
      grid-auto-columns: auto;
      grid-gap: var(--wcs-base-margin);
      margin-top: var(--wcs-base-margin);
      margin-bottom: var(--wcs-base-margin);
    }

    provider-status {
      min-width: 100px;
      grid-row: 1;
    }
  `]
})
export class HomeComponent {
  constructor() {
  }
}
