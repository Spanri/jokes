import Vue from 'vue'
import Router from 'vue-router'
import Block from '@/components/Block'
import Profile from '@/components/Profile'
import MainPage from '@/components/MainPage'
import News from '@/components/News'
import Tasks from '@/components/Tasks'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			component: Block,
			children: [
				{
					path: '/',
					name: 'Main',
					redirect: './main'
				},
				{
					path: '/main',
					name: 'main2',
					component: MainPage
				},
				{
					path: '/news',
					name: 'News',
					component: News
				},
				{
					path: '/tasks',
					name: 'Tasks',
					component: Tasks
				}
			]
		},
		{
			path: '/profile',
			name: 'Profile',
			component: Profile
		},
	]
})
