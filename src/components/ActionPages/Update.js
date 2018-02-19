// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'

import '@p/Styles.scss'
import { Button, TextField } from 'react-md'

import initDB from '@/db'
import { collectionName } from '@/config'

/* eslint-disable no-multi-spaces */
const fields = [
  { label: 'Company ID', name: 'compId' },
  { label: 'Company Name', name: 'compName' },
  { label: 'Address', name: 'compAddr' },
  { label: 'City', name: 'compCity' },
  { label: 'Country', name: 'compCountry' },
  { label: 'Postal Code', name: 'compPost' },
  { label: 'Company Contact', name: 'compContact' },
  { label: 'Company Phone', name: 'compPhone' },
  { label: 'Company Email', name: 'compEmail' }
]
/* eslint-enable no-multi-spaces */

class Update extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  _handleFieldChange = (text, element) => {
    const name = element.target.name
    this.setState({
      [name]: text
    })
  }

  _updateCustomer = async () => {
    try {
      const db = await initDB()
      const transaction = db.transaction([collectionName], 'readwrite')
      const objectStore = transaction.objectStore(collectionName)

      const request = objectStore.put(this.state)
      request.onsuccess = (event) => {
        alert('Data has been updated to your database.')
      }
      request.onerror = (event) => {
        alert('Error Occured. Check console for details.')
        console.log(event)
      }
    } catch (e) {
      alert('Error Occured. Check console for details.')
      console.log(`Error Occured: ${e}`)
    }
  }

  render () {
    return (
      <div className="md-grid md-text-container">
        <h2 className="md-cell md-cell--12">
          Update Existing Customer
        </h2>

        {
          fields.map((field, i) =>
            <TextField
              key={`field_${i}`}
              id="floating-center-title"
              {...field}
              lineDirection="center"
              className="md-cell--bottom"
              onChange={this._handleFieldChange}
            />
          )
        }

        <div className="btn-group">
          <Button
            flat
            primary
            swapTheming
            onClick={this._updateCustomer}
          >
            Update Customer
          </Button>
        </div>
      </div>
    )
  }
}

export default Update
