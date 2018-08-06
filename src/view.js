const rx = require('rxjs')
module.exports.view = (db, name, options) => rx.Observable.create((observer) => {
  db.query(name, {...options, include_docs: true}).then((documents) => {
    documents.rows.forEach((row) => observer.next(row.doc))
    observer.complete()
  }).catch((err) => observer.error(err))
})
