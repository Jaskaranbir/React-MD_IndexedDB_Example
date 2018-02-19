import Home from '@c/Home'
import Add from '@p/Add'
import All from '@p/All'
import Delete from '@p/Delete'
import Detail from '@p/Detail'
import Update from '@p/Update'
import Support from '@p/Support'

const routes = [
  {
    component: Home,
    exact: true,
    icon: 'home',
    label: 'Home',
    path: '/',
    to: '/'
  },
  {
    component: Add,
    description: 'Add New Customer',
    icon: 'face',
    label: 'Add Customer',
    path: '/add',
    to: '/add'
  },
  {
    component: Update,
    description: 'Update Customer Information',
    icon: 'mode_edit',
    label: 'Update Customer',
    path: '/update',
    to: '/update'
  },
  {
    component: Delete,
    description: 'Delete Existing Customer',
    icon: 'delete',
    label: 'Delete',
    path: '/delete',
    to: '/delete'
  },
  {
    component: All,
    description: 'List All Customer ID',
    icon: 'info_outline',
    label: 'List All IDs',
    path: '/all',
    to: '/all'
  },
  {
    component: Detail,
    description: 'Display Customer Detail Information',
    icon: 'info',
    label: 'Detail Info',
    path: '/detail',
    to: '/detail'
  },
  {
    component: Support,
    description: 'Contact For Help And Support',
    icon: 'forum',
    label: 'Support',
    path: '/support',
    to: '/support'
  }
]

export default routes
