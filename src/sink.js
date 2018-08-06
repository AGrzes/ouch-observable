const {flatMap} = require('rxjs/operators')
module.exports.sink = (db) => (source) => source.pipe(flatMap((document) => db.put(document)))
