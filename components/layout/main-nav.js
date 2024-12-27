import Link from "next/link";
import classes from "./main-nav.module.css";
import Logo from "./logo";
function MainNav() {
  return (
    <header className={classes.header}>
      <Link href="/">
        <Logo />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts"> Treatments</Link>
          </li>
          <li>
            <Link href="/contact"> Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNav;
