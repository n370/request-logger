module.exports = (req) => {
    return req
    .on('abort', warn.bind(null, 'REQUEST ABORT EVENT'))
    .on('aborted', warn.bind(null, 'REQUEST ABORTED EVENT'))
    .on('connect', warn.bind(null, 'REQUEST CONNECT EVENT'))
    .on('continue', warn.bind(null, 'REQUEST CONTINUE EVENT'))
    .on('upgrade', warn.bind(null, 'REQUEST UPGRADE EVENT'))
    .on('socket', socket => {
        warn('REQUEST SOCKET EVENT')
        socket
        .on('close', warn.bind(null, 'REQUEST SOCKET CLOSE EVENT'))
        .on('connect', warn.bind(null, 'REQUEST SOCKET CONNECT EVENT'))
        .on('data', warn.bind(null, 'REQUEST SOCKET DATA EVENT'))
        .on('drain', warn.bind(null, 'REQUEST SOCKET DRAIN EVENT'))
        .on('end', warn.bind(null, 'REQUEST SOCKET END EVENT'))
        .on('error', error.bind(null, 'REQUEST SOCKET ERROR EVENT'))
        .on('lookup', warn.bind(null, 'REQUEST SOCKET LOOKUP EVENT'))
        .on('timeout', warn.bind(null, 'REQUEST SOCKET TIMEOUT EVENT'))
    })
    .on('response', response => {
        warn('REQUEST RESPONSE EVENT')
        response
        .on('aborted', error.bind(null, 'RESPONSE ABORTED EVENT'))
        .on('close', error.bind(null, 'RESPONSE CLOSE EVENT'))
        
        response.socket
        .on('close', error.bind(null, 'RESPONSE SOCKET CLOSE EVENT'))
        .on('connect', error.bind(null, 'RESPONSE SOCKET CONNECT EVENT'))
        .on('data', error.bind(null, 'RESPONSE SOCKET DATA EVENT'))
        .on('drain', error.bind(null, 'RESPONSE SOCKET DRAIN EVENT'))
        .on('end', error.bind(null, 'RESPONSE SOCKET END EVENT'))
        .on('error', error.bind(null, 'RESPONSE SOCKET ERROR EVENT'))
        .on('lookup', warn.bind(null, 'RESPONSE SOCKET LOOKUP EVENT'))
        .on('timeout', warn.bind(null, 'RESPONSE SOCKET TIMEOUT EVENT'))
    });
};

function warn(message) {
    console.warn(message);
}

function error(message) {
    console.error(message);
}