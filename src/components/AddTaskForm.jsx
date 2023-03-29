const AddTaskForm = ({  newTask, setNewTask, addTask }) => {
    return (
    <>
        <div className='row'>
        <div className='col'></div>
        <input
          value={updateData && updateData.title}
          onChange={(e) => changeTask(e)}
          className='form-control form-control-lg'
        />
      </div>
      <div className='col-auto'>
        <button
          onClick={addTask}
          className='btn btn-lg btn-success'
        >Add Task</button>
      </div>
      <br />
    </>
    )
}
export default AddTaskForm;