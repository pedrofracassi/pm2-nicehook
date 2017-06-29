const GithubWebHook = require('express-github-webhook');
const bodyParser = require('body-parser');

var webhookHandler = GithubWebHook({ path: '/webhook', secret: 'secret' });

let app = express();
app.use(bodyParser.json());
app.use(webhookHandler);

webhookHandler.on('push', (repo, data) => {
  console.log('Repo name: ' + repo);
  console.log('--------------');
  console.log('DATA:');
  console.log(data);
});
