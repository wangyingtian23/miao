var wangyingtian23 = {
  func: function func(predicate) {
    let val = predicate
    if (typeof (val) == "object") {
      if (Array.isArray(val)) {
        let t = {}
        t[val[0]] = val[1]
        val = t
      }
      predicate = function (it) {
        for (let key in val) {
          var flag = true
          if (val[key] != it[key]) {
            flag = false
            break
          }
        }
        return flag
      }
    } else {
      predicate = it => it[val]
    }
    return predicate
  },

  chunk: function(array, size) {
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

  compact: function(nums) {
    var res = []
    for (i = 0; i < nums.length; i++) {
      if (nums[i]) {
        res.push(nums[i])
      }
    }
    return res
  },

  drop: function(nums, n = 1) {
    var cur = []
    for (i = 0; i < nums.length; i++) {
      if (nums[i] > n) {
        cur.push(nums[i])
      }
    }
    return cur
  },

  dropRight: function(nums, n = 1) {
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

  uniq: function(nums) {
    var cur = []
    for (i = 0; i < nums.length; i++) {
      if (!cur.includes(nums[i])) {
        cur.push(nums[i])
      }
    }
    return cur
  },

  without: function(nums, ...val) {
    var cur = []
    for (i = 0; i < nums.length; i++) {
      if (!val.includes(nums[i])) {
        cur.push(nums[i])
      }
    }
    return cur
  },

  map: function(collection, f) {
    f = this.func(f)
    let res = []
    for (let key in collection) {
      res.push(f(collection[key], Number(key), collection))
    }
    return res
  },

  find: function(collection, predicare) {
    if (typeof predicare !== 'function') {
      predicare = this.func(predicare)
    }
    for (key in collection) {
      if (predicare(collection[key])) {
        return collection[key]
      }
    }
    return undefined
  },

  filter: function(collection, predicare) {
    var result = []
    if (typeof predicare !== 'function') {
      predicare = this.func(predicare)
    }
    for (key in collection) {
      if (predicare(collection[key])) {
        result.push(collection[key])
      }
    }
    return result
  },

  fill: function(nums, val, start = 0, end = nums.length) {
    for (i = start; i < end; i++) {
      nums[i] = val
    }
    return nums
  },

  indexOf: function(nums, val, fromIndex = 0) {
    for (i = fromIndex; i < nums.length; i++) {
      if (nums[i] == val) return i
    }
    return -1
  },

  flattenDepth: function(nums, n = 1) {
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

  flattenDeep: function(nums) {
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

  flatten: function(nums) {
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

  max: function(nums) {
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

  groupBy: function(nums, iteratee) {
    var map = {}
    iteratee = this.func(iteratee)
    for (let item of nums) {
      let key = iteratee(item)
      if (!(key in map)) {
        map[key] = [item]
      } else {
        map[key].push(item)
      }
    }
  },

  mapValues: function (obj, mapper) {
    if (arguments.length == 1) {
      return obj
    }
    if (typeof (mapper) != "function") {
      let val = mapper
      mapper = key => key[val]
    }
    var res = {}
    for (var key in obj) {
      res[key] = mapper(obj[key])
    }
    return res
  },

  every: function(nums, predicare) {
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

  some: function(collection, predicare) {
    if (typeof predicare !== 'function') {
      predicare = this.func(predicare)
    }
    for (key in collection) {
      let it = collection
      if (predicare(it, key, collection)) {
        return true
      }
    }
    return false
  },

  negate: function(f) {
    return function (...nums) {
      return !f(...nums)
    }
  }
}
