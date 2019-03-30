const ethConnector = require("ethconnector");
const path = require("path");

ethConnector.compile(
    path.join(__dirname, "../contracts/bittacToken.sol"),
    path.join(__dirname, "../contracts/bittacToken.sol.js"),
    (err) => {
        if (err) {
            console.log(err);
            process.exit(1);
        } else {
            process.exit(0);
        }
    });
