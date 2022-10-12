import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <main class="content">
      <router-outlet></router-outlet>
    </main>
    <app-nav></app-nav>
  `,
  styles: [`
  :host {
    display: grid;
    grid-template-areas: "header header" "nav    content";
    grid-template-columns: min-content 1fr;
  }

  app-header {
    grid-area: header;
  }

  app-navbar {
    grid-area: nav;
    height: calc(100vh - 64px);
  }

  .content {
    grid-area: content;
    height: calc(100vh - 64px);
    overflow-x: auto;
  }

  @media screen and (max-width: 1199px) {
    :host {
      grid-template-areas: "header" "content" "nav";
      grid-template-columns: 1fr;
    }

    .content {
      height: calc(100vh - 64px - 54px);
      max-width: 100vw;
    }

    app-navbar {
      height: initial;
    }
  }
  `]
})
export class AppComponent {

}
