import React, { useState } from "react";
import storeData from "./data/storeData.json"; // JSONデータをインポート

function App() {
  const [selectedRegion, setSelectedRegion] = useState("Tohoku"); // 選択された地域を管理

  // 選択された地域の店舗情報を取得
  const storeList = storeData.regions[selectedRegion];

  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value); // 選択された地域を更新
  };

  return (
    <>
      <div>
        <h1>店舗情報</h1>
        <label htmlFor="region-select">
          地域を選択：
          <select
            name="region"
            id="region-select"
            value={selectedRegion}
            onChange={handleRegionChange}
          >
            <option value="Tohoku">Tohoku</option>
            <option value="Kanto">Kanto</option>
            <option value="Kansai">Kansai</option>
          </select>
        </label>

        <div>
          {/* 選択された地域の店舗情報を表示 */}
          {storeList.map((store, index) => (
            <div key={index}>
              <h2>{store.storeName}</h2>
              <p>住所：{store.address}</p>
              <p>電話番号：{store.phoneNumber}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;





