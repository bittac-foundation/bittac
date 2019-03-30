const bittacTokenAbi = require('../build/bittacToken.sol').bittacTokenAbi;
const bittacTokenByteCode = require('../build/bittacToken.sol').bittacTokenByteCode;
const generateClass = require('eth-contract-class').default;

module.exports = generateClass(bittacTokenAbi, bittacTokenByteCode);
