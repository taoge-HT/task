import index from './index.css';
import indexLess from './index.less';
import indexSass from './index.scss';
import jp2 from './logo.png';//19k 用模块的方式引入图片
import jp3 from './002.jpg';// 249k

var img2=document.createElement('img');
    img2.src=jp2;
    document.body.appendChild(img2);


var img3=document.createElement('img');
    img3.src=jp3;
    img3.style.width  = '400px'
    img3.style.height  = '300px'
    document.body.appendChild(img3);