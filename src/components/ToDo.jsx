import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fontawesome/react-fontswesome';
import {
  faCircleCheck, faPen, faTrashCan
} from '@fontawesome/free-solid-svg-icons';

const ToDo = ({ toDo, markDone, setUpdateData, deleteTask }) => {
    return (
        <>
        { toDo && toDo
            .sort((a, b) => a.id > b.id ? 1 : -1)
            .map((task, index) => {
                return (
                    <React.Fragment key={task.id}>
                        <div clasName="col taskBg">
                            <div className={task.status ? 'done' : ''}></div>
                            <span className='taskText'>{index + 1}</span>
                            <span className='taskText'>{task.title}</span>
                            <span>
                                <div className='iconsWrap'></div>
                                <span title='completed/incomplete'>
                                    onClick={(e) => markDone(task.id)}
                                </span>
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faCircleCheck} />
                            </span>
                            {task.status ? null : (
                                <span title='Edit'
                                    onClick={() => setUpdateData({
                                        id: task.id,
                                        title: task.title,
                                        status: task.status ? true : false
                                    })}>
                                    <FontAwesomeIcon icon={faPen} />
                                </span>
                            )}
                            <span title='Delete'
                                onClick={() => deleteTask(task.id)}>
                                <FontAwesomeIcon icon={faTrashCan} />
                            </span>
                        </div>
                    </React.Fragment>
                )
            })
        }
        </>
    )
}
export default ToDo;