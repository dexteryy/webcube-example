/* eslint max-nested-callbacks: 0 */

import { expect } from 'chai';
import Nightmare from 'nightmare';
// import Chance from 'chance';
import * as util from 'webcube/utils';

describe('example-app', function () {

  this.timeout(60000);
  const rootUrl = util.getUrlRoot();
  const url = `${rootUrl}/example-app/tests/index.html`;

  describe('Start page', function () {

    it('should be mounted', function (done) {
      if (util.isProductionEnv) {
        this.skip();
        return;
      }
      const nightmare = Nightmare({
        show: false,
      });
      nightmare.goto(url).evaluate(function (done) {
        window._runApp(() => {
          const n = document.querySelectorAll('#exampleAppRoot').length;
          done(null, n);
        });
      }).end().then(result => {
        expect(result).to.be.equal(1);
        done();
      }).catch(done);
    });

  });

});
