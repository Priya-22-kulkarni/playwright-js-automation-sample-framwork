const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({

testDir:"./tests",

fullyParallel:true,

workers:3,

use:{
headless:true,
screenshot:"only-on-failure",
video:"retain-on-failure"
},

reporter:[
['list'],
['html']
]

})
