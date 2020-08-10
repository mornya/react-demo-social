# React Demo: Social Share and Widgets
A demo React.js application for Social Share and Widget Libs ([@mornya/react-social-libs](https://www.npmjs.com/package/@mornya/react-social-libs)).

> This project has been created by [React Vessel](https://www.npmjs.com/package/@mornya/react-vessel).
  For a simple and quick reference, click [here](https://mornya.github.io/documents/guide/react-vessel.md).

## About
React.js 소셜 공유하기 및 위젯 데모 애플리케이션.

DEMO: [https://mornya.github.io/react-demo-social](https://mornya.github.io/react-demo-social)

## Run Demo
페이스북, 카카오 등의 소셜 공유 기능을 사용하기 위해서는 각 서비스의 공유 기능 관련 설정 후 appId를 얻는다.<br><br>
`.env.development` 파일을 참고하여 `.env` 파일을 생성 후, `FACEBOOK_APPID`, `KAKAO_APPID` 항목에 각각 값을 입력하고 `npm start` 커맨드로 웹 서비스 실행.

## Project Setup
```bash
$ npm install -g @mornya/react-vessel @lintest/cli

$ git clone https://github.com/mornya/react-demo-scrolling-anchor
$ cd react-demo-scrolling-anchor
$ npm install
$ lintest export
```

## Runs in local for development
```bash
$ npm start
$ npm run [serve|dev]
```

## Builds for production
```bash
$ npm run build
```

## Lints your codes
```bash
$ npm run [lint|lint:fix|lint:coverage]
$ lintest lint [fix]
```

## Runs your testcases
```bash
$ npm run [test|test:watch|test:coverage]
$ lintest test [watch][coverage]
```

## License
프로젝트 라이센스는 [LICENSE](LICENSE) 파일 참조.
