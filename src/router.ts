import { createRouter, createWebHistory } from 'vue-router'
import HowToPlay from './views/HowToPlay.vue'
import GameView from './views/GameView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'game',
      component: GameView,
    },
    {
      path: '/how-to-play',
      name: 'how-to-play',
      component: HowToPlay,
    },
  ],
})

export default router
