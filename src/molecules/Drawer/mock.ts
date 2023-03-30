import { theme } from '@/styles/theme';

export default {
  state: {
    drawerIsOpen: false,
    theme: theme,
  },
  menus: [
    { title: 'Inicio', newtab: false, href: '/#header' },
    { title: 'Sobre', newtab: false, href: '/#hero' },
    { title: 'Categoria', newtab: false, href: '/#categoria' },
    { title: 'Posts', newtab: false, href: '/#posts' },
  ],
} as const;
