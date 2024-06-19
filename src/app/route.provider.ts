import { RoutesService, eLayoutType } from '@abp/ng.core';
import { APP_INITIALIZER } from '@angular/core';

export const APP_ROUTE_PROVIDER = [
  { provide: APP_INITIALIZER, useFactory: configureRoutes, deps: [RoutesService], multi: true },
];

function configureRoutes(routesService: RoutesService) {
  return () => {
    routesService.add([
      {
        path: '/',
        name: '::Menu:Home',
        iconClass: 'fas fa-home',
        order: 1,
        layout: eLayoutType.application,
      },
      {
        path: '/lawyers',
        name: 'Lawyer',
        iconClass: 'fas fa-book',
        order: 2,
        layout: eLayoutType.application,
      },
      {
        path: '/Cases',
        name: 'Case',
        iconClass: 'fas fa-book',
        order: 3,
        layout: eLayoutType.application,
      },
      {
        path: '/Hearings',
        name: 'Hearing',
        iconClass: 'fas fa-book',
        order: 4,
        layout: eLayoutType.application,
      },
      
    ]);
  };
}
