import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./modules/dashboard/pages/dps-page-dashboard/dps-page-dashboard.component').then(m => m.DpsPageDashboardComponent)
    },
    {
        path: 'factoryConfigurator',
        loadComponent: () => import('./modules/factory-configurator/pages/dps-page-factory-configurator/dps-page-factory-configurator.component').then(m => m.DpsPageFactoryConfiguratorComponent)
    },
    {
        path: '**',
        redirectTo: '/'
    }
];
