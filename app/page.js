import Link from 'next/link';

export default function Home() {
  return (
      <div>
        <Link href="/users">
          Utilisateurs
        </Link>
      </div>
  )
}
