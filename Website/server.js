const http = require('http');
const fs = require('fs');
const path = require('path');

// Read the HTML file content
const htmlContent = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');

// Create an HTTP server
http.createServer(function (req, res) {
  // Check if the request is for the root URL
  if (req.url === '/') {
    // Serve the HTML file
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(htmlContent);
    res.end();
  } else if (req.url === '/script.js') {
    // Serve the JavaScript file
    const scriptContent = fs.readFileSync(path.join(__dirname, 'script.js'), 'utf8');
    res.writeHead(200, { 'Content-Type': 'application/javascript' });
    res.write(scriptContent);
    res.end();
  } else {
    // Handle other requests as needed
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write('404 Not Found');
    res.end();
  }
}).listen(8080, function () {
  console.log('Server running at http://localhost:8080/');
  
  // Append content to the file after the server starts
  const filename = require('./script.js');
  fs.appendFile('mynewfile1.txt', 'Hello content! YEAAA', function (err) {
    if (err) throw err;
    console.log('Content appended to mynewfile1.txt', inputValue);
  });
});




