// var arr = ['a', 'b', 'c'];
// console.log(Object.keys(arr)); //[ '0', '1', '2' ]

// var manageInfo = {
//     userName: '123',
//     displayName: '456',
//     phoneNumber: '789',
//     primaryMail: '666',
//     teststring: 'dsadsd',
//     test: 4
// }

// console.log(manageInfo['userName']) //123
// console.log(Object.keys(manageInfo['userName'])) //[ '0', '1', '2' ]
// console.log(Object.keys(manageInfo['teststring'])) //[ '0', '1', '2', '3', '4', '5' ]

// console.log(typeof(manageInfo['userName'])) //string
// console.log(manageInfo['test']) //4
// console.log(Object.keys(manageInfo['test'])) //[]
// console.log(typeof(manageInfo['test'])) //number


// const fieldTitleConfiguration = {
//     userName: '管理员帐号',
//     displayName: '管理员姓名',
//     phoneNumber: '管理员电话',
//     primaryMail: '管理员邮箱',
// };

// console.log(fieldTitleConfiguration['userName']) //管理员帐号
// console.log(typeof(fieldTitleConfiguration['userName'])) //string


var findRepeatNumber = function(nums) {​
    let res, result = [];​
    for (let i = 0; i < nums.length; i++) {​
        res = nums[i];​
        nums.shift();​
        if (nums.indexOf(res) == -1) {​ result.push(res)​ }​
        i--;​
    }​
    return result​
};​
var arr = [1, 2, 3, 3, 5, 4]​
console.log(findRepeatNumber(arr))