const api_key = 'key-e4db0a9cbeb6b642e687f9aa47a958fc';
const DOMAIN = 'sandboxc2ed28612199472288e2556ee43f3e58.mailgun.org';
const mailgun = require('mailgun-js')({apiKey: api_key, domain: DOMAIN});

function sendMail(recipientAddress, subject, text){
	const data = {
		from: 'ShopItMe <resetpassword@shopitme.com>',
		to: recipientAddress,
		subject: subject,
		text: text
	};

	mailgun.messages().send(data, function (error, body) {
		if(error) {
			console.log(error)
		}
	console.log('this the mail',body);
	})
}
module.exports.sendMail = sendMail;