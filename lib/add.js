function is(tar, type) {
  return Object.prototype.toString.call(tar) === `[object ${type}]`
}

function add(a, b) {
  // 实现该函数

  // 判断参数是否为数字  或者 字符串数字
  if (!is(a, 'Number') && !is(a-0, 'Number')) return
  if (!is(b, 'Number') && !is(b-0, 'Number')) return
  if (a-0 === 0) return b
  if (b-0 === 0) return a
  // 参数转为字符串
  var aStr = a + ''
  var bStr = b + ''

  //
  var zeroStr = '0000000000000000000000000000000000000000'

  // 使两位数字长度一样，避免循环 越界
  var maxLen = 0;
  var aLen = aStr.length, bLen = bStr.length;
  if (aLen > bLen) {
    maxLen = aLen;
    bStr = zeroStr.slice(0,aLen - bLen) + bStr
  } else {
    maxLen = bLen;
    aStr = zeroStr.slice(0,bLen - aLen) + aStr
  }

  var numC = []; // 结果集
  var decNum = 0; // 相加 满 10 的进位
  for (var idx = maxLen - 1; idx >= 0; idx--) {
    // 数字相加
    var sumNum = (aStr[idx] - 0) + (bStr[idx] - 0);
    // 计算加法后的 余数
    numC[idx] = (decNum + sumNum) % 10;
    // 进位 数字
    if(sumNum - 10 >= 0) {
      decNum = parseInt(sumNum / 10);
    }
    else {
      decNum = 0;
    }
  }
  // 进位 还有数据 加上
  if (decNum>0) {
    return decNum + numC.join('').replace(/,/, '')
  }
  return numC.join('').replace(/,/, '')
}

module.exports = add
