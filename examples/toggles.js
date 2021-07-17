const {initialize, isEnabled} = require('unleash-client')

const config = {
  url: 'http://config.home.local/api',
  appName: 'demo',
  customHeaders: {
    Authorization:
      // Only accessible in local env
      '50b4b042758c1e3e612667749277afae217b713b9c67f3f1e9cb6ff247d6e4ff'
  },
}


const client = initialize(config);

client.on('error', console.error);
client.on('warn', console.log);

console.log('Fetching toggles from: http://unleash.herokuapp.com');

setInterval(() => {
  console.log(`featureX enabled: ${isEnabled('featureX')}`);
}, 1000);
