'use client';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import useInput from '@/hooks/useInput';
import { FormEvent } from 'react';
// import type { Database } from '@/lib/database.types';

function UserForm() {
  const [userId, bindUserId, resetUserId] = useInput('');
  const [password, bindUserPw, resetUserPw] = useInput('');
  const [email, bindUserEmail, resetUserEmail] = useInput('');

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    console.log(userId, password);
    resetUserId();
    resetUserPw();
  };

  const router = useRouter();
  //   const supabase = createClientComponentClient<Database>();
  const supabase = createClientComponentClient<any>();

  const handleSignUp = async () => {
    await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    });
    router.refresh();
  };

  const handleSignIn = async () => {
    await supabase.auth.signInWithPassword({
      email,
      password,
    });
    router.refresh();
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };
  return (
    <div>
      <button onClick={handleSignUp}>Sign up</button>
      <button onClick={handleSignIn}>Sign in</button>
      <button onClick={handleSignOut}>Sign out</button>
      <form onSubmit={submitHandler}>
        <div>
          <label>ID : </label>
          <input {...bindUserId} type="text" />
        </div>
        <div>
          <label>PW : </label>
          <input {...bindUserPw} type="text" />
        </div>
        <div>
          <label>Email : </label>
          <input {...bindUserEmail} type="text" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default UserForm;
