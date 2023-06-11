const { test, Test } = require("../dist/index");
process.stdout.write("321")
setTimeout(() => {
    process.stdout.clearLine()
    process.stdout.write("333")
})