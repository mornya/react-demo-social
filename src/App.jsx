import * as React from 'react'
import { Route, Link /* Redirect, Switch */ } from 'react-router-dom'
import { LazyComponent } from '@mornya/react-helper'
import logo from 'assets/logo.svg'
import '@mornya/react-social-libs/dist/res/share.css'
import './App.scss'

const ShareAndWidget = LazyComponent(() => import('components/ShareAndWidget'))
const KakaoShare = LazyComponent(() => import('components/KakaoShare'), <div>Loading KakaoShare..</div>)

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
        Copyright 2019 by mornya. All rights reserved.
      </footer>
    </div>
  )
}
