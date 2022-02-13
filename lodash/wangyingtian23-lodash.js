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

  map: function(collection, predicate ) {
    predicate = this.func(predicate)
    let res = []
    for (let key in collection) {
      res.push(predicate(collection[key], Number(key), collection))
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
      if (Array.isArray(nums[i])) {
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

  groupBy: function(collection, f) {
    var map = {}
    f = this.iteratee(f)
    for (let item of collection) {
      let key = f(item)
      if (!(key in map)) {
        map[key] = [item]
      } else {
        map[key].push(item)
      }
    }
    return map
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
      predicare = this.func(predicare)
    for (let key in collection) {
      let it = predicare(collection[key])
      if (it) {
        return true
      }
    }
    return false
  },

  negate: function(f) {
    return function (...nums) {
      return !f(...nums)
    }
  },

  identity: function (val) {
    return val
  },

  intersection: function (array1, array2) {
    return intersectionBy(array1, array2)
  },

  intersectionBy: function intersectionBy(array1, array2, predicate) {
    var result = []
    var set = new Set(array2.map(predicate))
    for (var i = 0; i < array1.length; i++){
      if (set.has(predicate(array1[i]))) {
        result.push(array1[i])
      }
    }
    return result
  },

  intersectionWith: function (array1, array2, comparor) {
    var result = []
    for (var i = 0; i < array1.length; i++){
      for (var j = 0; j < array2.length; j++){
        if (comparor(array1[i], array2[j])) {
          result.push(array1[i])
        }
      }
    }
    return result
  },

  property: function (name) {
    return function (obj) {
      return this.get(obj, name)
    }
  },

  get: function get(obj, path) {
    var names = path.toPath(path)
    for (var name of names) {
      obj = obj[name]
      if (obj == null) {
        return obj
      }
    }
    return obj
  },
  toPath: function toPath(path) {
    if (typeof path == 'string') {
      return path.split('[')
      .flatMap(it => it.split(']'))
      .flatMap(it => it.split('.'))
      .filter(it => it)
    }
    return path
  },

  matches: function (target) {
    return function (obj) {
      for (var key in target) {
        if (obj[key] !== target[key]) {
          return false
        }
      }
      return true
    }
  },
  isMatch: function isMatch(obj, src) {
    for (key in src) {
      if (src[key] && typeof src[key] === 'object') {
        if (!isMatch(obj[key], src[key])) {
          return false
        }
      } else {
        if (src[key] !== obj[key]) {
          return false
        }
      }
    }
    return true
  },

  matchesProperty: function (path, val) {
    return function (obj) {
      return get(obj,path) === val
    }
  },

  iteratee: function iteratee(predicate) {
    if (typeof predicate === 'string') {
      predicate = this.property(predicate)
    }
    if (Array.isArray(predicate)) {
      predicate = this.matchesProperty(...predicate)
    }
    if (predicate && typeof predicate === 'object') {
      predicate = this.matches(predicate)
    }
    return predicate
  },

  findKey: function (obj, predicate) {
    predicate = iteratee(predicate)
  },

  ary: function (f, n = f.length) {
    return function (...args) {
      return f.call(this,...args.slice(0, n))
    }
  },

  unary: function (f) {
    return function (...args) {
      return f(...args.slice(0, 1))
    }
  },

  spread: function (f) {
    return function (ary) {
      return f(...ary)
    }
  },

  flip: function (f) {
    return function (...args) {
      return f(...args.reverse())
    }
  },

  before: function (n, f) {
    var c = 0
    var result
    return function (...args) {
      if (c < n) {
        result = f(...args)
        c++
      }
      return result
    }
  },
  memoize: function (f, resolver = it => it) {
    var map = new Map()
    return function (...args) {
      var key = resolver(...args)
      if (map.has(key)) {
        return map.get(key)
      }
      var result = f(...args)
      map.set(key, result)
      return result
    }
  },

  shuffle: function () {

  },

  curry: function curry(f, n = f.length) {
    return function (...args) {
      if (args.length < n) {
        return curry(f.bind(null, ...args), n - args.length)
      } else {
        return f(...args)
      }
    }
  },

  bind: function bind(f, thisArg, ...flexArgs) {
    return function (...args) {
      var bindArgs = flexArgs.slice()
      var i = 0
      for (var j = 0; j < bindArgs.length; j++){
        if (bindArgs[j] === _) {
          bindArgs[j] = args[i++]
        }
      }
      bindArgs.push(...args.slice(i))
      return f.apply(thisArg,bindArgs)
    }
  }
}
