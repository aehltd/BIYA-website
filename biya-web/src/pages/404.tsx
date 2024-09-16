import Link from "next/link";;

export default function NotFound() {
  return (
    <div id="container" className="container">
      <div>
        <h1>404</h1>
        <p>Page not found</p>
        <Link href="/">Go to Home page</Link>
      </div>
    </div>
  );
};
