const jwt = require('jsonwebtoken');
const secret = 'secret';

module.exports = function(bearer) {
  return new Promise((resolve, reject) => {
    if (!bearer || bearer.split(' ')[0] !== 'Bearer') {
      reject('Invalid authentication method.');
    }

    jwt.verify(bearer.split(' ')[1], secret, (err, decoded) => {
      if (err) return reject('Invalid or missing token.');

      resolve(decoded.id);
    });
  });
};
