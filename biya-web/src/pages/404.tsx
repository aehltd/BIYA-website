import Link from "next/link";;

export default function NotFound() {
  return (
    <div id="container" className="container">
      <div className="row">
        <h1>404</h1>
        <p>Page not found</p>
        <Link href="/">Go to Home</Link>
      </div>
    </div>
  );
};
