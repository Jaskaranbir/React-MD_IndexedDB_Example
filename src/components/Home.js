// eslint-disable-next-line no-unused-vars
import React from 'react'

import './Home.scss'
import { Link as RouterLink } from 'react-router-dom'
import { Card } from 'react-md'

import routesList from '@c/routesList'

const Home = () => (
  <div className="home">
    <div className="home-header">
      <h2>Welcome to Dashboard</h2>
    </div>

    <div className="md-grid md-text-container card">
      {
        routesList
          .slice(1) // Remove Home route
          .map((route, i) => (
            <Card key={`card_${i}`} className="md-cell card">
              <RouterLink to={route.to} className="link">
                <div className="cell-item">
                  <div className="cell-item-text">{route.description}</div>
                </div>
              </RouterLink>
            </Card>
          ))
      }
    </div>
  </div>
)

export default Home
