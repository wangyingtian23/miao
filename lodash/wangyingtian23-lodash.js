var wangyingtian23 = {
  chunk: function chunk(array, size) {
    var result = 0
    var ary = []
    var cur = []
    for (i = 0; i < array.length; i++) {
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
    for (i = 0; i < nums.length; i++) {
      if (nums[i]) {
        res.push(nums[i])
      }
    }
    return res
  },

  drop: function drop(nums, n = 1) {
    var cur = []
    for (i = 0; i < nums.length; i++) {
      if (nums[i] > n) {
        cur.push(nums[i])
      }
    }
    return cur
  },

  dropRight: function dropRight(nums, n = 1) {
    for (i = 0; i < n; i++) {
      nums.pop()
    }
    return nums
  },

  head: function (nums) {
    if (!nums) {
      return undefined
    } else {
      return nums[0]
    }

  },

  initial: function (nums) {
    var cur = []
    for (i = 0; i < nums.length - 1; i++) {
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
    for (i = nums.length - 1; i >= 0; i--) {
      cur.push(nums[i])
    }
    return cur
  },

  uniq: function uniq(nums) {
    var cur = []
    for (i = 0; i < nums.length; i++) {
      if (!cur.includes(nums[i])) {
        cur.push(nums[i])
      }
    }
    return cur
  },

  without: function without(nums, ...val) {
    var cur = []
    for (i = 0; i < nums.length; i++) {
      if (!val.includes(nums[i])) {
        cur.push(nums[i])
      }
    }
    return cur
  },

  map: function map(nums, f) {
    var res = []
    nums.forEach((itme, idx) => {
      res.push(f(itme, idx, nums))
    });
    return res
  },

  find: function find(nums, predicare) {
    if (typeof predicare !== 'function') {
      predicare = this.func(predicare)
    }
    for (key in nums) {
      if (predicare(nums[key])) {
        return nums[key]
      }
    }
    return undefined
  },

  filter: function filter(nums, predicare) {
    var result = []
    if (typeof predicare !== 'function') {
      predicare = this.func(predicare)
    }
    for (key in nums) {
      if (predicare(nums[key])) {
        result.push(nums[key])
      }
    }
    return result
  },

  fill: function fill(nums, val, start = 0, end = nums.length) {
    for (i = start; i < end; i++) {
      nums[i] = val
    }
    return nums
  },

  indexOf: function indexOf(nums, val, fromIndex = 0) {
    for (i = fromIndex; i < nums.length; i++) {
      if (nums[i] == val) return i
    }
    return -1
  },

  flattenDepth: function flattenDepth(nums, n = 1) {
    if (n == 0) {
      return nums.slice()
      //return Array.from(ary)
      //return [...ary]
    }
    var res = []

    for (i = 0; i < nums.length; i++) {
      if (nums.isArray(nums[i])) {
        res = res.push(...flattenDepth(nums, n - 1))
      } else {
        res.push(nums[i])
      }
    }
    return res
  },

  flattenDeep: function flattenDeep(nums) {
    var res = []
    for (i = 0; i < nums.length; i++) {
      var item = nums[i]
      if (Array.isArray(item)) {
        res.push(...flattenDeep(item))
      } else {
        res.push(item)
      }
    }
    return res
  },

  flatten: function flatten(nums) {
    var res = []
    for (i = 0; i < nums.length; i++) {
      var item = nums[i]
      if (Array.isArray(item)) {
        res.push(...item)
      } else {
        res.push(item)
      }
    }
    return res
  },

  max: function max(nums) {
    var maxidx = -Infinity
    if (nums.length == 0) {
      return undefined
    }
    for (i = 0; i < nums.length; i++) {
      if (nums[i] > maxidx) {
        maxidx = nums[i]
      }
    }
    return maxidx
  },

  groupBy: function groupBy(nums, iteratee) {
    var gruoped = {}
    nums.forEach(it => {
      var groupName = iteratee(it)
      if (gruoped[groupName]) {
        gruoped[groupName].push(it)
      } else {
        gruoped[groupName] = [it]
      }
    })
    return grouped
  },

  mapValues: function mapValues(obj, mapper) {
    var res = {}
    for (var key in obj) {
      var val = obj[key]
      res[key] = mapper(val, key)
    }
    return res
  },

  every: function every(nums, predicare) {
    if (typeof predicare !== 'function') {
      predicare = this.func(predicare)
    }
    for (key in nums) {
      if (!predicare(nums[key])) {
        return false
      }
    }
    return true
  },

  some: function some(nums, predicare) {
    for (i = 0; i < nums.length; i++) {
      if (predicare(nums[i])) {
        return true
      }
    }
    return false
  },

  negate: function negate(f) {
    return function (...nums) {
      return !f(...nums)
    }
  }
}
