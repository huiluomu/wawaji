import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import VueJsonp from 'vue-jsonp'
import 'element-ui/lib/theme-chalk/index.css'

import all from '../../../components/all/all.vue'
import sale from '../../../components/sale/sale.vue'

import persion from '../../../components/persion/persion.vue';
import myBaby from '../../../components/my-baby/myBaby.vue';
import FetchingRecords from '../../../components/my-baby/babyAll/FetchingRecords.vue';
import NoDistribution from '../../../components/my-baby/babyAll/NoDistribution.vue';
import distributionS from '../../../components/my-baby/babyAll/distributionS.vue';
import babyAll from '../../../components/my-baby/babyAll/babyAll.vue';
import Application from '../../../components/my-baby/babyAll/Application.vue';

import myMoney from '../../../components/my-money/myMoney.vue'

import messageCenter from '../../../components/message_center/messageCenter .vue'

import setting from '../../../components/setting/setting.vue'

Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(VueJsonp)

export default new VueRouter({
  linkActiveClass: 'active',
  routes: [
    {
      path:'/',
      redirect: '/all'
    },
    {
      path:'/all',
      component: all
    },
    {
      path:'/sale',
      component: sale
    },
    {
      path: '/persion',
      component: persion,
      children:[
        {
          path: '/persion/myBaby',
          component: myBaby,
          children:[
            // {
            //   path: '/',
            //   redirect: '/persion/myBaby/babyAll'
            // },
            {
              path: '/persion/myBaby/FetchingRecords',
              component: FetchingRecords
            },
            {
              path: '/persion/myBaby/NoDistribution',
              component: NoDistribution
            },
            {
              path: '/persion/myBaby/distributionS',
              component: distributionS
            },
            {
              path: '/persion/myBaby/babyAll',
              component: babyAll
            },
            {
              path: '/persion/myBaby/Application',
              component: Application
            }

          ]
        },
        {
          path: '/persion/myMoney',
          component: myMoney
        },
        {
          path: '/persion/messageCenter',
          component: messageCenter
        },
        {
          path: '/persion/setting',
          component: setting
        }
      ]
    }
  ]
});
