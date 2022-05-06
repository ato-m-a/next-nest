import { Routes } from 'nest-router';

/* modules */
import { ApiModule } from './api/api.module';
import { AuthModule } from './api/auth/auth.module';
import { MenuModule } from './api/menu/menu.module';

export const routes: Routes = [
  {
    path: '/api',
    module: ApiModule,
    children: [
      {
        path: '/auth',
        module: AuthModule
      },
      {
        path: '/menu',
        module: MenuModule
      }
    ]
  }
]