const iPhoneXR = require('../factoryPattern/phone/iPhoneXR');
const iPhoneXS = require('../factoryPattern/phone/iPhoneXS');

class iPhoneFactory {
    create(type, serialNum) {
        switch (type) {
            case 'iPhone XR':
                return new iPhoneXR(serialNum);
            case 'iPhone XS':
                return new iPhoneXS(serialNum);
            default:
                console.log('Unknown iPhone type...');
        }
    }
}

module.exports = new iPhoneFactory();