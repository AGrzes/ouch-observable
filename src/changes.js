const rx = require('rxjs')
module.exports.changes = (db, options) => rx.Observable.create((observer) => {
  db.changes(options).on('change', (row) => {
    observer.next(row)
  })
    .on('complete', () => observer.complete())
    .on('error', (error) => observer.error(error))
})
