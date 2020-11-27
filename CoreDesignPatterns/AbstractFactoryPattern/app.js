const iPhoneFactory = require('./iPhoneFactory');

const iPhoneXR = iPhoneFactory.create('iPhone XR', 'XR-001');
const iPhoneXS = iPhoneFactory.create('iPhone XS', 'XS-002');

iPhoneXR.displayConfig();
iPhoneXS.displayConfig();