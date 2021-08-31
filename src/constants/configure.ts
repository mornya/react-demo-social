export default {
  social: {
    facebook: {
      appId: process.env.SDK_FACEBOOK_APP_ID,
      scope: ['public_profile', 'email', 'user_friends'],
    },
    google: {
      scope: [],
    },
    kakao: {
      appId: process.env.SDK_KAKAO_APP_ID,
    },
  },
} as IConfigure;
