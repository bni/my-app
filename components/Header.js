import Head from "next/head";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <Head>
        <title>VR Headsets</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/mini.css/3.0.1/mini-default.min.css" />
      </Head>
      <header>
        <Link href="/">
          <a className="button">Home</a>
        </Link>
        <Link href="/about">
          <a className="button">About</a>
        </Link>
      </header>
    </div>
  );
};

export default Header;
