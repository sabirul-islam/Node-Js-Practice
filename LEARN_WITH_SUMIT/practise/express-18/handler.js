const handler = (req, res) => {
  console.log(req.get('accept'));
  res.send('Hello World');
};

module.exports = handler;
