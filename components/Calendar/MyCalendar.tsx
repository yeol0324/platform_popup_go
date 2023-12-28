'use client';
import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css'; // css import
import FullCalendar from '@fullcalendar/react';
import { DatesSetArg, EventApi, EventContentArg } from '@fullcalendar/core';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import CalendarPopup from './CalendarPopup';
import dayjs from 'dayjs';

export const MyCalendar = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState();
  const plugins = [interactionPlugin, dayGridPlugin, timeGridPlugin];

  const clickModal = (props: any) => {
    const dateStr = props.dateStr;
    console.log('dateStr', dateStr);
    const event = events.filter(e => {
      return dayjs(e.start.toString()).format('YYYY-MM-DD') == dateStr;
    });

    if (event && event.length > 0) {
      console.log('event', event);
      // TODO:: 이벤트 set
      setShowModal(!showModal);
    } else {
      if (showModal) {
        setShowModal(!showModal);
      }
      console.log('no data');
    }
  };

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

  // const dateClick = (info: any) => {
  //   console.log(info.dateStr);
  //   const event = {
  //     title: '추가',
  //     start: new Date(info.dateStr),
  //     end: new Date(info.dateStr),
  //     isAllDay: true,
  //   };

  //   console.log('events', events);
  //   events.push(event);
  // };

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
    <>
      {showModal && <CalendarPopup clickModal={clickModal} />}
      <FullCalendar
        locale="kr"
        plugins={plugins}
        events={events}
        eventContent={eventContent}
        headerToolbar={{
          left: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay today',
        }}
        footerToolbar={{
          left: 'prev',
          center: '',
          right: 'next',
        }}
        buttonText={{
          today: '오늘',
          month: '월별',
          week: '주별',
          day: '일별',
          list: '리스트',
        }}
        dateClick={clickModal}
        // eventChange={eventChange} // 이벤트 drop 혹은 resize 될 때
        editable={true} // 사용자의 수정 가능 여부 (이벤트 추가/수정, 드래그 앤 드롭 활성화)
        selectable={true} // 사용자의 날짜 선택 여부
        selectMirror={true} // 사용자의 시간 선택시 time 표시 여부
        // select={select} // 날짜가 선택 될  때
        weekends={true} // 주말 표시 여부
        dayMaxEvents={true} // 하루에 표시 될 최대 이벤트 수 true = 셀의 높이
        navLinks={true} // 달력의 날짜 클릭시 일간 스케쥴로 이동
      />
    </>
  );
};
