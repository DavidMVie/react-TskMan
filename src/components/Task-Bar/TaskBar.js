import React, { useState } from 'react'

import Modal from '../Modal';
import AddTaskForm from './AddTaskForm';
import OrgnanizeTasks from './OrganizeTasks';
import ClearTasks from './ClearTasks';

const TaskBar = () => {

  const [ showModal, setShowModal ] = useState(false);
  const [ modalContentType, setModalContentType ] = useState(null)

  const userProfile = () =>  {
    setShowModal(true)
    setModalContentType('user-profile')
  }

  const addTask = () => {
    setShowModal(true);
    setModalContentType('add-task')
  }

  const clearTasks = () => {
    setShowModal(true);
    setModalContentType('clear-tasks')
  }

  const organizeTasks = () => {
    setShowModal(true);
    setModalContentType('organize-tasks')
  }

  const closeModal = () => {
    setShowModal(false)
  }

  const getModalContent = () => {
    let content;
    switch (modalContentType) {
      case 'add-task':
         content = (
          <Modal showModal={showModal} showOverlay={true} closeModal={closeModal}>
            <AddTaskForm />
          </Modal>
        )
        return content;
      case 'organize-tasks':
         content = (
          <Modal showModal={showModal} showOverlay={true} closeModal={closeModal}>
            <OrgnanizeTasks />
          </Modal>
        )
        return content;
      case 'clear-tasks':
        content = (
          <Modal showModal={showModal} showOverlay={true} closeModal={closeModal}>
            <ClearTasks />
          </Modal>
        )
          return content;
        default: 
          return
    }

  }

  return (
    <div className="task-tool-bar"> 
      <i className="fas fa-user-circle" onClick={userProfile}></i>
      <i className="fas fa-calendar-plus" onClick={addTask}></i>
      <i className="fas fa-clipboard" onClick={organizeTasks}></i>
      <i className="fas fa-trash-alt" onClick={clearTasks}></i>

  
      {showModal && getModalContent() }
    </div>
  )

}

export  { TaskBar as default }

