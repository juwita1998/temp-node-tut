const os = require('os')

// info about the current user

const user = os.userInfo()

console.log(`the sistem uptime is ${os.uptime()} seconds`)

// method return the system uptime in seconds


const currentOS = {
     nama:os.type(),
     release:os.release(),
     totalMem:os.totalmem(),
     freeMem:os.freemem()
}
