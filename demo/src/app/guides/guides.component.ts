import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'formly-demo-examples',
  template: `
    <mat-sidenav-container style="min-height: 90% !important;">
      <mat-sidenav mode="side" opened="true" [style.width.px]="250">
        <mat-nav-list>
          <a mat-list-item  *ngFor="let link of navs" [routerLink]="link.href">
            {{ link.text }}
          </a>
        </mat-nav-list>
      </mat-sidenav>
      <mat-sidenav-content>
        <div *ngIf="route.params | async as params" [innerHtml]="contents[params.id]"></div>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
})
export class GuidesComponent {
  navs = [
    { href: '/guide/getting-started', text: 'Getting started' },
    { href: '/guide/properties-options', text: 'Properties and Options' },
    { href: '/guide/custom-formly-field', text: 'Custom Templates' },
  ];

  contents = {
    'getting-started': require('!!raw-loader!prism-hightlight-loader!markdown-loader!./../../../../README.md'),
    'properties-options': require('!!raw-loader!prism-hightlight-loader!markdown-loader!./properties-options.md'),
    'custom-formly-field': require('!!raw-loader!prism-hightlight-loader!markdown-loader!./custom-formly-field.md'),
  };

  constructor(public route: ActivatedRoute) {}
}
