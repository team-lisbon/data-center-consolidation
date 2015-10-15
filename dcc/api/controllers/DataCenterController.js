/**
 * DataCenterController
 *
 * @description :: Server-side logic for managing Datacenters
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getOne: function(req, res) {
		User.find(req.param('id'))
		.then(function(model) {
			res.json(model);
		})
		.fail(function(err) {
			res.send(404);
		});
	}
};
