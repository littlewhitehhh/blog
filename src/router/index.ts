import { createRouter, createWebHashHistory } from 'vue-router';

import type { RouteRecordRaw } from 'vue-router';
import { staticRoutes } from './staticRoutes';
const routes: RouteRecordRaw[] = [...staticRoutes];

export default createRouter({
  routes,
  history: createWebHashHistory(),

  scrollBehavior: () => {
    return {
      top: 0,
      left: 0,
    };
  },
});
