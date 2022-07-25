import app from './app';

const port = 3000;

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
  console.log(`servidor executado na porta: ${port}`);
});
