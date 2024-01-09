const bcrypt = require('bcrypt');

exports.createHash = async (password) => {
    const hash = await bcrypt.hash(password, 10);
    return hash;
}

exports.matchHash = async (password, hash) => {
    const match = await bcrypt.compare(password, hash);
    return match
}