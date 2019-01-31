const AlertGenerator = require(`${__dirname}/../lib/pmdc-alert.js`)

const Alert = new AlertGenerator('div')

const testMethods = () => {
  const methods = [
    'alert',
    'success',
    'danger',
    'warning',
    'link',
    'primary',
    'info'
  ]
  const inexistingMethods = methods.filter(x => typeof Alert[x] !== 'function')

  return {
    title: 'Testing methods presence',
    amount: methods.length,
    passed: methods.length - inexistingMethods.length,
    errorMsg: 'Some methods were missing !',
    errorDetail: inexistingMethods
  }
}

Promise.all([
  testMethods()
])
  .then(tests => {
    const coverage = tests.reduce((acc, test) => {
      const ok = test.passed === test.amount ? 'OK' : 'KO'
      console.log(`\n> ${test.title}`)
      console.log(`Coverage : ${test.passed} / ${test.amount} ${ok}`)
      if (test.amount > test.passed) {
        console.log(`/!\\ ${test.errorMsg}`)
        console.log(test.errorDetail)
      }
      return {
        total: acc.total + test.amount,
        passed: acc.passed + test.passed
      }
    }, { total: 0, passed: 0 })

    console.log(`\nFINAL RESULTS\n`)
    console.log(`Tests passed : ${coverage.passed}/${coverage.total}`)
  })
