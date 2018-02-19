// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import WebFontLoader from 'webfontloader'

import '@c/App.scss'
import routesList from '@c/routesList'

import NavigationDrawer from 'react-md/lib/NavigationDrawers'
import NavLink from '@c/NavLink'

WebFontLoader.load({
  google: {
    families: ['Roboto:300,400,500,700', 'Material Icons']
  }
})

const Routes = () => (
  <Route render={({ location }) => (
    <NavigationDrawer
      drawerTitle="Navigation"
      toolbarTitle="SellMore Customer Management"
      navItems={routesList.map(props => <NavLink {...props} key={props.to} />)}
    >
      <Switch key={location.key}>
        {
          routesList
            .map(props => <Route {...props} key={props.to} />)
        }
      </Switch>
    </NavigationDrawer>
  )} />
)

export default Routes
