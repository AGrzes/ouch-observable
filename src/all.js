const rx = require('rxjs')
module.exports.all = (db, options) => rx.Observable.create((observer) => {
  db.allDocs({...options, include_docs: true}).then((documents) => {
    documents.rows.forEach((row) => observer.next(row.doc))
    observer.complete()
  }).catch((err) => observer.error(err))
})
