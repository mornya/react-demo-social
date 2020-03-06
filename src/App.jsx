import * as React from 'react'
import { Route, Link /* Redirect, Switch */ } from 'react-router-dom'
import loadable from '@loadable/component'
import '@mornya/react-social-libs/dist/res/share.css'
import './App.scss'

const ShareAndWidget = loadable(() => import('@/components/ShareAndWidget'))
const KakaoShare = loadable(() => import('@/components/KakaoShare'))

export default function App () {
  return (
    <div className="app-wrapper">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/kakao">KakaoShare</Link></li>
        </ul>
      </nav>

      <header>
        <h1>React Demo</h1>
        <p>Social Share and Widget library is now ready!</p>
        <br/>

        <Route exact path="/" component={ShareAndWidget}/>
        <Route path="/kakao" component={KakaoShare}/>
      </header>

      <footer>
        Copyright 2020. mornya. All rights reserved.
      </footer>
    </div>
  )
}
