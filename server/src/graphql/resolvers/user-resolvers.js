import User from '../../models/User';
import { requireAuth } from '../../services/auth';

export default {
  signup: async (parent, { email, password, username }) => {
    try {
      const userInfo = { email, password, username };
      const user = await User.create(userInfo);

      return {
        token: user.createToken(),
      };
    } catch (error) {
      throw error;
    }
  },
  login: async (parent, { email, password }) => {
    try {
      const user = await User.findOne({ email });

      if (!user) {
        throw new Error('No user exist!');
      }

      if (!user.authenticateUser(password)) {
        throw new Error('Wrong password!');
      }

      return {
        token: user.createToken(),
      };
    } catch (error) {
      throw error;
    }
  },
  me: async (parent, args, { user }) => {
    try {
      const me = await requireAuth(user);

      return me;
    } catch (error) {
      throw error;
    }
  },
};
