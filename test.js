// // function throttle(fn, delay) {
// //   let previous = 0;
// //   return function() {
// //     var _this = this;
// //     var args = arguments;
// //     var now = new Date();
// //     if (now - previous > delay) {
// //       fn.apply(_this, args);
// //       previous = now;
// //     }
// //   };
// // }

// const map = new Map();

// function duplicate(arr) {
//     for (const item of arr) {
//         // console.log('item,', item.name);
//         map.set(item.name, item.id);
//         if (!map.has(item.name)) {
//             map.set(item.id, item.name);
//         }
//     }
//     return Array.from(map);
// }

// const arr = [{
//         id: "1",
//         name: "建国老w俄佛教饿哦福建饿哦福建饿大哥"
//     },
//     {
//         id: "2",
//         name: "建国老w俄佛教饿哦福建饿哦福建饿大哥"
//     },
//     {
//         id: "3",
//         name: "建国老w俄佛教饿哦福建饿哦福建饿大哥"
//     },
//     {
//         id: "4",
//         name: "建国老w俄佛教饿哦福建饿哦福建饿大哥"
//     },
//     {
//         id: "5",
//         name: "建国老w俄dsdsds佛教饿哦福建饿哦福建饿大哥"
//     }
// ];

// console.log('map: ', duplicate(arr) instanceof Array);
// const map2 = duplicate(arr);
// for (const i of map2) {
//     console.log(i[0]);
// }
// console.log('map2:', map2);
// // const arrs = [...map2].flat();
// // console.log('arrs: ', arrs);
// const temp = map2.map(item => item)
// console.log('temp: ', temp);
// // arr
// // console.log('map2;', ...Array.from(map2));
// // let arr = [..map];

// // console.log('map: ', ...duplicate(arr));

// const STATUS = {
//     'kk': '未审核',
//     1: '审核通过',
//     2: '审核不通过',
//     3: '已发布'
// };
// console.log(STATUS)
// console.log(STATUS.kk);
// console.log(STATUS[1]);

// const temp = Object.entries(STATUS).map((item) => {
//     console.log(item);
//     return item;
// })

// console.log("temo", temp);

// 三数之和
// 采用双重循环，外存i控制遍历次数，内存通过左右指针判断是否相等
