const debug = require('debug')('ouch-rx.sink')
class Sink {
  constructor(db){
    this.db = db
  }
  next(document){
    return this.db.put(document).catch(debug)
  }
}

module.exports.Sink = Sink
