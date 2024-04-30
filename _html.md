# HTML

- 全名 ***HyperText Markup Language***

- 打造網頁的基礎架構，和 ***CSS*** (styling 用)，形成我們看到的漂亮網站。

- HTML 由 **Element** 組成以 **Tag** 表示，如: `<div>`、`<a>`、`<img>`。



## Structure

HTML 提供在 Web 上建立內容的標準化方法，遵守此結構可確保瀏覽器相容性和網頁的正確呈現。

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>網頁名稱</title>
</head>

<body>
    <!-- Content goes here -->
</body>

</html>
```

- `<!DOCTYPE html>`：聲明用，將文件定義為 HTML5 文件。告訴瀏覽器所使用的 HTML 語言版本是什麼的標準指令。

- `<html lang="en">`：HTML 頁面的根元素。lang 屬性指定文件語言為英文，告訴瀏覽器和搜索引擎該文件中的文字是用英文寫的。

    - `<head>`：meta data 的容器 (container)。通常包含：

        - `<meta charset="UTF-8">`：設定文件的字元編碼。UTF-8 幾乎涵蓋世界上所有的書寫系統。

        - `<meta name="viewport" content="width=device-width, initial-scale=1.0">`：***RWD*** 必要的 meta tag。確保頁面在不同裝置（尤其是行動裝置）上的正確大小縮放。

        - `<title>`：文件的標題，我們在瀏覽器分頁上看到的內容。

    - `<body>`：主要內容容器，頁面上顯示的所有內容（文字、圖像、影片等）都位於此處。



## Head

除了 charset、viewport 還可設定的有:
- description：提供網頁內容的簡短摘要，通常會顯示在搜尋引擎結果中，影響點閱率。  

`<meta name="description" content="Discover the latest updates and features of My Awesome Website.">`

- keywords：影響 SEO (搜尋引擎最佳化)。  

`<meta name="keywords" content="innovation, tech, design">`

- favicon：網頁分頁上的小 logo。如果未設定，則瀏覽器預設會在網站的根目錄中找到叫 favicon.ico 的檔案。  

`<link rel="icon" href="favicon.ico" type="image/x-icon">`  



## Tags & Attributes

- 要有開始和結束 tag。
```html 
<elementName> Content of the element </elementName>
```

- 沒有結束 tag 的叫 ***void tag*** (如: `/br`、`/img`)。

- 巢狀 Tags：在元素間建立父子關係，這種層次結構構成了 DOM 的基礎，樹狀表示內容。
```html
<parentElement>
    <childElement> Content inside child element </childElement>
</parentElement>
```

- Attributes 用來提供 Tags 的附加資訊，成對出現 name / value。  
```html
<a href="https://www.example.com">Visit Example</a>
```



## Grouping elements

- `<div>`：division 的縮寫，為區塊級元素 ***block container***，在頁面上建立一個區塊，用於將內容分組。
```html
<div class="section">
  <p>This is a paragraph within a div.</p>
