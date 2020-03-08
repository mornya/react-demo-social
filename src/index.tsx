import { Ignite } from '@mornya/react-helper';
import { Loader } from '@mornya/react-social-libs';
import Configure from '@/constants/configure';

declare var module: Ignite.IHotNodeModule;

const option: Ignite.IOption = {
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

Ignite.init(option);
