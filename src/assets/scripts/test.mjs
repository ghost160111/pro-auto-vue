const float32 = new Float32Array(2)
const float64 = new Float64Array(4)

float32[0] = 42
float64[0] = 64

console.log(float32) // 42
console.log(float32.length) // 2
console.log(float32.BYTES_PER_ELEMENT) // 4

console.log(float64) // 42
console.log(float64.length) // 2
console.log(float64.BYTES_PER_ELEMENT) // 8

const two_dim_arr = [
  [0, 0],
  [0, 0]
]

const three_dim_arr = [
  [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ]
]

const four_dim_arr = [
  [
    [
      [2, 2, 9, 1],
      [1, 6, 0, 3],
      [3, 6, 7, 5],
      [4, 7, 8, 10]
    ]
  ]
]

console.log('\n', two_dim_arr)

for (let i = 0; i < two_dim_arr.length; i++) {
  console.log(two_dim_arr[i])
}

for (let i = 0; i < two_dim_arr.length; i++) {
  for (let j = 0; j < two_dim_arr[i].length; j++) {
    console.log(two_dim_arr[i][j])
  }
}

console.log('\n', three_dim_arr)

for (let i = 0; i < three_dim_arr.length; i++) {
  for (let j = 0; j < three_dim_arr[i].length; j++) {
    for (let k = 0; k < three_dim_arr[i][j].length; k++) {
      console.log(three_dim_arr[i][j][k])
    }
  }
}

console.log('\n', four_dim_arr)

//#region
try {
  const findElement = (dim1, dim2, dim3, dim4) => {
    let findValue = four_dim_arr[dim1][dim2][dim3][dim4]
    if (findValue) {
      console.log(`Result: ${findValue}`)
    } else if (!findValue) {
      console.log(`There is no element with a value of ${findValue}`)
    }
  }

  const dim1 = 0,
    dim2 = 0,
    dim3 = 1,
    dim4 = 1

  findElement(dim1, dim2, dim3, dim4)

  class Test {
    constructor(...tests) {
      ;(this.tests = tests), (this.length = this.tests.length)
    }
    addTest(...tests) {
      return Array.prototype.push.call(this.tests, ...tests)
    }
    test() {
      return {
        length: this.tests.length,
        tests: this.tests
      }
    }
  }

  const value = 1.8654565

  let test1 = value.toFixed(3),
    test2 = value.toExponential(3),
    test3 = value.toPrecision(3),
    test4 = value.toLocaleString(),
    test5 = value.toString(),
    test6 = value.valueOf(),
    test7 = 'Test 7'

  let testArr = []
  for (let i = 0; i < testArr.length; i++) {
    testArr.push(test1, test2, test3, test4, test5, test6)
  }

  const tests = new Test(test1, test2, test3, test4, test5, test6)
  tests.addTest(test7)

  console.log(tests.test())
} catch (error) {
  console.log(`${error.name}: ${error.message}`)
}
//#endregion
