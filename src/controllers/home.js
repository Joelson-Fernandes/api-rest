// import Aluno from '../models/Aluno';

class Home {
  async index(req, res) {
    try {
      res.json('Index');
    } catch (e) {
      res.json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new Home();
