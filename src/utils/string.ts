export function reverse(str: string) {
  let output = str.split('')

  for (let i = 0, j = str.length - 1; i < j; i++, j--) {
    const tmp = output[i]
    output[i] = output[j]
    output[j] = tmp
  }
  return output.join('')
}
