module.exports = (req) => {
    return req
        .on('error', log.bind(null, 'REQUEST ERROR EVENT'))
        .on('abort', log.bind(null, 'REQUEST ABORT EVENT'))
        .on('aborted', log.bind(null, 'REQUEST ABORTED EVENT'))
        .on('connect', log.bind(null, 'REQUEST CONNECT EVENT'))
        .on('continue', log.bind(null, 'REQUEST CONTINUE EVENT'))
        .on('upgrade', log.bind(null, 'REQUEST UPGRADE EVENT'))
        .on('socket', socket => {
            log('REQUEST SOCKET EVENT')
            socket
                .on('close', log.bind(null, 'REQUEST SOCKET CLOSE EVENT'))
                .on('connect', log.bind(null, 'REQUEST SOCKET CONNECT EVENT'))
                .on('data', log.bind(null, 'REQUEST SOCKET DATA EVENT'))
                .on('drain', log.bind(null, 'REQUEST SOCKET DRAIN EVENT'))
                .on('end', log.bind(null, 'REQUEST SOCKET END EVENT'))
                .on('error', log.bind(null, 'REQUEST SOCKET ERROR EVENT'))
                .on('lookup', log.bind(null, 'REQUEST SOCKET LOOKUP EVENT'))
                .on('timeout', log.bind(null, 'REQUEST SOCKET TIMEOUT EVENT'))
        })
        .on('response', response => {
            log('REQUEST RESPONSE EVENT')
            response
                .on('aborted', log.bind(null, 'RESPONSE ABORTED EVENT'))
                .on('close', log.bind(null, 'RESPONSE CLOSE EVENT'))

            response.socket
                .on('close', log.bind(null, 'RESPONSE SOCKET CLOSE EVENT'))
                .on('connect', log.bind(null, 'RESPONSE SOCKET CONNECT EVENT'))
                .on('data', log.bind(null, 'RESPONSE SOCKET DATA EVENT'))
                .on('drain', log.bind(null, 'RESPONSE SOCKET DRAIN EVENT'))
                .on('end', log.bind(null, 'RESPONSE SOCKET END EVENT'))
                .on('error', log.bind(null, 'RESPONSE SOCKET ERROR EVENT'))
                .on('lookup', log.bind(null, 'RESPONSE SOCKET LOOKUP EVENT'))
                .on('timeout', log.bind(null, 'RESPONSE SOCKET TIMEOUT EVENT'))
    });
};

function log (message) {
    console.log(message);
}