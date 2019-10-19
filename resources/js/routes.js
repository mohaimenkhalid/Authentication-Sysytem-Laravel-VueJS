
import Home from './components/Home'
import Login from './components/auth/Login'
import Logout from './components/auth/Logout'
import Register from './components/auth/Register'

import Dashboard from './components/pages/Dashboard'

export const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/logout', component: Logout },
  { path: '/register', component: Register },
  { path: '/dashboard', component: Dashboard },
]