/**
 * DatacenterController
 *
 * @description :: Server-side logic for managing Datacenters
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
  'new': function(req,res){
    res.view();    
  },

  create: function(req, res) {

    var paramObj = {

      dCid: req.param('dCid'),

      aDcid: req.param('aDcid'),

      component: req.param('component'),

      dataCenterName: req.param('dataCenterName'),

      grossFloorArea: req.param('grossFloorArea'),

      totalCustomerFloorArea: req.param('totalCustomerFloorArea'),

      annualCostSq: req.param('annualCostSq'),

      fte: req.param('fte'),

      fteCost: req.param('fteCost'),

      totalPowerCapacity: req.param('totalPowerCapacity'),

      totalPowerCapacityIt: req.param('totalPowerCapacityIt'),

      avgElectricityUsage: req.param('avgElectricityUsage'),

      avgItElectricityUsage: req.param('avgItElectricityUsage'),

      costPerKwh: req.param('costPerKwh'),

      rackCount: req.param('rackCount'),

      ibmMainframes: req.param('ibmMainframes'),

      otherMainframes: req.param('otherMainframes'),

      totalWindowsServers: req.param('totalWindowsServers'),

      totalUnixServers: req.param('totalUnixServers'),

      totalLinuxServers: req.param('totalLinuxServers'),

      totalHPCNodes: req.param('totalHPCNodes'),

      otherServers: req.param('otherServers'),

      totalVirtualHosts: req.param('totalVirtualHosts'),

      totalVirtualOS: req.param('totalVirtualOS'),

      totalStorage: req.param('totalStorage'),

      usedStorage: req.param('usedStorage'),

      totalFloorEliminated: req.param('totalFloorEliminated'),

      totalDecomissionedPhysicalServers: req.param('totalDecomissionedPhysicalServers'),

      totalServersMoved: req.param('totalServersMoved'),

      overallFTEreduction: req.param('overallFTEreduction'),

      year: req.param('year'),

      quarter: req.param('quarter'),

    }

    // Create a User with the params sent from 
    // the sign-up form --> new.ejs
    Datacenter.create(paramObj, function datacenterCreated(err, datacenter) {

      if (err) {
        console.log(err);
        req.session.flash = {
          err: err
        }
        return res.redirect('/datacenter/new');
      }

      // res.json(datacenter);
      res.redirect('/datacenter/show/' + datacenter.id);

    });
  },

  show: function(req, res, next) {
    Datacenter.findOne(req.param('id'), function foundDatacenter(err, datacenter) {
      if (err) return next(err);
      if (!datacenter) return next();

      // res.json(datacenter);
      res.view({
        datacenter: datacenter
      });
    });
  },

  index: function(req, res, next) {
    Datacenter.find(function foundDatacenters(err, datacenters) {
      if (err) return next(err);
      
      res.view({
        datacenters: datacenters
      });
    });
  },

  edit: function(req, res, next) {

    Datacenter.findOne(req.param('id'), function foundDatacenter(err, datacenter) {
      if (err) return next(err);
      if (!datacenter) return next('datacenter doesn\'t exist.');

      res.view({
        datacenter: datacenter
      });
    });
  },

  update: function(req, res, next) {

    var paramObj = {

      dCid: req.param('dCid'),

      aDcid: req.param('aDcid'),

      component: req.param('component'),

      dataCenterName: req.param('dataCenterName'),

      grossFloorArea: req.param('grossFloorArea'),

      totalCustomerFloorArea: req.param('totalCustomerFloorArea'),

      annualCostSq: req.param('annualCostSq'),

      fte: req.param('fte'),

      fteCost: req.param('fteCost'),

      totalPowerCapacity: req.param('totalPowerCapacity'),

      totalPowerCapacityIt: req.param('totalPowerCapacityIt'),

      avgElectricityUsage: req.param('avgElectricityUsage'),

      avgItElectricityUsage: req.param('avgItElectricityUsage'),

      costPerKwh: req.param('costPerKwh'),

      rackCount: req.param('rackCount'),

      ibmMainframes: req.param('ibmMainframes'),

      otherMainframes: req.param('otherMainframes'),

      totalWindowsServers: req.param('totalWindowsServers'),

      totalUnixServers: req.param('totalUnixServers'),

      totalLinuxServers: req.param('totalLinuxServers'),

      totalHPCNodes: req.param('totalHPCNodes'),

      otherServers: req.param('otherServers'),

      totalVirtualHosts: req.param('totalVirtualHosts'),

      totalVirtualOS: req.param('totalVirtualOS'),

      totalStorage: req.param('totalStorage'),

      usedStorage: req.param('usedStorage'),

      totalFloorEliminated: req.param('totalFloorEliminated'),

      totalDecomissionedPhysicalServers: req.param('totalDecomissionedPhysicalServers'),

      totalServersMoved: req.param('totalServersMoved'),

      overallFTEreduction: req.param('overallFTEreduction'),

      year: req.param('year'),

      quarter: req.param('quarter'),

    }

    Datacenter.update(req.param('id'), paramObj, function datacenterUpdated(err) {
      if (err) {
        console.log(err);

        req.session.flash = {
          err: err
        }

        return res.redirect('/datacenter/edit/' + req.param('id'));
      }

      res.redirect('/datacenter/show/' + req.param('id'));
    });
  },

  destroy: function(req, res, next) {

    Datacenter.findOne(req.param('id'), function foundDatacenter(err, datacenter) {
      if (err) return next(err);

      if (!datacenter) return next('Datacenter doesn\'t exist.');

      Datacenter.destroy(req.param('id'), function datacenterDestroyed(err) {
        if (err) return next(err);
    });        

      res.redirect('/datacenter');

    });
  }
 

};

