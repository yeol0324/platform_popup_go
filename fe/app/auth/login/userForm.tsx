'use client';
import useInput from '@/hooks/useInput';
import { FormEvent } from 'react';

function UserForm() {
  const [userId, bindUserId, resetUserId] = useInput('');
  const [userPw, bindUserPw, resetUserPw] = useInput('');

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    console.log(userId, userPw);
    resetUserId();
    resetUserPw();
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>ID : </label>
          <input {...bindUserId} type="text" />
        </div>
        <div>
          <label>PW : </label>
          <input {...bindUserPw} type="text" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default UserForm;
