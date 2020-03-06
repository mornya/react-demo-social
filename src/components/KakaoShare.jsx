import * as React from 'react'
import { Share } from '@mornya/react-social-libs'
import Configure from 'constants/configure'

export default function KakaoShare () {
  const appId = Configure.social.kakao.appId

  return (
    <div className="kakao-wrap">
      <span className="kakao-title">FEED타입</span>
      <Share.KakaoTalk
        key="kakaotalk-share-feed"
        title="카카오톡 공유"
        extra={{
          appId,
          type: 'feed',
          value: {
            content: {
              title: '딸기 치즈 케익',
              description: '#케익 #딸기 #삼평동 #카페 #분위기 #소개팅',
              imageUrl: 'http://mud-kage.kakao.co.kr/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
              link: {
                mobileWebUrl: 'https://developers.kakao.com',
                webUrl: 'https://developers.kakao.com'
              }
            },
            social: {
              likeCount: 286,
              commentCount: 45,
              sharedCount: 845
            },
            //buttonTitle: '그냥 보기',
            buttons: [
              {
                title: '웹으로 보기',
                link: {
                  mobileWebUrl: 'https://developers.kakao.com',
                  webUrl: 'https://developers.kakao.com'
                }
              },
              {
                title: '앱으로 보기',
                link: {
                  mobileWebUrl: 'https://developers.kakao.com',
                  webUrl: 'https://developers.kakao.com'
                }
              }
            ]
          },
        }}
      />

      <span className="kakao-title">LIST타입</span>
      <Share.KakaoTalk
        key="kakaotalk-share-list"
        title="카카오톡 공유"
        extra={{
          appId,
          type: 'list',
          value: {
            headerTitle: 'WEEKLY MAGAZINE',
            headerLink: {
              mobileWebUrl: 'https://developers.kakao.com',
              webUrl: 'https://developers.kakao.com'
            },
            contents: [
              {
                title: '취미의 특징, 탁구',
                description: '스포츠',
                imageUrl: 'http://mud-kage.kakao.co.kr/dn/bDPMIb/btqgeoTRQvd/49BuF1gNo6UXkdbKecx600/kakaolink40_original.png',
                link: {
                  mobileWebUrl: 'https://developers.kakao.com',
                  webUrl: 'https://developers.kakao.com'
                }
              }, {
                title: '크림으로 이해하는 커피이야기',
                description: '음식',
                imageUrl: 'http://mud-kage.kakao.co.kr/dn/QPeNt/btqgeSfSsCR/0QJIRuWTtkg4cYc57n8H80/kakaolink40_original.png',
                link: {
                  mobileWebUrl: 'https://developers.kakao.com',
                  webUrl: 'https://developers.kakao.com'
                }
              }, {
                title: '감성이 가득한 분위기',
                description: '사진',
                imageUrl: 'http://mud-kage.kakao.co.kr/dn/c7MBX4/btqgeRgWhBy/ZMLnndJFAqyUAnqu4sQHS0/kakaolink40_original.png',
                link: {
                  mobileWebUrl: 'https://developers.kakao.com',
                  webUrl: 'https://developers.kakao.com'
                }
              }
            ],
            buttons: [
              {
                title: '웹으로 보기',
                link: {
                  mobileWebUrl: 'https://developers.kakao.com',
                  webUrl: 'https://developers.kakao.com'
                }
              },
              {
                title: '앱으로 보기',
                link: {
                  mobileWebUrl: 'https://developers.kakao.com',
                  webUrl: 'https://developers.kakao.com'
                }
              }
            ],
          },
        }}
      />

      <span className="kakao-title">LOCATION타입</span>
      <Share.KakaoTalk
        key="kakaotalk-share-location"
        title="카카오톡 공유"
        extra={{
          appId,
          type: 'location',
          value: {
            address: '경기 성남시 분당구 판교역로 235 에이치스퀘어 N동 8층',
            addressTitle: '카카오 판교오피스 카페톡',
            content: {
              title: '신메뉴 출시♥︎ 체리블라썸라떼',
              description: '이번 주는 체리블라썸라떼 1+1',
              imageUrl: 'http://mud-kage.kakao.co.kr/dn/bSbH9w/btqgegaEDfW/vD9KKV0hEintg6bZT4v4WK/kakaolink40_original.png',
              link: {
                mobileWebUrl: 'https://developers.kakao.com',
                webUrl: 'https://developers.kakao.com'
              }
            },
            social: {
              likeCount: 286,
              commentCount: 45,
              sharedCount: 845
            },
            buttons: [
              {
                title: '웹으로 보기',
                link: {
                  mobileWebUrl: 'https://developers.kakao.com',
                  webUrl: 'https://developers.kakao.com'
                }
              }
            ],
          },
        }}
      />

      <hr/>

      <span className="kakao-title">COMMERCE타입</span>
      <Share.KakaoTalk
        key="kakaotalk-share-commerce"
        title="카카오톡 공유"
        extra={{
          appId,
          type: 'commerce',
          value: {
            content: {
              title: 'Ivory long dress (4 Color)',
              imageUrl: 'http://mud-kage.kakao.co.kr/dn/RY8ZN/btqgOGzITp3/uCM1x2xu7GNfr7NS9QvEs0/kakaolink40_original.png',
              link: {
                mobileWebUrl: 'https://developers.kakao.com',
                webUrl: 'https://developers.kakao.com'
              }
            },
            commerce: {
              regularPrice: 208800,
              discountPrice: 146160,
              discountRate: 30
            },
            buttons: [
              {
                title: '구매하기',
                link: {
                  mobileWebUrl: 'https://developers.kakao.com',
                  webUrl: 'https://developers.kakao.com'
                }
              },
              {
                title: '공유하기',
                link: {
                  mobileWebUrl: 'https://developers.kakao.com',
                  webUrl: 'https://developers.kakao.com'
                }
              }
            ],
          },
        }}
      />

      <span className="kakao-title">TEXT타입</span>
      <Share.KakaoTalk
        key="kakaotalk-share-text"
        title="카카오톡 공유"
        extra={{
          appId,
          type: 'text',
          value: {
            text: '공유용 텍스트 입니다. 공유용 텍스트 입니다. 공유용 텍스트 입니다. 공유용 텍스트 입니다. 공유용 텍스트 입니다. 공유용 텍스트 입니다.',
            link: {
              mobileWebUrl: 'https://developers.kakao.com',
              webUrl: 'https://developers.kakao.com'
            },
            buttonTitle: '그냥 보기',
          },
        }}
      />

      <span className="kakao-title">SCRAP타입</span>
      <Share.KakaoTalk
        key="kakaotalk-share-scrap"
        title="카카오톡 공유"
        extra={{
          appId,
          type: 'scrap',
          value: {
            requestUrl: 'https://naver.com',
            templateId: 17349,
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
        }}
      />

      <span className="kakao-title">CUSTOM타입</span>
      <Share.KakaoTalk
        key="kakaotalk-share-custom"
        title="카카오톡 공유"
        extra={{
          appId,
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
          onComplete (result, response) {
            console.warn('KAKAO', result, response)
          },
        }}
      />
    </div>
  )
}
