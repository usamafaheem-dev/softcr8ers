const fs = require('fs');

function checkPng() {
  const buf = fs.readFileSync('public/white_logo.png');
  // PNG width is at offset 16, 4 bytes big endian
  const width = buf.readInt32BE(16);
  // PNG height is at offset 20, 4 bytes big endian
  const height = buf.readInt32BE(20);
  console.log(`Width: ${width}, Height: ${height}, Size: ${buf.length} bytes`);
}

checkPng();
