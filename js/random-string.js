// Number.prototype.toString(radix) 生成随机字符串
// radix：可选，范围为 2 ～ 36，为进制基数，当 radix 在 2 ～ 9 区间内，转换为对应进制的数字，当 radix 在 10 ～ 36 区间内时，使用字母表示大于 10 的数字
// toString(36) 表示 10 ～ 26 的数字用 a ～ z 表示
let randomStr = () => Math.random().toString(36)
