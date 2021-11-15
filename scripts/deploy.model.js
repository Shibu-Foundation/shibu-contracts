const path = require('path');
const fs = require('fs');

function DeployModel() {

  let self = this;
  this.ccoinswapAutoCompound = null;

  this.toJsonFile = function toJsonFile() {
    fs.writeFileSync( path.join('./', 'config-farm-factory.json'), JSON.stringify({
      coinswapAutoCompound: self.communityReward.address,
      }
    ))
  }
}

module.exports = { DeployModel: DeployModel }
