import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  keyword = '';
  data = [
    {
      'id': 1,
      'href': 'http://blog.miniasp.com/post/2016/04/30/Visual-Studio-Code-from-Command-Prompt-notes.aspx',
      'title': '從命令提示字元中開啟 Visual Studio Code 如何避免顯示惱人的偵錯訊息',
      'date': '2016/04/30 18:05',
      'author': 'Will 保哥',
      'category': 'Visual Studio',
      'category-link': 'http://blog.miniasp.com/category/Visual-Studio.aspx',
      // tslint:disable-next-line:max-line-length
      'summary': '<p>由於我的 Visual Studio Code 大部分時候都是在命令提示字元下啟動，所以只要用 <strong><font color="#ff0000" face="Consolas">code .</font></strong>就可以快速啟動 Visual Studio Code 並自動開啟目前所在資料夾。不過不知道從哪個版本開始，我在啟動 Visual Studio Code 之後，卻開始在原本所在的命令提示字元視窗中出現一堆惱人的偵錯訊息，本篇文章試圖解析這個現象，並提出解決辦法。</p><p>... <a class="more" href="http://blog.miniasp.com/post/2016/04/30/Visual-Studio-Code-from-Command-Prompt-notes.aspx#continue">繼續閱讀</a>...</p>'
    },
    {
      'id': 2,
      'href': 'http://blog.miniasp.com/post/2016/03/22/Does-Certification-Exam-Useful.aspx',
      'title': '考證照真的沒用嗎？一個從業 20 年的 IT 主管告訴你他怎麼看！',
      'date': '2016/03/22 19:28',
      'author': 'Will 保哥',
      'category': '心得分享',
      'category-link': 'http://blog.miniasp.com/category/%E5%BF%83%E5%BE%97%E5%88%86%E4%BA%AB.aspx',
      // tslint:disable-next-line:max-line-length
      'summary': '<p>其實無論在哪個國家都有推行證照制度，且行之有年，台灣當然也不例外，這件事一開始的立意都是好的，就是希望透過一套公平的考試制度，評估一個人的技術能力是否達到一定程度水準，不但能當成一個人的能力指標，也可以讓大家有個明確目標朝專業之路邁進。其他的行業我不清楚，但就我本身熟悉的 IT 產業來說，不知何年何月開始，大家開始對證照制度嗤之以鼻、不屑一顧，甚至覺得是一個人能力的<strong>負指標</strong> (也就是能力不好的人才需要靠證照證明自己)。你說這現象是何等的詭異？是什麼樣的天時、地利、人和，可以讓一個原本立意良善的制度，變成人人喊打的落水狗，可能連有張證照都還不敢承認的地步。今天，就來談談我的個人見解。</p><p>... <a class=\"more\" href=\"http://blog.miniasp.com/post/2016/03/22/Does-Certification-Exam-Useful.aspx#continue\">繼續閱讀</a>...</p>'
    },
    {
      'id': 3,
      'href': 'http://blog.miniasp.com/post/2016/03/14/ASPNET-MVC-Developer-Note-Part-28-Understanding-ModelState.aspx',
      'title': 'ASP.NET MVC 開發心得分享 (28)：深入瞭解 ModelState 內部細節',
      'date': '2016/03/14 12:14',
      'author': 'Will 保哥',
      'category': 'ASP.NET MVC',
      'category-link': 'http://blog.miniasp.com/category/ASPNET-MVC.aspx',
      'summary': '<p>在 ASP.NET MVC 的 <strong>模型繫結</strong></p>'
    },
    {
      'id': 4,
      'href': 'http://blog.miniasp.com/post/2016/03/06/ASPNET-MVC-5-View-Roslyn-problem-workaround.aspx',
      'title': 'ASP.NET MVC 5.2.3 的 View 使用 Roslyn (C# 6.0) 編譯時的問題',
      'date': '2016/03/06 17:11',
      'author': 'Will 保哥',
      'category': 'ASP.NET MVC',
      'category-link': 'http://blog.miniasp.com/category/ASPNET-MVC.aspx',
      // tslint:disable-next-line:max-line-length
      'summary': '<p>最近發現目前的 ASP.NET MVC 5 最新版 (v5.2.3) 在搭配 Visual Studio 2015 進行開發時，在 View 頁面中使用 @Html.IdFor() 或 @Html.NameFor()在搭配使用特定 Lambda 語法時會輸出奇怪的字元，由於所有強型別的 HtmlHeper 表單欄位輸出的內部都會用到 IdFor() 與 Namefor() 這兩個 API，所以這個問題將會導致這些表單欄位 HTML 輸出的時候產生錯誤的 id 與 name 屬性，當表單 POST 回 Controller 時將無法正確執行模型繫結</p>'
    },
    {
      'id': 5,
      'href': 'http://blog.miniasp.com/post/2016/02/19/Useful-tool-PackageManagement-OneGet.aspx',
      'title': '介紹好用工具：Win 10 內建的 PackageManagement 套件管理器 (OneGet)',
      'date': '2016/02/19 11:55',
      'author': 'Will 保哥',
      'category': '介紹好用工具',
      'category-link': 'http://blog.miniasp.com/category/%E4%BB%8B%E7%B4%B9%E5%A5%BD%E7%94%A8%E5%B7%A5%E5%85%B7.aspx',
      'summary': '<p>...</p>'
    },
    {
      'id': 6,
      'href': 'http://blog.miniasp.com/post/2016/02/02/JavaScript-novice-advice-and-learning-resources.aspx',
      'title': '我要成為前端工程師！給 JavaScript 新手的建議與學習資源整理',
      'date': '2016/02/02 17:48',
      'author': 'Will 保哥',
      'category': '前端工程研究',
      'category-link': 'http://blog.miniasp.com/category/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E7%A0%94%E7%A9%B6.aspx',
      'summary': '<p>今年有越來越多企業開始跟我們接洽企業內訓的事，...</p>'
    }
  ];

  constructor() {

  }

  removeKeyword() {
    this.keyword = '';
  }
}
