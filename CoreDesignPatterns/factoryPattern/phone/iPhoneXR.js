const Phone = require('./Phone');

class iPhoneXR {
    constructor(serialNum) {
        return new Phone(serialNum, 'XMP-123', 'iPhone 12', 'A12 Bionic', '3GB', 75.7, 150.9, 8.3, '828x1792');
    }
}

module.exports = iPhoneXR;
