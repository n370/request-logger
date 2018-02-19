const http = require('http');
const log = require('./index.js');

log(http.request('http://google.com'))
    .on('response', response => {
        response.socket
        .on('close', () => {
            console.log('foo');
        });
    })
    .end();
