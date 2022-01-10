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
    for (i = 0; i < nums.length;i++){
      if (nums[i].typeof = false) {
        nums.pop(nums[i])
      }
    }
    return nums
  },

  drop: function drop(nums, n) {
    var cur = []
    for (i = 0; i < nums.length; i++){
      if (nums[i] > n) {
        cur.push(nums[i])
      }
    }
    return cur
  },

  dropright: function dropright(nums, n) {
    for (i = 0; i < nums.length; i++){
      if (nums[i] >= n) {
        nums.pop(nums[i])
      }
    }
    return nums
  },


}
