import initDB from '@/db'
import { collectionName } from '@/config'

let hasErrorOccured = false

function addData (objectStore, obj) {
  try {
    const request = objectStore.add(obj)

    request.onerror = (event) => {
      const errorObj = event.target.transaction.error || event.target.error
      const errorMsg = errorObj
      if (
        errorMsg &&
        errorMsg === 'Key already exists in the object store.'
      ) {
        if (!hasErrorOccured) {
          alert('There was an error inserting batch data into DB. Check console for details.')
          hasErrorOccured = true
        }
        console.log(event)
      }
    }
  } catch (e) {
    console.log(`Error Occured: ${e}`)
  }
}

async function batchLoad (objects) {
  try {
    const db = await initDB()
    const transaction = db.transaction(collectionName, 'readwrite')
    const objectStore = transaction.objectStore(collectionName)
    objects.forEach(o => addData(objectStore, o))
  } catch (e) {
    alert('Error Occured. Check console for details.')
    console.log(`Error Occured: ${e}`)
  }
}

export default batchLoad
