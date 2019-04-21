require('dotenv').config({ path: '.env' });

const jwt = require('jsonwebtoken');

module.exports = function(bearer) {
  return new Promise((resolve, reject) => {
    if (!bearer || bearer.split(' ')[0] !== 'Bearer') {
      reject('Invalid authentication method.');
    }

    jwt.verify(bearer.split(' ')[1], process.env.SECRET, (err, decoded) => {
      if (err) return reject('Invalid or missing token.');

      resolve(decoded.id);
    });
  });
};
