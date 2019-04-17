import * as React from 'react'
import { Share, Widget } from '@mornya/react-social-libs'
import Configure from './constants/configure'
import logo from './assets/logo.svg'
import '@mornya/react-social-libs/dist/res/share.css'
import './App.scss'

export default function App () {
  return (
    <div className="app-wrapper">
      <img src={logo} className="app-logo" alt="React.js Logo"/>

      <header>
        <h1>React Social Demo</h1>
        <p>Social Shares and Widgets are now ready!</p>
        <p>&nbsp;</p>

        <div className="btn-grp">
          <div>
            <Share.Band title="밴드 공유"/>
            <Share.Email title="e메일 공유"/>
            <Share.Facebook title="페이스북 공유" extra={{ appId: Configure.social.facebook.appId }}/>
            <Share.Flipboard title="플립보드 공유"/>
            <Share.Gmail title="G메일 공유"/>
            <Share.GoogleBookmarks title="구글 북마크 공유"/>
            <Share.KakaoStory
              title="카카오스토리 공유"
              extra={{
                appId: Configure.social.kakao.appId,
                hashtags: ['mornya', '카카오스토리'],
              }}
            />
            <Share.KakaoTalk
              title="카카오톡 공유"
              extra={{ appId: Configure.social.kakao.appId }}
            />
            <Share.Line title="라인 공유"/>
            <Share.LinkedIn title="링크드인 공유"/>
            <Share.Naver title="네이버 공유"/>
            <Share.NaverBlog title="네이버 블로그 공유"/>
            <Share.SMS title="SMS 공유" extra={{ target: '+821011111111' }}/>
            <Share.Telegram title="텔레그램 공유" extra={{ message: () => '아래와 같이 링크를 공유합니다.' }}/>
            <Share.Tumblr title="텀블러 공유" extra={{ hashtags: ['mornya', '텀블러공유']}}/>
            <Share.Twitter title="트위터 공유" extra={{ hashtags: ['mornya', '트위터공유'] }}/>
          </div>

          <hr/>

          <div>
            <Widget.FacebookLike extra={{
              appId: Configure.social.facebook.appId,
              pageUrl: 'https://developers.facebook.com/docs/plugins/',
            }}/>
            <Widget.FlipboardFlipit/>
            <Widget.KakaoStoryFollow extra={{
              appId: Configure.social.kakao.appId,
              subscribeChannelId: 'mornya',
            }}/>
            <Widget.TumblrFollow extra={{ tumblelog: 'mornya' }}/>
            <Widget.TumblrPost extra={{ hashtags: ['mornya', '텀블러공유']}}/>
            <Widget.TwitterFollow extra={{
              screenName: '@mornyacom',
            }}/>
            <Widget.TwitterMessage extra={{ screenName: '@mornyacom', recipientId: '3805104374' }}/>
            <Widget.TwitterTweet/>
          </div>
          <div>
            <Widget.GoogleHangout/>
          </div>
        </div>
      </header>

      <footer>
        Copyright 2019 by mornya. All rights reserved.
      </footer>
    </div>
  )
}
