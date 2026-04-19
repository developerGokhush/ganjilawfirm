"use client";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="section-hero background-color-white" suppressHydrationWarning>
      <div className="container-large" suppressHydrationWarning>
        <div
          className="hero-content-wrap"
          suppressHydrationWarning
        >
          <div className="hero-content-left" suppressHydrationWarning>
            <div className="hero-heading" suppressHydrationWarning>
              <div
                className="text-size-eyebrow text-color-main hero-reveal-up hero-delay-1"
                suppressHydrationWarning
              >
                #Welcome to Ganji Law Firm
              </div>
              <div
                className="heading-style-h1 hero-reveal-up hero-delay-2"
                suppressHydrationWarning
              >
                Expert Legal Representation You Can Trust In India
              </div>
            </div>
            <div className="hero-desc hero-reveal-up hero-delay-3" suppressHydrationWarning>
              <div className="text-size-regular" suppressHydrationWarning>
                Committed to protecting your rights with professionalism, specialized arbitration, and integrity.
              </div>
              <div className="button-cover" suppressHydrationWarning>
                <Link href="/contact" className="button w-inline-block" suppressHydrationWarning>
                  <div className="z-index-2" suppressHydrationWarning>
                    <p className="text-weight-medium text-color-white" suppressHydrationWarning>Free Consultation</p>
                  </div>
                  <div className="bg-button-icon" suppressHydrationWarning>
                    <img loading="lazy" src="/assets/68dbf1fa0f89b93c8288d0dd_Weight=Dynamic.svg" alt="" className="icon-20" suppressHydrationWarning />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="hero-content-right" suppressHydrationWarning>
            <div className="img-hero-wrap hero-reveal-scale hero-delay-4" suppressHydrationWarning>
              <img
                width="961"
                height="661"
                alt="Lawyer Consulting"
                src="/assets/68dbf244e56ef43177058e89_fa0fb9126fc2333e4e6973d5da4e8d62_Man Smiling at Phone.avif"
                className="img-hero"
                suppressHydrationWarning
              />
            </div>
            <div
              className="hero-info-img first hero-reveal-right hero-delay-5"
              suppressHydrationWarning
            >
              <img width="224" height="Auto" alt="Chart" src="/assets/68dbf244e56ef43177058e81_bd133a2e2300e58f0911bf58474b4333_Chart Bar.avif" loading="lazy" className="img-info shadow-card" suppressHydrationWarning />
            </div>
            <div
              className="hero-info-img is-secondary hero-reveal-up hero-delay-6"
              suppressHydrationWarning
            >
              <div className="ratings-comp shadow-card" suppressHydrationWarning>
                <div className="avatar-wrap" suppressHydrationWarning>
                  <img loading="lazy" height="Auto" alt="" src="/assets/68e1e1f205bd3ca39761fb36_1.avif" className="avatar-item" suppressHydrationWarning />
                  <img loading="lazy" src="/assets/68e1e1f2ecc054b68102767c_4.avif" alt="" className="avatar-item" suppressHydrationWarning />
                  <img loading="lazy" src="/assets/68e1e1f2548905717e336c8a_2.avif" alt="" className="avatar-item" suppressHydrationWarning />
                  <img loading="lazy" src="/assets/68e1e1f2fc76bfadbda94a17_3.avif" alt="" className="avatar-item" suppressHydrationWarning />
                </div>
                <div className="ratings-wrap" suppressHydrationWarning>
                  <div className="text-size-small" suppressHydrationWarning><em>Trusted by 250+ clients in India</em></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
