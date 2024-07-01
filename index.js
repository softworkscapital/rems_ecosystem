const express = require('express');
require('dotenv').config();
const cors = require('cors');

const https = require('https');

// Route path
const userRouter = require('./routes/users');
const clientRouter = require('./routes/client_profile');
const funnelConRouter = require('./routes/funnel_conversation');
const prospectsRouter = require('./routes/prospect_details');

const app = express();
app.use(express.json());
app.use(cors());

//App Route Usage
app.use('/users', userRouter);
app.use('/clients', clientRouter);
app.use('/funnelcon', funnelConRouter);
app.use('/prospects', prospectsRouter);

app.get('/', (req, res) => {
    res.send("REMS ECOSYSTEM");
})


const options = {
  cert: fs.readFileSync('/etc/letsencrypt/live/srv547457.hstgr.cloud/fullchain.pem'),
  key: fs.readFileSync('/etc/letsencrypt/live/srv547457.hstgr.cloud/privkey.pem')
};

https.createServer(options, app).listen(process.env.APPPORT || '3003', () => {
  console.log('app is listening to port' + process.env.APPPORT);
});

// app.listen(process.env.APPPORT || '3003', () => {
//     console.log('app is listening to port' + '3003');
// });