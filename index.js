const moment = require('./node_modules/moment');
const { firstBy } = require('./node_modules/thenby');
const {nerdvision} = require('./node_modules/@nerdvision/agent');

nerdvision.init(process.argv[1])
    .then(() => console.log('lets go!'))
    .then(() => {
        let startTime = '2019-09-11T23:30:00-06:00';
        let m = moment().toISOString(true);
        let n = moment().toISOString(false);
        console.log(m);
        console.log(n);
        // remember to close the connection when your application exits
        nerdvision.close();
    })

