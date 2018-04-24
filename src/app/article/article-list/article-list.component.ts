import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

// 相依注入 想在 template 使用 service 的方法 可把 private 改成 public 就取的到了
  constructor(public dataService: DataService) {

  }

  ngOnInit() {

  }

}

