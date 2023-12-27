'use client';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import moment from 'moment';
import 'react-calendar/dist/Calendar.css'; // css import
import FullCalendar from '@fullcalendar/react';
import { DatesSetArg, EventContentArg } from '@fullcalendar/core';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';

// type ValuePiece = Date | null;

// type Value = ValuePiece | [ValuePiece, ValuePiece];

// export const MyCalendar = () => {
//   const [value, onChange] = useState<Value>(new Date());

//   return (
//     <div>
//       <Calendar onChange={onChange} value={value} />
//       <div className="text-gray-500 mt-4">{moment(value?.toString()).format('YYYY년 MM월 DD일')}</div>
//     </div>
//   );
// };

export const MyCalendar = () => {
  const events = [
    {
      title: '크리스마스 이브',
      start: new Date('2023-12-24'),
      end: new Date('2023-12-24'),
      isAllDay: true,
    },
    {
      title: '크리스마스',
      start: new Date('2023-12-25'),
      end: new Date('2023-12-25'),
      isAllDay: true,
    },
  ];

  const eventContent = (eventInfo: EventContentArg) => {
    const isAllDay = eventInfo.event.allDay;

    return (
      <div
        style={{
          width: '100%',
          backgroundColor: isAllDay ? '#5A90FF' : '#FF8652',
          borderRadius: '3px',
          padding: 5,
          color: '#fff',
          fontWeight: 600,
        }}
      >
        {eventInfo.event.title}
      </div>
    );
  };

  return (
    <div>
      <FullCalendar
        locale="kr"
        plugins={[dayGridPlugin, interactionPlugin]}
        events={events}
        eventContent={eventContent}
        headerToolbar={{
          left: 'prev',
          center: 'title',
          right: 'next',
        }}
      />
    </div>
  );
};
