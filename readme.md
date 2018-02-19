### request-logger

```bash
$ npm i @n370/request-logger
```

```javascript
const http = require('http');
const log = require('@n370/request-logger');

log(http.request('http://google.com')).end();
```