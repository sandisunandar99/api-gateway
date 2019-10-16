const jwt = require('jsonwebtoken');
const secret = '7zv3v3tBFhhfFVUe3ifxIk';

const token = jwt.sign({
    "sub": "3pmXmNAPLNQZJKRWmpBNNk",
    "name": "sandi sunandar",
    "iat": 1538828706
}, secret);

console.log(token);
