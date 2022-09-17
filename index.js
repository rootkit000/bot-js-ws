const { Client } = require('whatsapp-web.js');

const qrcode = require('qrcode-terminal');

const client = new Client();



client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});
/*

client.on('qr', (qr) => {
    console.log('QR RECEIVED', qr);
});
*/
client.on('ready', () => {
    console.log('Client is ready!');
});

client.initialize();
 



client.on('message', message => {
    if(message.body === 'hola') {
        client.sendMessage(message.from, 'hello wolrd bitch');
    }
});
