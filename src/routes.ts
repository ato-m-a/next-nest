import { Routes } from 'nest-router';

/* modules */
import { ApiModule } from './api/api.module';
import { AuthModule } from './api/auth/auth.module';
import { MenuModule } from './api/menu/menu.module';
import { PageModule } from './api/page/page.module';

import { ClientModule } from './client/client.module';
import { AdminModule } from './client/admin/admin.module'
import { CategoryModule } from './client/admin/category/category.module';

/* api route prefix */
export const routes: Routes = [
  // API
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
  },
  // Client
  {
    path: '/',
    module: ClientModule,
    children: [
      {
        path: '/admin',
        module: AdminModule,
        children: [
          {
            path: '/category',
            module: CategoryModule,
            children: [

            ]
          }
        ]
      }
    ]
  }
]