const rx = require('rxjs')
const _ = require('lodash')
module.exports.view = (db, name, options) => rx.Observable.create((observer) => {
  db.query(name, _.extend({}, options, {include_docs: true})).then((documents) => {
    documents.rows.forEach((row) => observer.next(row.doc))
    observer.complete()
  }).catch((err) => observer.error(err))
})
