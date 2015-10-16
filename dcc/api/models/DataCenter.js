/**
* Datacenter.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    dCid : { type: 'string' },

    aDcid : { type: 'string' },

    component : { type: 'string' },

    dataCenterName : { type: 'string' },

    grossFloorArea : { type: 'string' },

    totalCustomerFloorArea : { type: 'string' },

    annualCostSq : { type: 'string' },

    fte : { type: 'string' },

    fteCost : { type: 'string' },

    totalPowerCapacity : { type: 'string' },

    totalPowerCapacityIt : { type: 'string' },

    avgElectricityUsage : { type: 'string' },

    avgItElectricityUsage : { type: 'string' },

    costPerKwh : { type: 'string' },

    rackCount : { type: 'string' },

    ibmMainframes : { type: 'string' },

    otherMainframes : { type: 'string' },

    totalWindowsServers : { type: 'string' },

    totalUnixServers : { type: 'string' },

    totalLinuxServers : { type: 'string' },

    totalHPCNodes : { type: 'string' },

    otherServers : { type: 'string' },

    totalVirtualHosts : { type: 'string' },

    totalVirtualOS : { type: 'string' },

    totalStorage : { type: 'string' },

    usedStorage : { type: 'string' },

    totalFloorEliminated : { type: 'string' },

    totalDecomissionedPhysicalServers : { type: 'string' },

    totalServersMoved : { type: 'string' },

    overallFTEreduction : { type: 'string' },

    year : { type: 'string' },

    quarter : { type: 'string' }
  }
};

