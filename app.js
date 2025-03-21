const express = require('express');
const swagRouter = require('./routes/swag');

const app = express();

app.use(express.json());
app.use('/swag', swagRouter);

app.get('/swag', (req, res) => {
  res.send('get swag');
});

app.get('/swag/:person', (req, res) => {
  res.send(req.params.person);
});

app.post('/swag', (req, res) => {
  res.send(req.body);
});

app.listen(3000, () => {
  console.log('서버가 http://localhost:3000에서 실행 중입니다.');
});
