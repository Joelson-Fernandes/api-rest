import bcryptjs from 'bcryptjs';
import { DataTypes, Model } from 'sequelize';

export default class User extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: DataTypes.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255],
              msg: 'Campo nome deve ter entre 03 e 255 caracteres',
            },
          },
        },
        email: {
          type: DataTypes.STRING,
          defaultValue: '',
          unique: {
            msg: 'Email já existe',
          },
          validate: {
            isEmail: {
              msg: 'Email inválido',
            },
          },
        },
        password_hash: {
          type: DataTypes.STRING,
          defaultValue: '',
        },
        password: {
          type: DataTypes.VIRTUAL,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 50],
              msg: 'A senha deve ter entre 03 e 255 caracteres',
            },
          },
        },

      },

      { sequelize },
    );

    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await bcryptjs.hash(user.password, 8);
      }
    });

    return this;
  }

  passwordIsValid(password) {
    return bcryptjs.compare(password, this.password_hash);
  }
}
