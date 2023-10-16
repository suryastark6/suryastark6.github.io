const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  // Serve the static file `index.html` for the root URL.
  if (req.url === '/') {
    const readStream = fs.createReadStream('adobt.html');
    readStream.pipe(res);
  }
  if (req.url === '/') {
    const readStream = fs.createReadStream('styles.css');
    readStream.pipe(res);
  }
  

  // Generate a dynamic response for the `/about` URL.
  else if (req.url === '/about') {
    const response = `
      <h1>Welcome to ProCon!</h1>
      <p>You are viewing the About page.</p>
    `;

    res.setHeader('Content-Type', 'text/html');
    res.end(response);
  }

  // Otherwise, send a 404 error.
  else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('404 Not Found');
  }
}).listen(8080);

console.log('Server is listening on port 8080');
