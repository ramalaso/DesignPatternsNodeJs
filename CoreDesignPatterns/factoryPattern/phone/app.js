const iPhoneXR = require('./iPhoneXR');
const iPhoneXS = require('./iPhoneXS');

const myNewIphone = new iPhoneXR('XR-001');
const myNewIphoneXS = new iPhoneXS('XS-001');

myNewIphone.displarConfig();
myNewIphone.dial(4262755);


myNewIphoneXS.displarConfig();
myNewIphoneXS.dial(4262755);