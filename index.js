module.exports = (req) => {
    return req
        .on('error', log.bind(null, 'CLIENT REQUEST ERROR EVENT'))
        .on('abort', log.bind(null, 'CLIENT REQUEST ABORT EVENT'))
        .on('aborted', log.bind(null, 'CLIENT REQUEST ABORTED EVENT'))
        .on('connect', log.bind(null, 'CLIENT REQUEST CONNECT EVENT'))
        .on('continue', log.bind(null, 'CLIENT REQUEST CONTINUE EVENT'))
        .on('upgrade', log.bind(null, 'CLIENT REQUEST UPGRADE EVENT'))
        .on('socket', socket => {
            log('CLIENT REQUEST SOCKET EVENT')
            socket
                .on('close', log.bind(null, 'CLIENT REQUEST SOCKET CLOSE EVENT'))
                .on('connect', log.bind(null, 'CLIENT REQUEST SOCKET CONNECT EVENT'))
                .on('data', log.bind(null, 'CLIENT REQUEST SOCKET DATA EVENT'))
                .on('drain', log.bind(null, 'CLIENT REQUEST SOCKET DRAIN EVENT'))
                .on('end', log.bind(null, 'CLIENT REQUEST SOCKET END EVENT'))
                .on('error', log.bind(null, 'CLIENT REQUEST SOCKET ERROR EVENT'))
                .on('lookup', log.bind(null, 'CLIENT REQUEST SOCKET LOOKUP EVENT'))
                .on('timeout', log.bind(null, 'CLIENT REQUEST SOCKET TIMEOUT EVENT'))
        })
        .on('response', response => {
            log('CLIENT REQUEST RESPONSE EVENT')
            response
                .on('aborted', log.bind(null, 'CLIENT RESPONSE ABORTED EVENT'))
                .on('close', log.bind(null, 'CLIENT RESPONSE CLOSE EVENT'))

            response.socket
                .on('close', log.bind(null, 'CLIENT RESPONSE SOCKET CLOSE EVENT'))
                .on('connect', log.bind(null, 'CLIENT RESPONSE SOCKET CONNECT EVENT'))
                .on('data', log.bind(null, 'CLIENT RESPONSE SOCKET DATA EVENT'))
                .on('drain', log.bind(null, 'CLIENT RESPONSE SOCKET DRAIN EVENT'))
                .on('end', log.bind(null, 'CLIENT RESPONSE SOCKET END EVENT'))
                .on('error', log.bind(null, 'CLIENT RESPONSE SOCKET ERROR EVENT'))
                .on('lookup', log.bind(null, 'CLIENT RESPONSE SOCKET LOOKUP EVENT'))
                .on('timeout', log.bind(null, 'CLIENT RESPONSE SOCKET TIMEOUT EVENT'))
    });
};

function log (message) {
    console.log(message);
}