const dotenv = require('dotenv').config();
//ASK NACHO FOR THE .ENV FILE
const mailgun = require('mailgun-js')({apiKey: process.env.MAIL_API_KEY, domain: process.env.DOMAIN});

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
