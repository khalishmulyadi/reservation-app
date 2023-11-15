'use client'
import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import BootstrapTheme from '@fullcalendar/bootstrap';
import interactionPlugin from '@fullcalendar/interaction'
import resourceTimelinePlugin from '@fullcalendar/resource-timeline'

const Reservation = () => {

    // var calendar = new Calendar(calendarEl, {
    //     initialDate: '2014-11-10',
    //     initialView: 'timeGridWeek',
    //     events: [
    //       {
    //         start: '2014-11-10T10:00:00',
    //         end: '2014-11-10T16:00:00',
    //         display: 'background'
    //       }
    //     ]
    //   });
  return (
    <div className="container">
      <form className="d-flex my-4" role="search">
        <input className="form-control" type="search" placeholder="Search event" aria-label="Search" />
        <button className="btn" type="submit">Search</button>
      </form>
      {/* Add your reservation page content here */}
      <FullCalendar
          plugins={[
            resourceTimelinePlugin,
            dayGridPlugin,
            interactionPlugin,
            timeGridPlugin
          ]}
          headerToolbar={{
            left: 'title',
            right: 'prev,next',
            // right: 'resourceTimelineWeek,dayGridMonth,timeGridWeek'
          }}
          initialView='dayGridMonth'
          nowIndicator={true}
          editable={true}
          selectable={true}
          selectMirror={true}
          resources={[
            { id: 'a', title: 'Auditorium A' },
            { id: 'b', title: 'Auditorium B', eventColor: 'green' },
            { id: 'c', title: 'Auditorium C', eventColor: 'orange' },
          ]}
          events= {[
            {
              start: '2023-11-17T10:00:00',
              end: '2023-11-17T16:00:00',
              display: 'background'
            }
          ]}
          initialEvents={[
            { title: 'nice event', start: new Date(), resourceId: 'a' }
          ]}
        />
    </div>
  );
};

export default Reservation;
