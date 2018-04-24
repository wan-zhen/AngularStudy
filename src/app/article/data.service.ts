import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
  data;
  constructor(private http: HttpClient) {
    this.http.get('http://localhost:4200/api/articles.json')
      .subscribe(result => {
        this.data = result;
      });
  }
  doDelete(item) {
    this.data = this.data.filter(v => v.id !== item.id);
  }

  changeTitle(titleAndId: ITitleAndId) {
    // 使用 map 回傳一個新的陣列
    // 父元件的 data 就會整個被修改
    // 子元件的 data 才會因為發生修改資料重刷
    this.data = this.data.map((item) => {
      if (item.id === titleAndId.id) {
        // 建立一個全新的物件 把item 的值和傳進來的 titleAndId 合併
        return Object.assign({}, item, titleAndId);
        // item.title = titleAndId.title; 不這樣寫是因為會直接修改物件的屬性 子元件不會知道哪個屬性被修改了
      }
      return item;
    });
  }
}
interface ITitleAndId {
  id: number;
  title: string;
}
