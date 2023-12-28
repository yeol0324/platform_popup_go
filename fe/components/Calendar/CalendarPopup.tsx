import React from 'react';

const CalendarPopup = (props: any, event: any) => {
  const { clickModal } = props;
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
        <h4>일정입력</h4>
      </div>
    </div>
  );
};

export default CalendarPopup;
