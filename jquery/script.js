// element selectors
$("h3").css({ border: "3px solid blue" });

// class selectors
$(".wrapper").css({ border: "3px solid red" });

// id selectors
$("#clients").css({ border: "3px solid yellow" });

// first & last
$("header nav li:first").css({ border: "2px solid red" });
$("header nav li:last").css({ border: "2px solid red" });

// first-child & last-child 如果 ul 是 #contact 的第一子元素
$("#contact ul:first-child").css({ border: "2px solid red" });
$("#contact ul:last-child").css({ border: "2px solid red" });

// even
$("header nav li:even").css({ border: "2px solid blue" });

// odd
$("header nav li:odd").css({ border: "2px solid yellow" });

// not 除了 contact 的 selection
$("section:not('#contact')").css({ border: "2px solid green" });

// less than
$("#social-nav li:lt(3)").css({ border: "2px solid blue" });

// greater than
$("#social-nav li:gt(2)").css({ border: "2px solid blue" });

// attribute filters
$("div[class]").css({ border: "2px solid pink" });

// attribute with specific value
$("img[alt-quote").css({ border: "2px solid purple" });

// next
$("#contact-methods").next().css({ border: "3px solid red" });

// prev
$("#social-nav").prev().css({ border: "3px solid red" });

// parent
$(".banner-title").parent().css({ border: "3px solid pink" });

// children
$("#social-nav").children().css({ border: "3px solid green" });

// find 找 #contact 中的 .facebook
$("#contact").find(".facebook").css({ border: "3px solid purple" });

// closest 往上找 parent = .wrapper
$("#social-nav").closest(".wrapper").css({ border: "3px solid orange" });

// CHANING
$("#contact-methods")
  .css({ border: "2px solid red" })
  .next()
  .css({ border: "2px solid green" })
  .closest("section")
  .css({ border: "2px solid blue" });

// ADDING & CHANGING CONTENT
var tweet =
  "<div style='margin: 20px 0; padding: 10px;background: #eee'>hello</div>";

$("#tweets div").append(tweet);
// .append() - adds content to bottom of the element
// .prepend() - adds content to top of the element
// .before() - adds content before element
// .after() - adds content after element
// .html() - changes the whole html of the element
// .text() - changes the text of an element

WRAP & UNWRAP;
// wrap() - wraps all matched elements indivdually
// unwrap() - unwraps all matched elements
// wrapAll() - wraps all element combined with 1 single element
var button = $(".button");
var wrapped = true;
var wrapper = "<div class='wrapper'>";

function handleClick() {
  if (wrapped) {
    $("section").unwrap();
    wrapped = false;
    button.text("Wrap");
  } else {
    $("section").wrapAll(wrapper);
    wrapped = true;
    button.text("UnWrap");
  }
}

// 每次按鈕被點擊時重新設置 onclick 事件處理器
button[0].onclick = handleClick;

// REMOVING CONTENT
// .empty() - empties the inner HTML of an element
// .remove() - removes the element completely

// CHANGING ATTRIBUTES
// .removeAttr() - removes an attribute completely
// .attr() - can read or set ant attribute

// CSS WITH JQUERY
$("#social-nav").css({
  top: "-400px",
  left: "150px",
  opacity: "0.5",
  "border-top": "4px solid red",
});

// ADDING & REMOVING CLASSES
// removeClass() - removes a class from the matched element(s)
// addClass() - adds a class to the matched element(s)
// toggleClass - toggles the class on and off on the matched element(s)
$("header, wrapper").removeClass("wrapper");
// 找 header 下最近的 div 新增 class
$("header > div").addClass("wrapper");
var button = $("#lead-banner a");
button[0].onclick = function () {
  $("#points-of-sale").toggleClass("open");
  return false; // 防止默認的行為發生
};

// BINDING & UNBINDING EVEENTS
// on() - binds an event to matched element(s)
// off() - unbinds event from matched element(s)
var myLis = $("#points-of-sale li");

myLis.on("click", function () {
  myLis.not(this).css({ background: "" });
  $(this).css({ background: "pink" });
});

// EVENT HELPERS
$("#lead-banner").dblclick(function () {
  alert("you double clicked me");
  $("#lead-banner").off("dblclick");
});

// THE EVENT OBJECT IN JQUERY
$("*").click(function (e) {
  console.log(e.target);
  console.log("The event type is: " + e.type);
  e.stopPropagation(); // 阻止點擊事件向父元素傳播
});

ANIMATIONS;

function complete() {
  alert("Animation complete");
}

$("section > h2").on("click", function () {
  $(this).animate({ width: "500px", height: "100px" }, 1000, "swing", complete);
});

// FADING ELEMENTS IN & OUT
$("section > h2").on("click", function () {
  // $(this).fadeOut(2000).fadeIn(500);
  $(this).fadeTo(1000, 0.2).fadeTo(1000, 0.8);
});

// HIDE & SHOW ELEMENTS
$("img[alt=map]").on("click", function () {
  //$(this).hide(1000).show(1000);
  $("section > h2").toggle(1000);
});

// SLIDING ELEMENTS
$(".slide-button-up").on("click", function () {
  $("#lead-banner").slideUp(100);
});
$(".slide-button-down").on("click", function () {
  $("#lead-banner").slideDown(4000, function () {
    alert("animation complete");
  });
});
$(".slide-button-up").on("click", function () {
  $("#lead-banner").slideToggle(1000, function () {
    alert("animation complete");
  });
});

// FADING ANIMATION
var allQuotes = $("blockquote");
var currentQuote = 0;

function changeQuote() {
  $(allQuotes[currentQuote]).fadeOut(200, function () {
    if (currentQuote == allQuotes.length - 1) {
      currentQuote = 0;
    } else {
      currentQuote++;
    }
    $(allQuotes[currentQuote]).fadeIn(200);
  });
}

var quoteTimer = setInterval(changeQuote, 3000);

// SLIDING ANIMATION
var items = $("#points-of-sale li");

items.on("click", function () {
  $(this).find("p").slideToggle(500);
});

$(".rslides").responsiveSlides();
