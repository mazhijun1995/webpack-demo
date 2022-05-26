import {list} from './list';
import './assets/css/index.less';
// import "@babel/polyfill";
alert(1234);
list();
// import img from './assets/images/1.png';
// import ttf from './assets/font/2.ttf';
// console.log(img);
// console.log(ttf);
if(module.hot){
    module.hot.accept('./list',()=>{
        console.log('更新list文件模块');
        list();
    })
}
const arr = [1,2,3];
arr.map(item=>{
    return item++;
})
console.log('我是index.js')