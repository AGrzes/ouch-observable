const expect = require('chai').use(require('sinon-chai')).expect
const sinon = require('sinon')
const {Sink} = require('../src/sink')
const rx = require('rxjs')
describe('Ouch', function () {
  describe('#sink()', function () {
    it('should call put', function (done) {
      var db = {
        put: sinon.spy(() => Promise.resolve(null))
      }
      const subject = new rx.Subject()
      subject.subscribe(new Sink(db))
      subject.subscribe({
        complete() {
          expect(db.put).to.have.been.called
          done()
        }
      })
      rx.of('a').subscribe(subject)
    })
    it('should pass items to put', function (done) {
      var db = {
        put: sinon.spy(() => Promise.resolve(null))
      }
      const subject = new rx.Subject()
      subject.subscribe(new Sink(db))
      subject.subscribe({
        complete() {
          expect(db.put).to.have.been.calledWith('a')
          expect(db.put).to.have.been.calledWith('b')
          done()
        }
      })
      rx.of('a','b').subscribe(subject)
    })
    it('should continue when put failed', function (done) {
      var error = new Error()
      var db = {
        put: sinon.spy(() => Promise.reject(error))
      }
      const subject = new rx.Subject()
      subject.subscribe(new Sink(db))
      subject.subscribe({
        complete() {
          expect(db.put).to.have.been.calledWith('a')
          expect(db.put).to.have.been.calledWith('b')
          done()
        }
      })
      rx.of('a','b').subscribe(subject)
    })
  })
})
