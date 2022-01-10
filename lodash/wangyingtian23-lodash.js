var  wangyingtian23 = {
  chunk: function (array, size) {
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
  }

}
