webpackJsonp([1],{

/***/ "lVK7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("dLdd");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);

// import Print from './print';

function component () {
    var element = document.createElement('div');
    var btn = document.createElement("button");

    /* 需要引入 lodash，下一行才能正常工作 */
    element.innerHTML = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.join(['Hello','webpack'], ' ');
    // element.onClick = Print.bind(null, 'Hello webpack!');
    btn.innerHTML = "Click me and check the console!";
    btn.onclick = printMe;

    element.appendChild(btn);

    return element;
  }
  

  let element = component();      // 当print.js 改变导致页面重新渲染时，重新获取渲染的元素
  document.body.appendChild(element);

  if (false) {
    module.hot.accept ('./print.js', ()=>{
      console.log('Accepting the updated printMe mudle!');
      document.body.removeChild(element);
      element = component();    //重新渲染页面，绑定事件
      document.body.appendChild(element);
    })
  }

/***/ })

},["lVK7"]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQSw0QkFBNEI7QUFDNUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQSxLQUFLO0FBQ0wsRyIsImZpbGUiOiJtYWluLmU5YmQ1NWU5NDNkZmE5NTk0Nzc0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xyXG4vLyBpbXBvcnQgUHJpbnQgZnJvbSAnLi9wcmludCc7XHJcblxyXG5mdW5jdGlvbiBjb21wb25lbnQgKCkge1xyXG4gICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHZhciBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG5cclxuICAgIC8qIOmcgOimgeW8leWFpSBsb2Rhc2jvvIzkuIvkuIDooYzmiY3og73mraPluLjlt6XkvZwgKi9cclxuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gXy5qb2luKFsnSGVsbG8nLCd3ZWJwYWNrJ10sICcgJyk7XHJcbiAgICAvLyBlbGVtZW50Lm9uQ2xpY2sgPSBQcmludC5iaW5kKG51bGwsICdIZWxsbyB3ZWJwYWNrIScpO1xyXG4gICAgYnRuLmlubmVySFRNTCA9IFwiQ2xpY2sgbWUgYW5kIGNoZWNrIHRoZSBjb25zb2xlIVwiO1xyXG4gICAgYnRuLm9uY2xpY2sgPSBwcmludE1lO1xyXG5cclxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYnRuKTtcclxuXHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxuICB9XHJcbiAgXHJcblxyXG4gIGxldCBlbGVtZW50ID0gY29tcG9uZW50KCk7ICAgICAgLy8g5b2TcHJpbnQuanMg5pS55Y+Y5a+86Ie06aG16Z2i6YeN5paw5riy5p+T5pe277yM6YeN5paw6I635Y+W5riy5p+T55qE5YWD57SgXHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuXHJcbiAgaWYgKG1vZHVsZS5ob3QpIHtcclxuICAgIG1vZHVsZS5ob3QuYWNjZXB0ICgnLi9wcmludC5qcycsICgpPT57XHJcbiAgICAgIGNvbnNvbGUubG9nKCdBY2NlcHRpbmcgdGhlIHVwZGF0ZWQgcHJpbnRNZSBtdWRsZSEnKTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChlbGVtZW50KTtcclxuICAgICAgZWxlbWVudCA9IGNvbXBvbmVudCgpOyAgICAvL+mHjeaWsOa4suafk+mhtemdou+8jOe7keWumuS6i+S7tlxyXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG4gICAgfSlcclxuICB9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IGxWSzdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sInNvdXJjZVJvb3QiOiIifQ==