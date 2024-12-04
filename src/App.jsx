import React, { useState } from "react";
import storeData from "./data/storeData.json"; 


function App(){

  const[ selectarea, setselectarea] = useState("Tohoku");

  const areaList = storeData.regions[selectarea];

  return(
    <>
    <h1>店舗紹介</h1>
    <label htmlFor="selearea">
      <select 
      name="region" 
      id="selearea" 
      onChange={(e) =>setselectarea(e.target.value)}
      > 
        <option value="Tohoku">東北</option>
        <option value="Kanto">関東</option>
        <option value="Kansai">関西</option>
      </select>
    </label>
    {areaList.map((store, index) => (
      <div key={index}>
        <h2>{store.storeName}</h2>
        <p>住所：{store.address}</p>
        <p>電話番号：{store.phoneNumber}</p>
      </div>
    ))}
    </>

  );
}
export default App;





