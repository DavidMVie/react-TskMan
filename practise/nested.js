const moment = require('moment');

const completedToday = [
  'bd293397-fd86-4942-95fd-16ba9717c5c7',
  'a924b25c-ab86-49f4-bb77-5f0a92f9fbbc',
  'c1e8c733-678b-40e8-8f65-8645a9572743',
  'b413716a-9ec5-4e4c-b24d-65f23f45b0f2',
  'f5804868-21a2-4194-95cf-e8a83c148794'
]

const obj1 = { id: 'f5804868-21a2-4194-95cf-e8zzzc148794', createdAt: 10, completed: true}
const obj2 = { id: 'f5804868-21a2-4194-95cf-e8a83c148794', createdAt: 130, completed: true}
const obj3 = { id: 'zzz8c733-678b-40e8-8f65-8645a9572743', createdAt: 100, completed: true}
const obj4 = { id: 'c1e8c733-678b-40e8-8f65-8645a9572743', createdAt: 200, completed: true}
const obj5 = { id: 'c1e8c733-678b-40e8-8f65-8645a9572zzz', createdAt: 40, completed: true }
const obj6 = { id: 'a924b25c-ab86-49f4-bb77-5f0a92f9fbbc', createdAt: 3, completed: true}
const obj7 = { id: 'b413716a-9ec5-4e4c-b24d-65f23f45b0f2', createdAt: 1000, completed: true  }
const obj8 = { id: 'bd293397-fd86-4942-95fd-16ba9717c5c7', createdAt: 120, completed: true }

const tasks  = [obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8]

const inDay = []

completedToday.forEach((id) => {

  if(tasks.indexOf(task.id === id ) !== -1 ) {
    inDay.push(tasks[indexOf(id)])
  }
})

console.log(inDay)




// SOLUTION 1 
// let inday = []

// completedToday.forEach((id) => {
//   inday.push(tasks.find((task) => {
//     return id === task.id && task.createdAt >= 1000
//   }))
// })

// const match = inday.filter((task) => {
//   return task !== undefined
// })

// console.log(match)