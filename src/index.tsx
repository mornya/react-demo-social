import { Ignitor } from '@ignitor/core';
import { Loader } from '@mornya/react-social-libs';
import Configure from '@/constants/configure';

const option: Ignitor.Option = {
  application: {
    component: () => import('./App'),
    rootElementId: 'app',
    onHotReload: next => module.hot && module.hot.accept('./App', next),
    onRender () {
      Loader.initKakaoSDK(Configure.social.kakao.appId ?? '');
      Loader.initFacebookSDK(Configure.social.facebook.appId ?? '', process.env.NODE_ENV !== 'production');
      Loader.initClipboardSDK();
    },
  },
  router: {
    isUseBrowserRouter: true,
    basename: process.env.PUBLIC_URL,
  },
  serviceWorker: {
    isUse: process.env.NODE_ENV === 'production',
    config: {
      url: './',
      file: 'service-worker.js',
    },
  },
};

Ignitor.initialize(option);
