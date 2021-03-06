/*******************************************************************************
 * UF - IE validator specification test file for UF state
 * *****************************************************************************
 * technical specification: ??
 * example: '??'
 ******************************************************************************/

let assert = require('assert');
let ufFn = require('../src/uf');

/**
 * the ie variable representing a valid I.E. for this state function and will be
 * pass if the function './src/uf.js' is correct as technical specification.
 * It will fail if the functions is wrong or the ie number is incompatible with state
 */
let ie = '??';

describe(`Checking the I.E. number '${ie}'...`, () => {
  it('ac', () => {
    assert.equal(ufFn(ie), ie,
        `Sorry... the I.E. number '${ie}' for the 'UF' state is not valid! :(`);
  });
});