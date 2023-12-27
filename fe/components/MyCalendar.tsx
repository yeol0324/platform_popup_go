'use client';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import moment from 'moment';
import 'react-calendar/dist/Calendar.css'; // css import

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export const MyCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
      <div className="text-gray-500 mt-4">{moment(value?.toString()).format('YYYY년 MM월 DD일')}</div>
    </div>
  );
};
