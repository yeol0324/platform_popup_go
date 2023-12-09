import Link from 'next/link';
export default function Home() {
  return (
    // <main className={styles.main}>
    <main>
      <Link href="/map/" className="flex" style={{ padding: '10rem', fontSize: '10rem' }}>
        map
      </Link>
    </main>
  );
}
