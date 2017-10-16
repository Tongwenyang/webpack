import _ from "lodash";
// import Print from './print';

function component () {
    var element = document.createElement('div');
    var btn = document.createElement("button");

    /* 需要引入 lodash，下一行才能正常工作 */
    element.innerHTML = _.join(['Hello','webpack'], ' ');
    // element.onClick = Print.bind(null, 'Hello webpack!');
    btn.innerHTML = "Click me and check the console!";
    btn.onclick = printMe;

    element.appendChild(btn);

    return element;
  }
  

  let element = component();      // 当print.js 改变导致页面重新渲染时，重新获取渲染的元素
  document.body.appendChild(element);

  if (module.hot) {
    module.hot.accept ('./print.js', ()=>{
      console.log('Accepting the updated printMe mudle!');
      document.body.removeChild(element);
      element = component();    //重新渲染页面，绑定事件
      document.body.appendChild(element);
    })
  }