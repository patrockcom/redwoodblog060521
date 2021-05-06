import { Link, routes } from '@redwoodjs/router'

const HomePage = () => {
  return (
    <>
      <header>
      <h1>HomePage Blog 6. Mai 2021</h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
          </ul>
        </nav>

      </header>
      <main>Home</main>
    </>
  )
}

export default HomePage
