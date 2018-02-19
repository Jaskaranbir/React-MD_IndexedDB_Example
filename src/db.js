import { collectionName, dbName, dbVersion } from '@/config'

function initDB () {
  console.log(collectionName)
  const request = window.indexedDB.open(dbName, dbVersion)
  let db

  return new Promise((resolve, reject) => {
    request.onupgradeneeded = (event) => {
      db = event.target.result
      console.log('Onupgradeneeded fired...')

      const obj = db.createObjectStore(
        collectionName,
        { keyPath: 'compId' }
      )

      obj.createIndex('name', 'compName', { unique: true })
    }

    request.onsuccess = (event) => {
      db = event.target.result
      console.log('Onsuccess fired...')
      resolve(db)
    }

    request.onerror = (event) => {
      alert('Unknown Error occurred in DB. Check console for details.')
      console.log(event)
      reject(new Error({ event, type: 'error' }))
    }

    request.onblocked = (event) => {
      alert('DB connection blocked. Check console for details.')
      console.log(event)
      reject(new Error({ event, type: 'blocked' }))
    }
  })
}

export default initDB
