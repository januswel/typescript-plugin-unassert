import { assertIsDefined } from './lib/assert'

function main() {
  const src = process.argv[2].slice(0)
  assertIsDefined(src)
  console.log(src)
}

main()
