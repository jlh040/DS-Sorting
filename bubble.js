function bubbleSort(_arr) {
  for (let i = 0; i < _arr.length; i++) {
    let swapped = false;
    for (let j = 0; j < _arr.length - i; j++) {
      if (_arr[j + 1] < _arr[j]) {
        let temp = _arr[j];
        _arr[j] = _arr[j + 1];
        _arr[j + 1] = temp;
        swapped = true
      }
    }
    if (!swapped) return _arr;
  }

  return _arr;
}

module.exports = bubbleSort;