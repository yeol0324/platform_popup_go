import React from 'react';
import MyEvent from './MyEvent';
import dayjs from 'dayjs';
import Link from 'next/link';

const CalendarPopup = ({ clickModal, myEvent }: { clickModal: any; myEvent: MyEvent[] }) => {
  return (
    <div
      onClick={clickModal}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: '9999',
      }}
    >
      <div
        style={{
          padding: '1.5rem 3rem',
          width: '28.125rem',
          borderRadius: '0.313rem',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#ffffff',
        }}
      >
        <h3>팝업 목록</h3>
        {myEvent.map((event, index) => (
          <Link
            key={index}
            style={{
              borderRadius: '0.313rem',
              backgroundColor: '#DDE7E7',
              paddingLeft: '1rem',
              marginTop: '1rem',
              textDecoration: 'inherit',
              color: 'inherit',
            }}
            href={`/popup/${event.id}`}
          >
            <h4>{event.title}</h4>
            <p>시작 : {dayjs(event.start).format('YYYY년 MM월 DD일')}</p>
            <p hidden={event.start == event.end ? true : false}>종료 : {dayjs(event.end).format('YYYY년 MM월 DD일')}</p>
            <p>위치 : {event.location}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CalendarPopup;
