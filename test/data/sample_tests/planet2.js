/**
 *  @venus-library    mocha
 *  @venus-template   default
 *  @venus-include    parse_comments.js
 *  @venus-include    foo.js
 */

var javascript = true;

describe('second test', function() {
  it('should work', function() {
    '2'.should.eql('1');
  });
});
