# pm2-nicehook

None of the existent webhook modules for PM2 were working for me, so I created this simple one. Feel free to use it if you want!
If you have any enchancements that you think can be done, feel free to send a Pull Request!

### Installation
```
git clone https://github.com/pedrofracassi/pm2-nicehook
cd pm2-nicehook
npm install
node index.js
```
You can also add it as a PM2 process, if you want to.
```
pm2 start index.js
```

### Configuration
For now everything is hard-coded. I might change it later.

If you want to change the port (default is 8888), change this line in `index.js`:
```javascript
}).listen(8888);
```


If you want to change the webhook secret, **wich you really should do**, change this line:
```javascript
  "secret": 'WOLOLO'
```
