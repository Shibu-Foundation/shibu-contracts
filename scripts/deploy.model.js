const path = require('path');
const fs = require('fs');

function DeployModel() {

  let self = this;
  this.contractShibuAddress = null;

  this.toJsonFile = function toJsonFile() {
    fs.writeFileSync(path.join('./', 'contract-shibu-address.json'), JSON.stringify({
      contractShibuAddress: self.Shibu.address,
    }
    ))
  }
}

module.exports = { DeployModel: DeployModel }
