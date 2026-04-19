import Link from "next/link";

export default function Navbar() {
  return (
    <div className="nav-wrapper" suppressHydrationWarning>
      <div  data-w-id="a7c66901-67c8-b500-6caa-bb56a188785b" data-animation="default" data-collapse="medium"
        data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="navbar w-nav" suppressHydrationWarning>
        <div className="nav_wrap" suppressHydrationWarning>
          <Link href="/" aria-current="page" className="nav_brand w-nav-brand w--current" suppressHydrationWarning>
            <img
              width="350"
              height="100"
              alt="Ganji Law Firm"
              src="/assets/68e1cdef7097dfb5986b1f5e_9b3c1bee64791e5c73f4252ca4450caf_Main Logo.avif"
              loading="lazy"
              className="nav_logo"
              suppressHydrationWarning
            />
          </Link>
          <nav  role="navigation" className="nav_menu-items w-nav-menu" suppressHydrationWarning>
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
                <div  data-hover="false" data-delay="0" data-w-id="63b6d1e9-5cb4-05b2-8569-8caca4f63738"
                  className="dropdown w-dropdown" suppressHydrationWarning>
                  <div  className="nav_link-dropdown w-dropdown-toggle" suppressHydrationWarning>
                    <div className="nav-text" suppressHydrationWarning>Pages</div>
                    <div  data-w-id="b7657151-279f-0f48-6e86-e7b9d2a83fc1" className="icon-24 w-embed" suppressHydrationWarning>
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 128 128" id="arrow-down" suppressHydrationWarning>
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6" d="M43 53L58.6765 68.6765C61.8007 71.8007 66.866 71.8007 69.9902 68.6765L85.6667 53"></path>
                      </svg>
                    </div>
                  </div>
                  <nav  className="dropdown-list w-dropdown-list" suppressHydrationWarning>
                    <div className="dropdown-list-wrap" suppressHydrationWarning>
                      <div className="dropdown-link-wrap" suppressHydrationWarning>
                        <div className="text-weight-semibold" suppressHydrationWarning>CMS PAGES</div>
                        <Link href="#" className="nav_link-dropdown-link w-inline-block" suppressHydrationWarning>
                          <div className="nav-dropdown-text" suppressHydrationWarning>Team Detail</div>
                        </Link>
                        <Link href="#" className="nav_link-dropdown-link w-inline-block" suppressHydrationWarning>
                          <div className="nav-dropdown-text" suppressHydrationWarning>Service Detail</div>
                        </Link>
                        <Link href="#" className="nav_link-dropdown-link w-inline-block" suppressHydrationWarning>
                          <div className="nav-dropdown-text" suppressHydrationWarning>Blog Detail</div>
                        </Link>
                      </div>
                      <div className="dropdown-link-wrap" suppressHydrationWarning>
                        <div className="text-weight-semibold" suppressHydrationWarning>UTILITY PAGES</div>
                        <Link href="#" className="nav_link-dropdown-link w-inline-block" suppressHydrationWarning>
                          <div className="nav-dropdown-text" suppressHydrationWarning>Styleguide</div>
                        </Link>
                        <Link href="#" className="nav_link-dropdown-link w-inline-block" suppressHydrationWarning>
                          <div className="nav-dropdown-text" suppressHydrationWarning>Changelog</div>
                        </Link>
                        <Link href="#" className="nav_link-dropdown-link w-inline-block" suppressHydrationWarning>
                          <div className="nav-dropdown-text" suppressHydrationWarning>Licensing</div>
                        </Link>
                      </div>
                    </div>
                  </nav>
                </div>
                <Link href="/blogs" className="nav_link w-inline-block" suppressHydrationWarning>
                  <div className="nav-text" suppressHydrationWarning>Blog</div>
                </Link>
                <Link href="/contact" className="nav_link w-inline-block" suppressHydrationWarning>
                  <div className="nav-text" suppressHydrationWarning>Contact</div>
                </Link>
              </div>
            </div>
          </nav>
          <div  className="nav_button w-nav-button" suppressHydrationWarning>
            <div className="nav_button-inner" suppressHydrationWarning>
              <div  data-w-id="a7c66901-67c8-b500-6caa-bb56a188787d" className="nav_button-line is-top" suppressHydrationWarning></div>
              <div  data-w-id="a7c66901-67c8-b500-6caa-bb56a188787e" className="nav_button-line is-middle" suppressHydrationWarning></div>
              <div  data-w-id="a7c66901-67c8-b500-6caa-bb56a188787f" className="nav_button-line is-bottom" suppressHydrationWarning></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
