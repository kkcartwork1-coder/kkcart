const fs = require('fs');
const path = require('path');
const FormData = require('form-data');
const http = require('http');

// Create a test image (1x1 pixel PNG)
const pngData = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82, 0, 0, 0, 1, 0, 0, 0, 1, 8, 6, 0, 0, 0, 31, 21, 196, 137, 0, 0, 0, 10, 73, 68, 65, 84, 120, 156, 99, 0, 1, 0, 0, 5, 0, 1, 13, 10, 45, 176, 0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130]);
const testImagePath = path.join(__dirname, 'test-image.png');
fs.writeFileSync(testImagePath, pngData);

// Create form data
const form = new FormData();
form.append('name', 'Test Product');
form.append('price', '100 (1 kg)');
form.append('type', 'Grocery');
form.append('category', 'Fruits');
form.append('image', fs.createReadStream(testImagePath), 'test.png');

// Make request
const options = {
  hostname: 'localhost',
  port: 5000,
  path: '/api/products',
  method: 'POST',
  headers: form.getHeaders()
};

const req = http.request(options, (res) => {
  console.log(`Status: ${res.statusCode}`);
  console.log(`Headers: ${JSON.stringify(res.headers)}`);
  
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  
  res.on('end', () => {
    console.log('Response:', data);
    try {
      const parsed = JSON.parse(data);
      console.log('Parsed:', JSON.stringify(parsed, null, 2));
    } catch (err) {
      console.log('Could not parse as JSON');
    }
    
    // Clean up
    fs.unlinkSync(testImagePath);
    process.exit(0);
  });
});

req.on('error', (err) => {
  console.error('Request error:', err);
  fs.unlinkSync(testImagePath);
  process.exit(1);
});

form.pipe(req);

setTimeout(() => {
  console.error('Request timeout');
  fs.unlinkSync(testImagePath);
  process.exit(1);
}, 10000);
