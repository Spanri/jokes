import Vue from 'vue'
import Router from 'vue-router'
import Profile from '@/components/Profile'
import Home from '@/components/Home'
import Random from '@/components/Random'
import Jokes from '@/components/Jokes'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
      path: '/',
      redirect: '/main',
      // component: Home,
    },
    {
      path: '/main',
      name: 'main',
      component: Home
    },
    {
      path: '/random',
      name: 'Random',
      component: Random
    },
    {
      path: '/jokes',
      name: 'Jokes',
      component: Jokes
    },
		{
			path: '/profile',
			name: 'Profile',
			component: Profile
		},
	]
})
