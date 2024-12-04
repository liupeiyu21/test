import React from 'react'
import './App.css'
import './headercon.css'
import Car from './img/eva_car-fill.png'


function Headercon() {
  return (
    <>
      <div className='header-contents'>
        <p>世界中のイヤホン・ヘッドホンが試聴・買取・購入できる専門店</p>
        <div className='header-p'>
          <img src={Car} alt="トラックのアイコン" />
          <div>
            <p>新品<span className='money'>3000</span> 円以上<span className='freedom'>送料無料</span></p>
            <p><span className='overtime'>16:00</span>までのご注文で即日出荷</p>
          </div>
        </div>
        <ul className='guide-nav'>
          <li><a href="#"><p>ご利用ガイド</p></a></li>
          <li><a href="#"><p>お問い合わせ</p></a></li>
        </ul>
      </div>
    </>
  )
}

export default Headercon

