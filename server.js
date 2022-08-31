import app from './app';

const port = 3001;

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
  console.log(`servidor executado na porta: ${port}`);
});
