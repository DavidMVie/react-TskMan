const uuid = require('uuid');
const fs = require('fs')
const moment = require('moment')

// Take an example where we have 5000 tasks in our list

let tasks = []
const id = (x) => {
  let i = 1;
  while(i < x) {
    
    tasks.push({
      id: uuid(),
      createdAt: Math.floor(Math.random() * 100000) + 1,
    });
    i++
  }
}

id(500000)
console.log(tasks)


const completedTasks = [
  tasks[290],
  tasks[1200],
  tasks[4000],
  tasks[10],
  tasks[3710]
]

console.log(completedTasks)

// with that amount of data,  how long would it take to compute?

(function goforit() {
  const time1 = moment().valueOf()
  console.log(time1)

  function getResult () {
    let inday = []
  
    completedToday.forEach((id) => {
      inday.push(tasks.find((task) => {
        return id === task.id && task.createdAt >= 1000
      }))
    })
    
    const match = inday.filter((task) => {
      return task !== undefined
    })
  
  
    console.log(match)
  
  }

  getResult()
  const time2 = moment().valueOf();
  
  const timeTaken = time2 - time1;
  console.log(`It took ${timeTaken} ms to run `)

})()
