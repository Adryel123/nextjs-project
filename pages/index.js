import Link from 'next/link'

function Home() {
  return (
    <>
      <h1>Home</h1>
      <Link href="/sobre">
        <a>Acessar página sobre</a>
      </Link>
    </>
  )
}

export default Home