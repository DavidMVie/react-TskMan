import React from 'react';

import TaskFilters from '../TaskFilters';
import {PaginationBar} from '../PaginationBar';
import TaskList from './TaskList';

export default () => {

  return (
    <section className="task-list-wrapper">
      <TaskFilters />
      <PaginationBar />
      <TaskList />
    </section>
  )
}