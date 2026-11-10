// src/data/Data.js

import { RESTAURANTS } from './restaurantsData';

export const ALL_DISHES = RESTAURANTS.flatMap(shop => 
  shop.recommendations.map((dish, index) => ({
    id: `${shop.id}-${index}`,
    shop: shop.name,
    name: dish.name,
    price: dish.price,
    img: dish.img
  }))
);

export const TEAM_MEMBERS = [
  { name: "何珮瑄", roles: ["Logo 與視覺設計", "圖片後製", "介紹影片", "簡報與報告", "專案進度管理"] },
  { name: "曾秋燕", roles: ["需求分析", "頁面規劃", "Figma 介面設計", "店家圖標", "程式開發"] },
  { name: "李柏融", roles: ["需求分析", "頁面規劃", "主程式", "資料建檔", "部署與除錯"] },
  { name: "孔郁婷", roles: ["資料蒐集", "企劃書撰寫", "店家攝影"] },
  { name: "張倢睿", roles: ["資料蒐集", "店家攝影"] }
];
