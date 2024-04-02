import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('sessions.db')

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS sessionUser (localId TEXT NOT NULL, email TEXT NOT NULL, idToken TEXT NOT NULL)',  // consulta
        [],  // valores pasados a la consulta
        (_, result) => resolve(result),  // si la consulta se resuelve
        (_, result) => reject(result)  // si la consulta se rechaza
      )
    })
  })
  return promise
}

export const insertSession = ({ localId, email, idToken }) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO sessionUser (localId, email, idToken) VALUES ()',
        [localId, email, idToken],
        (_, result) => resolve(result),
        (_, result) => reject(result)
      )
    })
  })
  return promise
}

export const fetchSession = () => { }

export const deleteSession = () => { }

