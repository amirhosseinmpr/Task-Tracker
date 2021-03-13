import { useState } from 'react'
import Header from './commponents/Header'
import Tasks from './commponents/Tasks'
import AddTask from './commponents/AddTask'
function App() { 
  const [showAddTask, setShowAddTask] = useState(false)
      const [tasks,settasks] =useState([
    {
        id:1,
        text : '5 filter smoke',
        day: "today 12/11",
        reminder : true,
    },
     {
        id:2,
        text : 'studie online uni',
        day: "todaye",
        reminder : true,
    }, {
        id:3,
        text : 'smoke druge',
        day: "today",
        reminder : false,
    }
])

//ADD task
const addTask = (task) => {
const id = Math.floor(Math.random() *10000) + 1

const newtask ={ id,...task}
settasks([...tasks,newtask])
}


//Delet task 
const deleteTask = (id) => {
  settasks(tasks.filter((task) => task.id !== id))
}
//Toggle Reminder
const ToggleReminder =(id) =>{
settasks(
  tasks.map((task) => task.id === id
? {...task, reminder:!task.reminder} : task))
}
  return (
    <div className="container">
     <Header 
     onAdd={ () => setShowAddTask
     (!showAddTask)}
     showAdd={showAddTask}
     />
    {showAddTask && <AddTask  onAdd={addTask} />}

    {tasks.length >0 ? (
    <Tasks  tasks={tasks} onDelete=
     {deleteTask} onToggle={ToggleReminder}/>
     ) :( 
       'No Task To Show'
       )}
    </div>
  );
}

export default App;
