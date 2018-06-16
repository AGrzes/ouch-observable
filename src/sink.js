const {flatMap} = require ('rxjs/operators')
module.exports.sink = (db, f) => (source) => source.pipe(flatMap((document) =>  db.put(document)))
