// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'

import '@p/Styles.scss'
import { Button, TextField } from 'react-md'

import initDB from '@/db'
import { collectionName } from '@/config'

class Delete extends Component {
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

  _deleteCustomer = async () => {
    try {
      const db = await initDB()
      const transaction = db.transaction([collectionName], 'readwrite')
      const objectStore = transaction.objectStore(collectionName)
      const dbIndex = objectStore.index('name')

      const keyCursor = dbIndex.openKeyCursor(
        IDBKeyRange.only(this.state.compName)
      )
      keyCursor.onsuccess = () => {
        const cursor = keyCursor.result
        if (cursor) {
          objectStore.delete(cursor.primaryKey)
          cursor.continue()
        }
        alert('Customer Deleted Successfully')
      }
    } catch (e) {
      alert('Error Occured. Check console for details')
      console.log(`Error Occured: ${e}`)
    }
  }

  render () {
    return (
      <div className="md-grid md-text-container">
        <h2 className="md-cell md-cell--12">
          Delete Existing Customer
        </h2>

        <TextField
          id="floating-center-title"
          label="Company Name"
          lineDirection="center"
          className="md-cell--bottom"
          name="compName"
          onChange={this._handleFieldChange}
          placeholder="Enter Company Name to delete its record"
        />

        <div className="btn-group">
          <Button
            flat
            primary
            swapTheming
            onClick={this._deleteCustomer}
          >
            Delete Record
          </Button>
        </div>
      </div>
    )
  }
}

export default Delete
