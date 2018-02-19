// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'

import '@p/Styles.scss'
import '@p/All.scss'
import {
  Card,
  CardText,
  CardTitle
} from 'react-md'

import initDB from '@/db'
import { collectionName } from '@/config'

class Detail extends Component {
  constructor (props) {
    super(props)
    this.state = {
      resultIDs: []
    }
  }

  _handleFieldChange = (text, element) => {
    const name = element.target.name
    this.setState({
      [name]: text
    })
  }

  _getCustomerDetails = async () => {
    try {
      const db = await initDB()
      const transaction = db.transaction([collectionName], 'readwrite')
      const objectStore = transaction.objectStore(collectionName)

      const storeCursor = objectStore.openCursor()

      storeCursor.onsuccess = (event) => {
        const cursor = event.target.result
        if (cursor) {
          this._displayCustomerIDs(cursor)
          cursor.continue()
        }
      }
    } catch (e) {
      alert('Error Occured. Check console for details')
      console.log(`Error Occured: ${e}`)
    }
  }

  _displayCustomerIDs = (dbResult) => {
    const id = dbResult.value.compId
    this.setState({
      resultIDs: this.state.resultIDs.concat(
        <p key={id} className="result-para">
          {id}
        </p>
      )
    })
  }

  componentDidMount () {
    this._getCustomerDetails()
  }

  render () {
    return (
      <div className="md-grid md-text-container">
        <h2 className="md-cell md-cell--12">
          All Customer IDs List
        </h2>

        {
          this.state.resultIDs &&
          <Card className="md-cell card" className="result-card" >
            <CardTitle title="Result" />
            <CardText>
              {this.state.resultIDs}
            </CardText>
          </Card>
        }
      </div>
    )
  }
}

export default Detail