</div>
```

- `<span>`：為內聯級元素 ***inline container***，用於挑出區塊中的特定內容，例如突出顯示文字部分或在段落中包裹圖示。
```html
<p>This is a <span class="highlight">highlighted</span>text.</p>
```



## Readonly elements

- 標題和段落：header 用於顯示標題，依字體大到小分為 H1 - H6；paragraph 用於顯示大量文字。
```html
<h1>This is a header</h1>
<p>This is a paragraph</p>
```

- 連結：用於連結到其他頁面。點擊後，用戶將被帶到連結頁面。

    - 用戶將被造訪維基百科網站。
    ```html
    <a href="https://en.wikipedia.org/wiki/HTML">Wikipedia</a>
    ```

    - 用戶端向 @example.com 發送電子郵件。
    ```html
    <a href="mailto:@example.com">send e-mail</a>
    ```

    - 將連結連接到伺服器上的檔案，用戶可以點擊連結下載該檔案。
    ```html
    <a href="report.txt" download>report</a>
    ```

- 清單：顯示項目列表。

    - unordered list `<ul>`

    - ordered list `<ol>`

    - list item `<li>`
    ```html
    <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    </ul>
    ```

- 表格：用於使用儲存格的行和列來顯示資料。

    - table `<table>`

    - table row `<tr>`

    - table header `<th>`

    - table cell `<td>`
    ```html
    <table>
        <tr>
            <th>Header 1</th>
            <th>Header 2</th>
            <th>Header 3</th>
        </tr>
        <tr>
            <td>Cell 1</td>
            <td>Cell 2</td>
            <td>Cell 3</td>
        </tr>
        <tr>
            <td>Cell 4</td>
            <td>Cell 5</td>
            <td>Cell 6</td>
        </tr>
    </table>
    ```



## Interactive elements

- Buttons：用於觸發操作，提交表單、打開連結、媒體播放。

    - button：預設按鈕

    - submit：用於提交表單

    - reset：用於重置表單
```html
<button type="submit">press me!</button>
```

- Input：用於從用戶上收集資料。

    - type：
        - text
        - password
        - email
        - number
        - radio
        - checkbox
        - search 
    
    - attribute：
        - placeholder：當輸入為空時出現提示文字
        - autofocus：輸入框有亮框提示
        - disabled：輸入已停用
        - readonly：輸入是唯讀的
        - size：輸入的大小
        - list：輸入選項列表

    - validation：
        - minlength：輸入的最小長度
        - maxlength：輸入的最大長度
        - required：需要輸入
    ```html
    <input type="text" placeholder="enter your name" />
    <label for="name">Name</label>
    <input type="text" id="name" name="name" minlength="3" maxlength="10" required />
    ```

- Form：表單是將許多 input 分組到單一結構的方式。

    - form：形式
    - label：標籤
    - input：輸入
    - button：按鈕
    ```html
    <form>
        <label for="name">Name</label>
        <input type="text" id="name" name="name" />
        <button type="submit">Submit</button>
    </form>
    ```

- TextArea：當需要收集多行文本。
    ```html
    <textarea name="description" rows="5" cols="50">
        Enter your description here
    </textarea>
    ```



## Style

- Styling 通常使用CSS，有些可只用 HTML 來設定文字樣式。
    - `b` 或 `strong`：粗體
    - `i` 或 `em`：斜體
    - `u`：底線
    - `s`：刪除線
    ```js
    <p>This is <b>bold</b> text.</p>
    ```
    
- 特殊字元
    - `&`：符號透過使用轉義 &
    - `<`：小於透過使用轉義 \&lt;
    - `>`：大於透過使用轉義 \&gt;
    - `"`：雙引號透過使用轉義 \&quot;
    ```js
    <p>This is &lt;b&gt;bold&lt;/b&gt; text.</p>
    ```

- 空白格：HTML 中任何空白字元（空格、換行符、製表符）都被視為單一空格。



## Media

- 影像：使用 `<img>`。

    - src：影像的路徑
    - srcset：影像的多個路徑
    - alt：替代文字以防圖像無法顯示

    ```html
    <img src="https://placekitten.com/g/200/300" srcset="https://placekitten.com/g/400/600 400w, https://placekitten.com/g/600/900 600w, https://placekitten.com/g/800/1200 800w" alt="A cute cat">
    ```
    使用 srcset 屬性來指定不同解析度的多個影像路徑，第一個影像路徑是預設顯示的路徑。

- 影片：使用 `<video>`。

    - src：視訊的路徑
    - type：影片類型
    - controls：影片透過控制顯示
    - autoplay：影片自動播放
    - loop：影片循環播放

    ```html
    <video controls>
    <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm" type="video/webm">
    <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4">
        Your browser does not support HTML5 video.
    </video>
    ```
    一個影片可以有多個來源，第一個來源是預設顯示的來源，如果不支援第一個來源，則使用第二個來源。  
    如果瀏覽器不支援任何格式，則顯示文字：Your browser does not support HTML5 video.

- 音訊：使用 `<audio>`。

    - src：音訊的路徑
    - type：音訊類型
    - controls：音訊透過控制顯示
    - autoplay：音訊自動播放
    - loop：音訊循環播放

    ```html
    <audio controls>
        <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3" type="audio/mpeg">
        <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.ogg" type="audio/ogg">
            Your browser does not support the audio element.
    </audio>
    ```
    第一個來源是預設播放的來源，如果不支援第一個來源，則使用第二個來源。  
    如果瀏覽器不支援任何格式，則顯示文字：Your browser does not support the audio element.


