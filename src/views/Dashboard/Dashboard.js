import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { Modal as Modal2 } from './components'
import {
  Modal,
} from '@material-ui/core';
import {AddEvent } from '../UserList/components';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Dashboard = () => {
  const classes = useStyles();
  const [pricingModalOpen, setPricingModalOpen] = useState(false);
  const [eventModal, setEventModal] = useState({
    open: false,
    event: null
  });
  const [linkClass, setLinkClass] = useState('');
  const [title, setTitle] = useState('');
  const now = new Date();
  const end = new Date(now.getTime()+2600000);
  const [events, setEvents] = useState([
    {
      start: now,
      end: end,
      title: 'DASConf class',
      linkClass:'https://google.com',
    }
  ]);
  
  const handlePricingOpen = (event) => {
    setLinkClass(event.linkClass)
    setTitle(event.title)
    setPricingModalOpen(true);
  };

  const handlePricingClose = () => {
    setPricingModalOpen(false);
  };

  const handleSelect = ({ start, end }) => {
    console.log(start, end)
    const title = window.prompt('New Event name')
    if (title)
      setEvents([
        ...events,
        {
          start: start,
          end: end,
          title: title,
          linkClass:'https://mercury-1v1-dev.emg.edu.vn/10?token=cm9vbUlkPTEwJnVzZXJJZD0xMjMmdXNlck5hbWU9WjNWbGMzUT0mdXNlclJvbGU9VEVBQ0hFUiZsaW5rX3NsaWRlPWh0dHBzOi8vY291cnNlcy5lbWcuZWR1LnZuOjM0NDMvY291cnNlcy9FbmdsaXNoL1ZpcnR1YWxMZXNzb25DYW1lbHMucGRmJmxpbmtfdmlkZW89aHR0cHM6Ly9jb3Vyc2VzLmVtZy5lZHUudm46MzQ0My9jb3Vyc2VzL0VuZ2xpc2gvVGhlQmFjdHJpYW5DYW1lbC5tcDQmdGltZVN0YXJ0Q2xhc3M9TmFOJmNoZWNrU3VtPTdhODgwNDUzOWU4OGRlNzkwNjRiNTU0MWJkOGQxYzg2ZDkwMDUzYzA=',
        }
      ])
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
  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={4}
      >
        <Modal2
          onClose={handlePricingClose}
          open={pricingModalOpen}
          title = {title}
        >
          {linkClass}
        </Modal2>
        <Modal
          onClose={handleModalClose}
          open={eventModal.open}
        >
          <AddEvent
            event={eventModal.event}
          />
        </Modal>
        <Calendar
          defaultDate={new Date()}
          defaultView="week"
          events={events}
          localizer={localizer}
          onSelectEvent={handlePricingOpen}
          onSelectSlot={handleSelect}
          selectable
          style={{ height: '100vh', width: '100vw'}}
        />
      </Grid>
    </div>
  );
};

export default Dashboard;
