import * as React from 'react';
import { Share } from '@mornya/react-social-libs';
import Configure from '@/constants/configure';

export default function ShareButtons () {
  return (
    <div>
      <Share.Band title="밴드 공유" extra={{ hashtags: ['react', 'demo'] }}/>
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
        extra={{
          appId: Configure.social.kakao.appId,
          type: 'custom',
          value: {
            templateId: 17349, // message template ID
            templateArgs: {
              title: '카카오톡 공유하기로 파는 상품',
              linkUrl: window.location.pathname.replace(/^\//, '') + window.location.search,
              imageUrl0: 'https://heyboo.co.kr/web/product/big/201808/9eaacc90f41cb4fbe8aaa5cda79bc0d9.jpg',
              imageUrl1: 'https://kimblog.co.kr/web/product/big/201810/757ef07410d8057d0f4e00aa33b98f2d.png',
              imageUrl2: 'http://image2.lotteimall.com/goods/46/87/60/1296608746_L.jpg',
              regularPrice: 12000, // 일반가격
              discountPrice: 10000, // 할인가격
              discountRate: 100 - Math.floor((10000 / 12000) * 100), // 할인률 = 100 - (할인가격 / 일반가격) * 100
            },
          },
          onComplete (isSuccess: boolean, response: Response | null) {
            console.log('KAKAO', isSuccess, response);
          },
        }}
      />
      <Share.Line title="라인 공유"/>
      <Share.LinkedIn title="링크드인 공유"/>
      <Share.Naver title="네이버 공유"/>
      <Share.NaverBlog title="네이버 블로그 공유"/>
      <Share.SMS title="SMS 공유" extra={{ target: '+821011111111' }}/>
      <Share.Telegram title="텔레그램 공유" extra={{ message: () => '아래와 같이 링크를 공유합니다.' }}/>
      <Share.Tumblr title="텀블러 공유" extra={{ hashtags: ['mornya', '텀블러공유'] }}/>
      <Share.Twitter title="트위터 공유" extra={{ hashtags: ['mornya', '트위터공유'] }}/>
      <Share.Clipboard
        title="클립보드 복사"
        extra={{ message: () => '복사된 메시지 입니다.' }}
        onComplete={() => alert('클립보드에 복사되었습니다.')}
      />
    </div>
  );
}
