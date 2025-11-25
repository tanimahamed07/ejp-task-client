export default function Footer() {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
        <aside>
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current"
          >
            <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm-1-13h2v6h-2V7zm0 8h2v2h-2v-2z"></path>
          </svg>
          <p>
            Toy Land Ltd.
            <br />
            Bringing joy to kids since 2005
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Products</h6>
          <a className="link link-hover">Remote Control Cars</a>
          <a className="link link-hover">Action Figures</a>
          <a className="link link-hover">Board Games</a>
          <a className="link link-hover">Educational Toys</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Press</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of Service</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Return Policy</a>
        </nav>
      </footer>
    </div>
  );
}
