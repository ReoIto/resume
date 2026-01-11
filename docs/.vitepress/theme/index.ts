import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import QiitaArticles from '../components/QiitaArticles.vue'
import '../../../node_modules/devicon/devicon.min.css'
import './index.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('QiitaArticles', QiitaArticles)
  }
} satisfies Theme
