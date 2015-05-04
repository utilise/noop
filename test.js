var expect = require('chai').expect
  , noop = require('./')

describe('noop', function() {
  it('should do nothing', function() {
    expect(noop(100)).to.not.be.ok
  })
})