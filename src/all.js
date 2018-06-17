const rx = require('rxjs')
const _ = require('lodash')
module.exports.all = (db, options) => rx.Observable.create((observer) => {
  db.allDocs(_.extend({}, options, {include_docs: true})).then((documents) => {
    documents.rows.forEach((row) => observer.next(row.doc))
    observer.complete()
  }).catch((err) => observer.error(err))
})
