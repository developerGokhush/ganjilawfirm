import Link from "next/link";

export default function Navbar() {
  return (
    <div className="nav-wrapper" suppressHydrationWarning>
      <div data-w-id="a7c66901-67c8-b500-6caa-bb56a188785b" data-animation="default" data-collapse="medium"
        data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="navbar w-nav" suppressHydrationWarning>
        <div className="nav_wrap" suppressHydrationWarning>
          <Link href="/" aria-current="page" className="nav_brand w-nav-brand w--current" suppressHydrationWarning>
            <img
              width="350"
              height="100"
              alt="Ganji Law Firm"
              src="/assets/logo.png"
              loading="lazy"
              className="nav_logo"
              suppressHydrationWarning
            />
          </Link>
          <nav role="navigation" className="nav_menu-items w-nav-menu" suppressHydrationWarning>
            <div className="nav_menu-items-inner" suppressHydrationWarning>
              <div id="w-node-a7c66901-67c8-b500-6caa-bb56a188786e-a188785b" className="nav_menu-link-wrap" suppressHydrationWarning>
                <Link href="/" aria-current="page" className="nav_link w-inline-block w--current" suppressHydrationWarning>
                  <div className="nav-text" suppressHydrationWarning>Home</div>
                </Link>
                <Link href="/about-us" className="nav_link w-inline-block" suppressHydrationWarning>
                  <div className="nav-text" suppressHydrationWarning>About Us</div>
                </Link>
                <Link href="/services" className="nav_link w-inline-block" suppressHydrationWarning>
                  <div className="nav-text" suppressHydrationWarning>Services</div>
                </Link>
                <Link href="/blogs" className="nav_link w-inline-block" suppressHydrationWarning>
                  <div className="nav-text" suppressHydrationWarning>Blog</div>
                </Link>
                <Link href="/contact" className="nav_link w-inline-block" suppressHydrationWarning>
                  <div className="nav-text" suppressHydrationWarning>Contact</div>
                </Link>
              </div>
            </div>
          </nav>
          <div className="nav_button w-nav-button" suppressHydrationWarning>
            <div className="nav_button-inner" suppressHydrationWarning>
              <div data-w-id="a7c66901-67c8-b500-6caa-bb56a188787d" className="nav_button-line is-top" suppressHydrationWarning></div>
              <div data-w-id="a7c66901-67c8-b500-6caa-bb56a188787e" className="nav_button-line is-middle" suppressHydrationWarning></div>
              <div data-w-id="a7c66901-67c8-b500-6caa-bb56a188787f" className="nav_button-line is-bottom" suppressHydrationWarning></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
