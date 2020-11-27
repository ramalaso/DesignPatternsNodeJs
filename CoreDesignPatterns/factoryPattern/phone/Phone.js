class Phone {
    constructor(serialNum, model = 'Generic', processor = 'Generic', RAM = '2GB', width = 67.3, height = 138.4, depth = 5.6, resolution = '650 x 1334') {
        this.serialNum = serialNum;
        this.configuration = {
            model,
            processor,
            RAM,
            width,
            height,
            depth,
            resolution
        };
    }
    dial(num) {
        console.log(`Now dialing ${num}...`);
    }
    displayConfig() {
        console.log(this.configuration);
    }
}

module.exports = Phone;