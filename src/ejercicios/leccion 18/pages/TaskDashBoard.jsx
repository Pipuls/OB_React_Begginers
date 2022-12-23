import React, { useEffect } from 'react';
import { useHistory  } from 'react-router-dom';

import Tasklist from '../components/task_list'

const TaskDashBoard = () => {

  const history = useHistory();

  const navigate = (path) => {
      history.push(path);
  }

    const user = localStorage.getItem('user') || null;
    
    useEffect(() => {
        if (!user) {
          navigate('/');
        }
      });

    return <Tasklist user={user} />;
}

export default TaskDashBoard;
