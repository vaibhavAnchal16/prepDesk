import Vue from 'vue';
import Router from 'vue-router';
import Report from '@/components/Report';
import SectionalReport from '@/components/SectionalReport';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/report',
      name: 'Report',
      component: Report,
    },
    {
      path: '/sectional_report',
      name: 'SectionalReport',
      component: SectionalReport,
    },
  ],
});
