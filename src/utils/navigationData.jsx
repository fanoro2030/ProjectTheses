import {
  Home as HomeIcon,
  Info as InfoIcon,
  LocalFlorist as LocalFloristIcon,
  Build as BuildIcon,
  ContactMail as ContactMailIcon,
  LockOpen as LockOpenIcon,
} from '@material-ui/icons';

export const homeNavigation = [
  {
    name: 'Presentación',
    url: '/presentation',
  },
  {
    name: 'Sobre Nosotros',
    url: '/about-us',
  },
  {
    name: 'Nuestras Semillas',
    url: '/seeds-ours',

    subRoutes: [
      {
        name: 'Catálogo',
        url: '/seeds-ours/catalogue',
      },
      {
        name: 'Solagro Semillas',
        url: '/seeds-ours/solagro-seeds',
      },
    ],
  },
  {
    name: 'Nuestros Servicios',
    url: '/nuestros-servicios',

    subRoutes: [
      {
        name: 'Asesoramiento',
        url: '/asesoramiento',
      },
      {
        name: 'Limpieza y Selección',
        url: '/limpieza-y-seleccion',
      },
    ],
  },
  {
    name: 'Contacto',
    url: '/contacto',
  },
  {
    name: 'Login',
    url: '/login',
  },
];

/*
export const mainNavigation = [
  { name: 'Dashboard', icon: 'dashboard', url: '/dashboard' },
  {
    name: 'Gestion de Permisos',
    icon: 'vpn_key',
    url: '/permisos',
    routes: [
      { name: 'Registrar Permiso', url: '/registrar-permiso', icon: 'add_box' },
      { name: 'Editar Permiso', url: '/editar-permiso/:id', icon: 'edit' },
      {
        name: 'Desactivar Permiso',
        url: '/desactivar-permiso/:id',
        icon: 'remove_circle',
      },
      {
        name: 'Reportes de Permisos',
        url: '/reportes-permisos',
        icon: 'description',
        routes: [
          {
            name: 'Lista de Permisos Activos',
            url: '/permisos-activos',
            icon: 'check_circle',
          },
          {
            name: 'Lista de Permisos Inactivos',
            url: '/permisos-inactivos',
            icon: 'cancel',
          },
        ],
      },
      {
        name: 'Activar Permiso',
        url: '/activar-permiso/:id',
        icon: 'add_circle',
      },
    ],
  },
  {
    name: 'Gestion de Roles',
    icon: 'people',
    url: '/roles',
    routes: [
      {
        name: 'Registrar Rol',
        url: '/registrar-rol',
        icon: 'add_box',
      },
      {
        name: 'Editar Rol',
        url: '/editar-rol/:id',
        icon: 'edit',
      },
      {
        name: 'Desactivar Rol',
        url: '/desactivar-rol/:id',
        icon: 'remove_circle',
      },
      {
        name: 'Reportes de Roles',
        url: '/reportes-roles',
        icon: 'description',
        routes: [
          {
            name: 'Lista de Roles Activos',
            url: '/roles-activos',
            icon: 'check_circle',
          },
          {
            name: 'Lista de Roles Inactivos',
            url: '/roles-inactivos',
            icon: 'cancel',
          },
        ],
      },
      {
        name: 'Activar Rol',
        url: '/activar-rol/:id',
        icon: 'add_circle',
      },
    ],
  },

  {
    name: 'Gestion de Usuarios',
    icon: 'person',
    url: '/usuarios',
    routes: [
      {
        name: 'Registrar Usuario',
        url: '/registrar-usuario',
        icon: 'add_box',
      },
      {
        name: 'Editar Usuario',
        url: '/editar-usuario/:id',
        icon: 'edit',
      },
      {
        name: 'Desactivar Usuario',
        url: '/desactivar-usuario/:id',
        icon: 'remove_circle',
      },
      {
        name: 'Reportes de Usuarios',
        url: '/reportes-usuarios',
        icon: 'description',
        routes: [
          {
            name: 'Lista de Usuarios Activos',
            url: '/usuarios-activos',
            icon: 'check_circle',
          },
          {
            name: 'Lista de Usuarios Inactivos',
            url: '/usuarios-inactivos',
            icon: 'cancel',
          },
        ],
      },
      {
        name: 'Cambiar Contraseña',
        url: '/cambiar-contraseña/:id',
        icon: 'vpn_key',
      },
    ],
  },
];
*/

export const mainNavigation = [
  {
    name: 'Perfil',
    icon: HomeIcon,
    url: `/perfil`,
  },
  {
    name: 'Principal',
    icon: HomeIcon,
    url: `/major`,
  },
  {
    name: 'Productor',
    icon: HomeIcon,
    url: `/producers`,
    isMenu: true, // nueva propiedad
    subRoutes: [
      {
        name: 'Semillerista',
        icon: HomeIcon,
        url: `/producers/seedling`,
      },
      {
        name: 'Externo',
        icon: HomeIcon,
        url: `/producers/extern`,
      },
    ],
  },

  {
    name: 'Variedades',
    icon: HomeIcon,
    url: `/seeds_varieties`,
  },
  {
    name: 'Recepción',
    icon: HomeIcon,
    url: `/seed_repection`,
    isMenu: true, // nueva propiedad
    subRoutes: [
      {
        name: 'Ingresos',
        icon: HomeIcon,
        url: `/seed_reception/income`,
      },
      {
        name: 'Egresos',
        icon: HomeIcon,
        url: `/seed_reception/discharge`,
      },
    ],
  },
  {
    name: 'Tarifas',
    icon: HomeIcon,
    url: `/rates_seeds`,
  },
  {
    name: 'Programaciones',
    icon: HomeIcon,
    url: `/programing_conditioning`,
  },
  {
    name: 'Muestreo',
    icon: HomeIcon,
    url: `/sampling_seeds`,
  },
];
