/**
 * AccountsController
 *
 * @description :: Server-side logic for managing Accounts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	deposit (req, res) {
		var id = req.params.id;
		var amount = req.param('amount');
		if (!id || !amount)
			return res.badRequest('Parameter is missing..');

		if (isNaN(amount) || amount % 1 !== 0)
			return res.badRequest('Amount should be an integer type..');

		Accounts.findOne(id).exec(function (err, account) {
			if (err)
				return res.notFound('Your account does not exist.');

			account.deposit = account.deposit + Number(amount);
			account.save();

			return res.ok(account);
		});
	}
};
