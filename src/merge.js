const {flatMap} = require('rxjs/operators')
const {isEqual} = require('lodash')
module.exports.merge = (db, f) => (source) => source.pipe(flatMap((object) => {
  const document = f(object)
  return db.put(document).catch((error) => {
    if (error.name === 'conflict') {
      return db.get(document._id).then((existing) => {
        const merged = f(object, existing)
        return merged && !isEqual(merged, existing) ? db.put(merged) : Promise.resolve(existing)
      })
    } else {
      throw error
    }
  })
}))
