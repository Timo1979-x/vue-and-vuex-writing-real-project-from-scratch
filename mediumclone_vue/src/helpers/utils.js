export function range(start, end) {
  // let result = []
  // for (let i = start; i <= end; i++) {
  //   result.push(i)
  // }
  // return result
  return [...Array(end - start + 1).keys()].map((x) => x + start)
}
