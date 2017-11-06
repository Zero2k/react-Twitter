import Tweet from '../../models/Tweets';
import { requireAuth } from '../../services/auth';

export default {
  getTweet: async (parent, { _id }, { user }) => {
    try {
      await requireAuth(user);
      return Tweet.findById(_id);
    } catch (error) {
      throw error;
    }
  },
  getTweets: async (parent, args, { user }) => {
    try {
      /* await requireAuth(user); */
      return Tweet.find({}).sort({ createdAt: -1 });
    } catch (error) {
      throw error;
    }
  },
  getUserTweets: async (parent, args, { user }) => {
    try {
      await requireAuth(user);
      return Tweet.find({ user: user._id }).sort({ createdAt: -1 });
    } catch (error) {
      throw error;
    }
  },
  createTweet: async (parent, args, { user }) => {
    try {
      await requireAuth(user);
      return Tweet.create({ ...args, user: user._id });
    } catch (error) {
      throw error;
    }
  },
  updateTweet: async (_, { _id, ...rest }, { user }) => {
    try {
      await requireAuth(user);
      const tweet = await Tweet.findOne({ _id, user: user._id });

      if (!tweet) {
        throw new Error('Not found!');
      }

      Object.entries(rest).forEach(([key, value]) => {
        tweet[key] = value;
      });

      return tweet.save();
    } catch (error) {
      throw error;
    }
  },
  deleteTweet: async (parent, { _id }, { user }) => {
    try {
      await requireAuth(user);
      const tweet = await Tweet.findOne({ _id, user: user._id });

      if (!tweet) {
        throw new Error('Not found!');
      }
      await tweet.remove();
      return {
        message: 'Delete was successful!',
      };
    } catch (error) {
      throw error;
    }
  },
};
