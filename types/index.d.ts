/*
 * index.d.ts
 * This definition file will typed to "src/index.ts" and sub-modules.
 */

interface IConfigure {
  social: {
    facebook: {
      appId: string;
      scope: string[];
    };
    google: {
      scope: string[];
    };
    kakao: {
      appId: string;
    };
  };
}
