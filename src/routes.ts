import { Routes } from 'nest-router';

/* modules */
import { ApiModule } from './api/api.module';
import { AuthModule } from './api/auth/auth.module';
import { MenuModule } from './api/menu/menu.module';
import { PageModule } from './api/page/page.module';

/* api route prefix */
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
      },
      {
        path: '/page',
        module: PageModule
      }
    ]
  }
]