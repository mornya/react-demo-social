import { Ignite } from '@mornya/react-helper';

declare var module: Ignite.IHotNodeModule;

const option: Ignite.IOption = {
  application: {
    component: () => import('./App'),
    rootElementId: 'app',
    useServiceWorker: true,
    useBrowserRouter: true,
    onHotReload: next => module.hot.accept('./App', next),
  },
};

Ignite.init(option);
