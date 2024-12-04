import React, { useState } from 'react'
import storeDate from './data/storeData.json';



function App() {
  



  return (
    <>
      <div>
        <h1>店舗情報</h1>
        <label htmlFor="addss">
          <select name="addss" id="addss">
            <option value="">Tohoku</option>
            <option value="">Kanto</option>
            <option value="">Kansai</option>
          </select>

        </label>
        {storeDate.regions.Tohoku.map((store, index) => (
          <div key={index}>
            <h2>{store.storeName}</h2>
            <p>住所：{store.address}</p>
            <p>電話番号：{store.phoneNumber}</p>
          </div>
        ))}
      </div>
      <div>
        <h1>店舗情報</h1>
        {storeDate.regions.Kanto.map((store, index) => (
          <div key={index}>
            <h2>{store.storeName}</h2>
            <p>住所：{store.address}</p>
            <p>電話番号：{store.phoneNumber}</p>
          </div>
        ))}
      </div>
      <div>
        <h1>店舗情報</h1>
        {storeDate.regions.Kansai.map((store, index) => (
          <div key={index}>
            <h2>{store.storeName}</h2>
            <p>住所：{store.address}</p>
            <p>電話番号：{store.phoneNumber}</p>
          </div>
        ))}
      </div>

    </>
  )
}

export default App




