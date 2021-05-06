import { Link, routes } from '@redwoodjs/router'

const AboutPage = () => {
  return (
    <>
    <header>
      <h1>About Blog 6. Mai 2021</h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.home()}>Home</Link>
            </li>
          </ul>
        </nav>

      </header>
      <main>About</main>
    </>
  )
}

export default AboutPage
