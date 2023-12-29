import React from 'react';
import MyEvent from './MyEvent';
import dayjs from 'dayjs';

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
        <h3>팝업상세</h3>
        {myEvent.map((event, index) => (
          <div key={index}>
            <h4>{event.title}</h4>
            <p>시작 : {dayjs(event.start).format('YYYY년 MM월 DD일')}</p>
            <p hidden={event.start == event.end ? true : false}>종료 : {dayjs(event.end).format('YYYY년 MM월 DD일')}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarPopup;
