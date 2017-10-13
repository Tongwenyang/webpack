import _ from "lodash";
import "./style.css";
import Icon from "./panda.jpg";
import Data from './data.xml';
function component () {
    var element = document.createElement('div');
  
    /* 需要引入 lodash，下一行才能正常工作 */
    element.innerHTML = _.join(['Hello','webpack'], ' ');
    element.classList.add("hello");

    //  将图像添加到我们现有的div
    var myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    console.log(Data);

    return element;
  }
  
  document.body.appendChild(component());