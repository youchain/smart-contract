var myTokenFactory = eth.contract([{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"initialSupply","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]);
var myTokenCompiled = "0x" + "608060405234801561001057600080fd5b5060405160208061033583398101806040528101908080519060200190929190505050806000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550506102af806100866000396000f30060806040526004361061004c576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806370a0823114610051578063a9059cbb146100a8575b600080fd5b34801561005d57600080fd5b50610092600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506100f5565b6040518082815260200191505060405180910390f35b3480156100b457600080fd5b506100f3600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061010d565b005b60006020528060005260406000206000915090505481565b806000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015151561015a57600080fd5b6000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205401101515156101e757600080fd5b806000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540392505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254019250508190555050505600a165627a7a7230582022a31570aa3d712844748600155faadefb47615a3e034a6c22d581b6fed72e290029";

var _initialSupply = 21000000;

var myToken = myTokenFactory.new(_initialSupply,{from:eth.accounts[0],data:myTokenCompiled,gas: '0x47E7C4'}, function(e, contract){
    if(e) {
      console.error(e); // If something goes wrong, at least we'll know.
      return;
    }

    if(!contract.address) {
      console.log("Contract transaction send: TransactionHash: " + contract.transactionHash + " waiting to be mined...");

    } else {
      console.log("Contract mined! Address: " + contract.address);
      console.log(contract);
    }
});