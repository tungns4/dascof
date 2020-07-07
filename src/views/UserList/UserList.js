import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Modal,
} from '@material-ui/core';
import { UsersToolbar, UsersTable, AddEvent } from './components';
import mockData from './data';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const UserList = () => {
  const classes = useStyles();

  const [users] = useState(mockData);
  const [search, setSearch] = useState('');
  const [eventModal, setEventModal] = useState({
    open: false,
    event: null
  });

  useEffect(() => {
    // let mounted = true;

    // const fetchEvents = () => {
    //   if (mounted) {
    //     axios
    //       .get('/api/calendar')
    //       .then(response => setEvents(response.data.events));
    //   }
    // };

    // fetchEvents();

    // return () => {
    //   mounted = false;
    // };
  }, []);
  
  const onChange = (event) =>{
    event.persist();
    setSearch(event.target.value);
  }

  const handleModalClose = () => {
    setEventModal({
      open: false,
      event: null
    });
  };

  const handleEventNew = () => {
    setEventModal({
      open: true,
      event: null
    });
  };

  let userList = users
  let user = search.trim().toLowerCase();
  if (user.length > 0) {
    userList = users.filter(val => val.email.toLowerCase().match(user) || val.name.toLowerCase().match(user));
  }
  return (
    <div className={classes.root}>
      <UsersToolbar onChange = {onChange}/>
      <div className={classes.content}>
        <UsersTable 
          users={userList} 
          handleEventNew = {handleEventNew}
        />
        <Modal
          onClose={handleModalClose}
          open={eventModal.open}
        >
          <AddEvent
            event={eventModal.event}
          />
        </Modal>
      </div>
    </div>
  );
};

export default UserList;
