import Link from 'next/link';
import Button from '@/components/Button';
import Box from '@/components/Box';
import { Input } from '@/components/Input';
import UserForm from './userForm';
export default function Home() {
  return (
    <div>
      <Link href="/map/" className="flex" style={{ fontSize: '10rem' }}>
        map
      </Link>
      <Link href="/calendar/" className="flex" style={{ fontSize: '10rem' }}>
        calendar
      </Link>
      <Box>hh</Box>
      <Input bottomText="hi">
        <Input.TextField></Input.TextField>
      </Input>
      <UserForm />
      {/* <button onClick={handleSubmit}>확인</button> */}
      <Button themeId="theme01">버튼</Button>
    </div>
  );
}
