import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-article-header',
  templateUrl: './article-header.component.html',
  styleUrls: ['./article-header.component.css']
})
export class ArticleHeaderComponent implements OnInit, OnChanges, OnDestroy {
  @Input()
  item;

  @Output()
  del = new EventEmitter<any>(); // 事件發射器

  @Output()
  titleChanged = new EventEmitter<any>();

  isEdit = false;
  newTitle = '';

  constructor() {
    /* 第一個進來的時機點 在component還沒被建起來之前執行 */
    /* 此時還拿不到從父元件傳進來的item */
  }

  ngOnChanges(changes) {
    // 會在 ngOnInit 前執行
    // 只要有透過 input 把父元件資料傳進來就會先被觸發一次
    // 後續只要有透過屬性繫結進來的屬性被改變就會觸發
    console.log(changes);
    // changes 可以看到 是哪個值被改變 還有可以知道是否第一次被改變，old value and new value
    if (changes.item) {
      // 直接把傳進來的值 建立一個新的物件
      // 此時 this.item 已經是一個全新的物件 跟父元件的item 已無相關
      // 就可以直接在這個 component 使用 ng-model 雙向繫結
      this.item = Object.assign({}, changes.item.currentValue);
    }
  }

  ngOnInit() {
    /* constructor 後執行 component 初始化時 */
    this.newTitle = this.item.title;
  }

  ngOnDestroy(): void {
    /* component 被摧毀前 */
    /* angular 會自行回收這個component的屬性 所以通常比較少用到 */
    /* 通常用在取消一些 rx 訂閱中 */
  }

  deleteArticle() {
    // 通知父元件把這個item往上丟
    this.del.emit(this.item);
  }

  doEdit(value) {
    this.newTitle = value;
    this.titleChanged.emit({ id: this.item.id, title: value });
  }
}
