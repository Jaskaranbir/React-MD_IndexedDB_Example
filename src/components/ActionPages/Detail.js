// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'

import '@p/Styles.scss'
import '@p/DetailStyles.scss'
import {
  Button,
  Card,
  CardText,
  CardTitle,
  TextField
} from 'react-md'

import initDB from '@/db'
import { collectionName } from '@/config'

class Detail extends Component {
  constructor (props) {
    super(props)
    this.state = {
      resultDetail: ''
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

      const request = objectStore.get(this.state.compName)
      request.onsuccess = (event) => {
        if (request.result) {
          this._displayCustomerDetails(request.result)
        } else {
          this.setState({
            resultDetail: <tr><td>No Data Retrieved</td></tr>
          })
        }
      }
      request.onerror = (event) => {
        this.setState({
          resultDetail: <tr><td>Error Fetching Data</td></tr>
        })
        alert('Error in retrieving data. Check console for more details.')
        console.log(event)
      }
    } catch (e) {
      alert('Error Occured. Check console for details')
      console.log(`Error Occured: ${e}`)
    }
  }

  _displayCustomerDetails = (dbResult) => {
    const keyMap = {
      compAddr: 'Address',
      compCity: 'City',
      compContact: 'Company Contact',
      compCountry: 'Country',
      compEmail: 'Company Email',
      compId: 'Company ID',
      compName: 'Company Name',
      compPhone: 'Company Phone',
      compPost: 'Postal Code '
    }
    const details = Object.keys(dbResult)
      .reduce((str, objKey, index) => {
        str.push(
          <tr key={`result_${index}`}>
            <td className="table-left">{keyMap[objKey]}:</td>
            <td className="table-right">{dbResult[objKey]}</td>
          </tr>
        )
        return str
      }, [])

    this.setState({
      resultDetail: details
    })
  }

  render () {
    return (
      <div className="md-grid md-text-container">
        <h2 className="md-cell md-cell--12">
          Get Customer Details
        </h2>

        <TextField
          id="floating-center-title"
          label="Company Name"
          lineDirection="center"
          className="md-cell--bottom"
          name="compName"
          onChange={this._handleFieldChange}
          placeholder="Enter Company Name to get its Details"
        />

        <div className="btn-group">
          <Button
            flat
            primary
            swapTheming
            onClick={this._getCustomerDetails}
          >
            Get Details
          </Button>
        </div>

        {
          this.state.resultDetail &&
          <Card className="md-cell card" className="result-card" >
            <CardTitle title="Result" className="display-title" />
            <CardText>
              <table>
                <tbody>
                  {this.state.resultDetail}
                </tbody>
              </table>
            </CardText>
          </Card>
        }
      </div>
    )
  }
}

export default Detail
