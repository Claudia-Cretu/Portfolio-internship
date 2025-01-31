import { ServerRoute, RenderMode } from '@angular/ssr';
import { routes } from './app.routes';

export const serverRoutes: ServerRoute[] = routes
  .filter((route): route is ServerRoute => typeof route.path === 'string')
  .map(route => ({
    ...route,
    renderMode: RenderMode.Server
  }));
