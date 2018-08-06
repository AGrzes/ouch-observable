const {all} = require('./src/all')
const {view} = require('./src/view')
const {merge} = require('./src/merge')
const {sink} = require('./src/sink')
const override = require('./src/override')
const skip = require('./src/skip')
const assign = require('./src/assign')

class Ouch {
  constructor (db) {
    this.db = db
  }
  sink () {
    return sink(this.db)
  }
  merge (f) {
    return merge(this.db, f)
  }
  all (options) {
    return all(this.db, options)
  }
  view (name, options) {
    return view(this.db, name, options)
  }
}
module.exports = {
  Ouch,
  override,
  skip,
  assign
}
