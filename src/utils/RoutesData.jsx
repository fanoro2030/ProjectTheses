import { lazy } from 'react';
import { importPage } from './importPages';

export const homeRoutes = [
  {
    path: '/presentation',
    component: lazy(() => importPage('PagesLanding', ['Presentation'])),
  },
  {
    path: '/about-us',
    component: lazy(() => importPage('PagesLanding', 'AboutUs')),
  },
  {
    path: '/seeds-ours',
    component: lazy(() => importPage('PagesLanding', 'SeedsOurs', 'routes')),
    routes: [
      {
        path: '/seeds-ours/catalogue',
        component: lazy(() =>
          importPage('PagesLanding', 'SeedsOurs', 'Catalogue')
        ),
      },
      {
        path: '/seeds-ours/solagro-seeds',
        component: lazy(() =>
          importPage('PagesLanding', 'SeedsOurs', 'SolagroSeeds')
        ),
      },
    ],
  },
  {
    path: '/nuestros-servicios',
    component: lazy(() => importPage('PagesLanding', 'NuestrosServicios')),
    routes: [
      {
        path: '/asesoramiento',
        component: lazy(() => importPage('PagesLanding', 'Asesoramiento')),
      },
      {
        path: '/limpieza-y-seleccion',
        component: lazy(() => importPage('PagesLanding', 'LimpiezaSeleccion')),
      },
    ],
  },
  {
    path: '/contacto',
    component: lazy(() => importPage('PagesLanding', 'ContactUs')),
  },
  {
    path: '/login',
    component: lazy(() =>
      importPage('PagesLanding', 'authentication', 'SignIn')
    ),
  },
];

export const mainRoutes = [
  {
    path: `/major`,
    component: lazy(() => importPage('dashboard', ['Main'])),
  },
  //Gestionar Permisos
  {
    path: `/producers`,
    component: lazy(() => importPage('dashboard', 'Producers', 'routes')),
    routes: [
      {
        path: `/producers/seedling`,
        component: lazy(() => importPage('dashboard', 'Producers', 'Seedling')),
      },
      {
        path: `/producers/seeders`,
        component: lazy(() =>
          importPage('dashboard', 'Producers', 'AddSeeders')
        ),
      },
      {
        path: `/producers/extern`,
        component: lazy(() => importPage('dashboard', 'Producers', 'Extern')),
      },
    ],
  },
  //Gestionar Usuarios
  {
    path: `/producers`,
    component: lazy(() => importPage('dashboard', 'Producers', 'routes')),
    routes: [
      {
        path: `/producers/seedling`,
        component: lazy(() => importPage('dashboard', 'Producers', 'Seedling')),
      },
      {
        path: `/producers/seeders`,
        component: lazy(() =>
          importPage('dashboard', 'Producers', 'AddSeeders')
        ),
      },
      {
        path: `/producers/extern`,
        component: lazy(() => importPage('dashboard', 'Producers', 'Extern')),
      },
    ],
  },
  {
    path: `/seeds_varieties`,
    component: lazy(() => importPage('dashboard', ['SeedsVarieties'])),
  },
  {
    path: `/seed_reception`,
    component: lazy(() => importPage('dashboard', 'SeedReception', 'routes')),
    routes: [
      {
        path: `/seed_reception/income`,
        component: lazy(() =>
          importPage('dashboard', 'SeedReception', 'Income')
        ),
      },
      {
        path: `/seed_reception/discharge`,
        component: lazy(() =>
          importPage('dashboard', 'SeedReception', 'Discharge')
        ),
      },
    ],
  },
  {
    path: `/rates_seeds`,
    component: lazy(() => importPage('dashboard', ['RatesSeeds'])),
  },
  {
    path: `/programing_conditioning`,
    component: lazy(() => importPage('dashboard', ['ProgramingConditioning'])),
  },
  {
    path: `/sampling_seeds`,
    component: lazy(() => importPage('dashboard', ['SamplingSeeds'])),
  },
];
