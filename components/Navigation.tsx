import Link from 'next/link'

export default function Navigation() {
  return (
    <nav>
      <div className="nav-container">
        <Link href="/" className="logo">
          Cornell HFTC
        </Link>
        <ul className="nav-links">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/members">Members</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

