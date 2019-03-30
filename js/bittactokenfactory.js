const bittacTokenFactoryAbi = require('../build/bittacToken.sol').bittacTokenFactoryAbi;
const bittacTokenFactoryByteCode = require('../build/bittacToken.sol').bittacTokenFactoryByteCode;
const generateClass = require('eth-contract-class').default;

module.exports = generateClass(bittacTokenFactoryAbi, bittacTokenFactoryByteCode);
