import * as React from 'react'
import { Widget } from '@mornya/react-social-libs'
import Configure from 'constants/configure'

export default function WidgetButtons () {
  return (
    <div>
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
        <Widget.TumblrPost extra={{ hashtags: ['mornya', '텀블러공유'] }}/>
        <Widget.TumblrFollow extra={{ tumblelog: 'mornya' }}/>
        <Widget.TwitterFollow extra={{
          screenName: '@mornyacom',
        }}/>
        <Widget.TwitterMessage extra={{
          screenName: '@mornyacom',
          recipientId: '3805104374',
          hashtags: ['mornya', '트위터메시지공유'],
        }}/>
        <Widget.TwitterTweet extra={{ hashtags: ['mornya', '트위터공유', ''] }}/>
      </div>
      <div>
        <Widget.GoogleHangout/>
      </div>
    </div>
  )
}
