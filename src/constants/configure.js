export const Configure = {
  social: {
    facebook: {
      appId: process.env.FACEBOOK_APPID,
      scope: process.env.FACEBOOK_SCOPE.split(',').map(item => item.trim()),
    },
    google: {
      scope: process.env.GOOGLE_SCOPE.split(',').map(item => item.trim()),
    },
    kakao: {
      appId: process.env.KAKAO_APPID,
    },
  },
}
