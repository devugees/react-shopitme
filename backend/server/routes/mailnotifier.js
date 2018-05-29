const nodemailer = require('nodemailer');

module.exports = function sendMail(recipientAddress, subject, body) {
  var smtpConfig = {
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'devugees.shop@gmail.com',
    pass: 'www123com'
  }
};

var transporter = nodemailer.createTransport(smtpConfig);
var mailOptions = {
  From: '"Shop It Me" <devugees.shop@gmail.com>',
  to: recipientAddress,
  subject: subject,
  text: body,
};

transporter.sendMail(mailOptions, function(err, info) {
	console.log('this the mail info: ',info);
  if(err)
    console.log('error');
});
}