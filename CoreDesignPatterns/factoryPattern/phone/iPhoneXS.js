const Phone = require('./Phone');

class iPhoneXS {
    constructor(serialNum) {
        return new Phone(serialNum, 'Iphone XS', 'iPhone 12', 'A12 Bionic', '4GB', 75.7, 150.9, 8.3, '828x1792');
    }
}

module.exports = iPhoneXS;