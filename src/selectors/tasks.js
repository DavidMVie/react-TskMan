import moment from 'moment';

export default (tasks, {text, completed, sortBy}) => {
  return tasks.filter((task) => {
    const textMatch = task.description.toLowerCase().trim().includes(text.toLowerCase().trim())
    return task.completed === completed && textMatch
  }).sort((a,b) => {
    switch (sortBy) {
      case 'dueDate':
        return a.dueDate < b.dueDate ? -1 : 1;
      case 'date_added_newest': 
        return a.createdAt > b.createdAt ? -1 : 1;
      case 'date_added_oldest':
        return a.createdAt > b.createdAt ? 1 : -1;
      case 'manual': 
        return  // don't know wat to do here :(
      case 'task_name': 
        return a.description > b.description ? 1 : -1
      default: 
        return
    }
  })
} 