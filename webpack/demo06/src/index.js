import _ from "lodash";
import printMe from "./print.js";

function component () {
    var element = document.createElement('div');
    var btn = document.createElement("button");

    /* 需要引入 lodash，下一行才能正常工作 */
    element.innerHTML = _.join(['Hello','webpack'], ' ');

    btn.innerHTML = "Click me and check the console!";
    btn.onclick = printMe;

    element.appendChild(btn);

    return element;
  }
  
  document.body.appendChild(component());