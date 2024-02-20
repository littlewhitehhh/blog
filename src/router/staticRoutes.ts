/*
 * @Author: aky
 * @Date: 2024-02-20 15:14:33
 * @Last Modified by:   aky
 * @Last Modified time: 2024-02-20 15:14:33
 */

import type { RouteRecordRaw } from 'vue-router';

export const staticRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/homePage',
  },
  {
    path: '/homePage',
    name: 'homePage',
    component: () => import('@v/homepage/index.vue'),
  },
];
