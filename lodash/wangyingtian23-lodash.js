var  wangyingtian23 = {
  chunk: function chunk(array, size) {
    var result = 0
    var ary = []
    var cur = []
    for (i = 0; i < array.length; i++){
      ary.push(array[i])
      result++
      if (result == size) {
        result = 0
        cur.push(ary)
        ary = []
      }
    }
    if (result != 0) cur.push(ary)
    return cur
  },

  compact: function compact(nums) {
    var res = []
    for (i = 0; i < nums.length;i++){
      if (nums[i]) {
        res.push(nums[i])
      }
    }
    return res
  },

  drop: function drop(nums, n = 1) {
    var cur = []
    for (i = 0; i < nums.length; i++){
      if (nums[i] > n) {
        cur.push(nums[i])
      }
    }
    return cur
  },

  dropRight: function dropRight(nums, n = 1) {
    for (i = 0; i < n; i++){
      nums.pop()
    }
    return nums
  },

  head: function (nums) {
    if (!nums){
      return undefined
    } else {
      return nums[0]
    }

  },

  initial: function (nums) {
    var cur = []
    for (i = 0; i < nums.length - 1; i++){
      cur.push(nums[i])
    }
    return cur
  },

  last: function (nums) {
    var n = nums.length
    if (n == 0) {
      return undefined
    } else {
      return nums[n - 1]
    }
  },

  reverse: function (nums) {
    var cur = []
    for (i = nums.length - 1; i >= 0; i--){
      cur.push(nums[i])
    }
    return cur
  },

  uniq: function uniq(nums) {
    var cur = []
    for (i = 0; i < nums.length; i++){
      if (!cur.includes(nums[i])) {
        cur.push(nums[i])
      }
    }
    return cur
  },

  without: function without(nums, ...val) {
    var cur = []
    for (i = 0; i < nums.length; i++){
      if (!val.includes(nums[i])) {
        cur.push(nums[i])
      }
    }
    return cur
  },

  map: function map(nums, f) {
    var res = []
    nums.forEach((itme,idx) => {
      res.push(f(itme,idx,nums))
    });
    return res
  },

  filter: function filter(nums, cond) {
    var need = []
    for (i = 0; i < nums.length; i++) {
      if (cond(nums[i])) {
        need.push(nums[i])
      }
    }
    return need
  }

}
