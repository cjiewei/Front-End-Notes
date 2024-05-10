## 什麼是 HTML 語意化?

就是用合乎語意的 HTML 標籤開發，例如：`<form>`、`<table>`，標籤會清楚定義其內容、讓頁面兼具良好的語意和結構。

### 為什麼要使用 HTML 語意化標籤

- ### 提升 SEO

  比起使用非語意化的標籤例如：`div`、`span`，語意化標籤可以幫助搜尋引擎重視在「標題」、「連結」裡的關鍵字，這樣可以讓有語意

  化標籤的網頁更容易被使用者搜尋到。

- ### 便於開發

  提升程式碼的可讀性、幫助開發者之間更容易理解網頁架構、減少差異化。ex: 你可以用 div 來做一個按鈕，但如果用 button 對其他開

  發者而言會更一目瞭然知道那是個按鈕。

- ### 無障礙閱讀器

  HTML 語意化網站可以方便其他設備解析內容，ex: screen reader。

## DOMContentLoaded, load, beforeunload, unload 的觸發時機?

### DOMContentLoaded 與 load 事件

`DOMContentLoaded` 在 HTML 完全載入、解析後就會觸發，也就是 DOM 建構完成 (CSS、圖片可能還在跑)。

有了 DOM 樹，開發者就能透過 JS 去操作 DOM 節點；相對地，沒有 DOM 節點，就沒辦法進行 JS 操作，所以 `DOMContentLoaded`

幫助開發者偵測什麼時候可以執行這些 JS 腳本。

`load (window.onload)` 在 HTML、CSS、圖片等完全載入後才觸發，因此先觸發 `DOMContentLoaded` 才是 `load`。

如果 JS 會去改動到樣式、圖片等，就會更適合用 `load` 而非 `DOMContentLoaded` 幫助我們偵測。

`readyState` 有三種值：

- `loading`：代表 HTML 文件正在解析中。

- `interactive`：HTML 解析完成，觸發 `DOMContentLoaded`，可以有 JS 的互動了。

- `complete`：觸發 `load`。

```js
switch (document.readyState) {
  case "loading":
    // 文件讀取中。
    break;
  case "interactive":
    // 文件已經完成讀取。可以使用 DOM 元素。
    var span = document.createElement("span");
    span.textContent = "A <span> element.";
    document.body.appendChild(span);
    break;
  case "complete":
    // 頁面已經完成讀取。
    console.log(
      "The first CSS rule is: " + document.styleSheets[0].cssRules[0].cssText
    );
    break;
}
```

### beforeunload 與 unload 的觸發時機與作用

`beforeunload (window.onbeforeunload)` 在使用者離開網頁前被觸發，ex：使用者要去別頁，跳出彈跳視窗說 "確定要離開嗎"

它的用途是可以讓開發者在使用者要離開前，能夠做點什麼。

`unload (window.onunload)` 是在使用者真的離開網頁後觸發，所以是在 `beforeunload` 觸發之後。用途通常會是用來埋資料分析，因為

是在使用者離開網頁時觸發，我們就可以得知使用者確切是在什麼時機離開了網頁。

#### ✅ DOMContentLoaded 與 load 事件是在偵測 DOM 與網頁的建置完成，是在生命週期的開始。

#### ✅ beforeunload 與 unload 則是在偵測週期的結尾，意即在網頁要被關閉時觸發所有的東西。

#### ✅ DOMContentLoaded 與 load 事件是在偵測 DOM 與網頁的建置完成，是在生命週期的開始。

#### ✅ beforeunload 與 unload 則是在偵測週期的結尾，意即在網頁要被關閉時觸發所有的東西。

<br>

## `<script>` 標籤應該放在 HTML 甚麼位置? `<link>` 呢?

### `<script>`應該放在 HTML 文件的什麼位置

HTML 解析的順序是由上往下，瀏覽器在解析 HTML 時，如果遇到 `<script>`，會先下載、解析完這些 JS，再往下繼續解析 HTML 其他內

容。當 JS 檔案特別大、或是檔案是從外部資源載入的，如果加載過程太長，會阻塞 HTML 解析，將會導致頁面長時間停滯，影響使用者體驗。

大部分會建議 `<script>` 放置在 `</body>` 底部前，因為：

- **畫面更快呈現：** 瀏覽器會先解析完整個 HTML，再下載 JS 檔案、解析，因此使用者可以在第一時間看到畫面，有更好的用戶體驗。

- **避免 Script 異動到還未載入的 HTML 元素：** Script 有可能會異動到 HTML 元素，因此將 `<script>` 置於 `<body>` 的底部，

  可以確保 HTML 元素已經完全載入，減少異動元素造成錯誤的風險。

但是將 `<script>` 放在底部不算最優解，因為網頁一開始會沒有功能性。更好的是透過 **_defer_** 和 **_async_** 一邊解析頁面，一邊下載 JS。

### `<link>` 應該放在 HTML 文件的什麼位置

```HTML
<html>
  <head>
    <link rel="stylesheet" type="text/css" href="style.css" />
  </head>
  <body>
    <!-- 網頁內容 -->
  </body>
</html>
```

`<link>` 放置在 `<head>` 內，可以確保瀏覽器在渲染內容前已經載入所需的外部資源，所以當使用者開始看到畫面時，樣式不會有奇怪的變動。

如果把 `<link>` 放在頁面的底部，那麼當瀏覽器載入時，它會先載入頁面的內容，然後再載入 CSS。因此，樣式一開始會是瀏覽器預設，接著

才會變成預期的樣式。

<br>

## `<script>` 的 async 與 defer 有什麼不同?

### 為什麼需要 `async` 和 `defer`

這兩個屬性都是在跟瀏覽器說，不用等腳本的載入，繼續建構 DOM。這讓 DOM 的建構與 JS 腳本的載入能夠同步進行，讓使用者體驗更好。

### `async` 和 `defer` 的不同

**<span style="font-size:18px; color:#0e4bad;">defer</span>**

defer 會告訴瀏覽器，不用等 JS 的下載與執行，可以繼續跑 HTML 的解析與 DOM 的建構；在建構 DOM 的同時，會在背景中載入 JS，因

此 defer 不會擋住畫面的渲染。如果 JS 腳本在 HTML 解析完成前就下載好，會等到 HTML 都完全解析後，才會執行。因此如果有腳本是需要

等 HTML 解析完、DOM 完整建立後才能載入，那麼會需要選 defer。

<br>

如果同時有多個帶有 defer 屬性的 `<script>` 資源，瀏覽器會同步下載，只是會依照在 HTML 中的順序執行，這可以確保執行時是依照我們

想要的順序。ex：腳本相依賴，例如 A 依賴 B，就要確保 A 是在 B 之前執行，這時會選擇用 defer。

**<span style="font-size:18px; color:#0e4bad;">async</span>**

同樣會告訴瀏覽器，在解析 HTML 時不用等 JS 腳本的下載與執行。但跟 defer 不同在於，async 的腳本載入與 HTML 解析是彼此獨立的，

因此腳本下載完就會馬上執行，而不是像 defer 會等到 HTML 解析完才執行。

<br>

除了跟 DOM 的建構是彼此獨立外，帶有 async 屬性的腳本跟其他的腳本也是彼此獨立，哪個先下載完就先執行。雖然在下載時不會暫停

HMTL 的解析，但在開始執行腳本時就會暫停解析。所以腳本載入、 DOM、其他腳本沒有相互依賴關係。
