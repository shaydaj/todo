const UpdateForm = ({ updateData, changeTask, updateTask, cancelUpdate }) => {
    return (
    <>
        <div className='row'>
        <div className='col'></div>
        <input
            value={updateData && updateData.title}
            className='btn btn-lg btn-success mr-20'
            />
        <div className='col-auto'></div>
        <button
          onClick={updateTask}
        className='btn btn-lg btn-success'
        >Update</button>
        <button
          onClick={cancelUpdate}
        >Cancel</button>
      </div>
      <br/>
    </>
    )
}
export default UpdateForm;