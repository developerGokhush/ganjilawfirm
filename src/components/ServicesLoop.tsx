import Link from "next/link";

type Service = {
  href: string;
  title: string;
  description: string;
  image: string;
  featured?: boolean;
};

const services: Service[] = [
  {
    href: "/services/real-estate-law",
    title: "Real Estate Law",
    description: "Protecting your property rights in every real estate transaction.",
    image: "/assets/68dd3287686916273d7e53ab_68712f4ed632c852a4f51c82_pexels-kindelmedia-7979441 (1).jpeg",
  },
  {
    href: "/services/personal-injury-law",
    title: "Personal Injury Law",
    description: "Helping injury victims recover compensation and peace of mind.",
    image: "/assets/68dd3287bde999438bc7a419_68713034db8bb0db397f756f_pexels-marcus-aurelius-4063789.jpeg",
    featured: true,
  },
  {
    href: "/services/criminal-defense",
    title: "Criminal Defense",
    description: "Protecting your rights and building strong defenses in criminal cases.",
    image: "/assets/68dd32871bef571129555444_687129eee366b1aba968e0d2_pexels-rdne-6065141.jpeg",
  },
  {
    href: "/services/corporate-business-law",
    title: "Corporate & Business Law",
    description: "Smart legal solutions for businesses at every stage of growth.",
    image: "/assets/68dd3287147aee908da0532f_68712cadcde63a34011e0da0_pexels-pavel-danilyuk-8152745.jpeg",
    featured: true,
  },
  {
    href: "/services/family-law",
    title: "Family Law",
    description: "Guiding families through legal challenges with empathy and expertise.",
    image: "/assets/68dd3287ca7a35dddfc29dee_68712870611da17860d1e73f_pexels-pavel-danilyuk-8112153.jpeg",
  },
  {
    href: "/services/civil-litigation",
    title: "Civil Litigation",
    description: "Resolving disputes efficiently through negotiation or litigation.",
    image: "/assets/68dd328785f4ecda7c82d355_68712ec2b7322f6255013925_pexels-karolina-grabowska-7876038.jpeg",
    featured: true,
  },
];

function DesktopCard({ service }: { service: Service }) {
  return (
    <Link href={service.href} className="services-loop-card-link">
      <div className="service-card services-loop-card w-variant-314d80a7-7c1e-c7b8-2834-1719819b2756 shadow-card-secondary">
        <div className="service-image w-variant-314d80a7-7c1e-c7b8-2834-1719819b2756">
          <img
            src={service.image}
            loading="lazy"
            alt={service.title}
            className="img-services services-loop-image w-variant-314d80a7-7c1e-c7b8-2834-1719819b2756"
          />
        </div>
        <div className="service-wrap w-variant-314d80a7-7c1e-c7b8-2834-1719819b2756">
          <div className="discover-content">
            <h2 className="heading-style-h5">{service.title}</h2>
            <div className="discover-desc services-loop-desc">
              <div className="opacity-70">
                <div className="text-size-regular">{service.description}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

function MobileSlide({ service }: { service: Service }) {
  return (
    <div className="services-slider_slide w-slide" suppressHydrationWarning>
      <div className="sticky-wrap w-dyn-list" suppressHydrationWarning>
        <div role="list" className="service-grid w-dyn-items" suppressHydrationWarning>
          <div role="listitem" className="w-dyn-item" suppressHydrationWarning>
            <Link href={service.href} className="link-block w-inline-block" suppressHydrationWarning>
              <div
                className={`service-card w-variant-314d80a7-7c1e-c7b8-2834-1719819b2756${service.featured ? " main" : ""}`}
                suppressHydrationWarning
              >
                <div className="service-image w-variant-314d80a7-7c1e-c7b8-2834-1719819b2756" suppressHydrationWarning>
                  <img
                    src={service.image}
                    loading="lazy"
                    alt={service.title}
                    className="img-services w-variant-314d80a7-7c1e-c7b8-2834-1719819b2756"
                    suppressHydrationWarning
                  />
                </div>
                <div className="service-wrap w-variant-314d80a7-7c1e-c7b8-2834-1719819b2756" suppressHydrationWarning>
                  <div className="discover-content" suppressHydrationWarning>
                    <h2 className="heading-style-h5" suppressHydrationWarning>{service.title}</h2>
                    <div className="discover-desc" suppressHydrationWarning>
                      <div className="opacity-70" suppressHydrationWarning>
                        <div className="text-size-regular" suppressHydrationWarning>{service.description}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ServicesLoop() {
  return (
    <div className="services-third-wrap w-variant-314d80a7-7c1e-c7b8-2834-1719819b2756" suppressHydrationWarning>
      <div className="service-head w-variant-314d80a7-7c1e-c7b8-2834-1719819b2756" suppressHydrationWarning>
        <div data-w-id="72829d13-2202-10c4-e992-d964805eff9d" className="sub-heading" suppressHydrationWarning>
          <h2 className="text-size-eyebrow text-color-main w-variant-314d80a7-7c1e-c7b8-2834-1719819b2756" suppressHydrationWarning>
            Our Services
          </h2>
        </div>
        <div className="service-heading w-variant-314d80a7-7c1e-c7b8-2834-1719819b2756" suppressHydrationWarning>
          <h2 data-w-id="72829d13-2202-10c4-e992-d964805effa0" className="heading-style-h3" suppressHydrationWarning>
            Comprehensive Legal Services Tailored To Protect Your Rights
          </h2>
        </div>
      </div>

      <div className="services-loop-desktop">
        <div className="services-loop-viewport">
          <div className="services-loop-track">
            <div className="services-loop-set">
              {services.map((service) => (
                <DesktopCard key={`desktop-a-${service.href}`} service={service} />
              ))}
            </div>
            <div className="services-loop-set" aria-hidden="true">
              {services.map((service) => (
                <DesktopCard key={`desktop-b-${service.href}`} service={service} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        data-delay="4000"
        data-animation="slide"
        className="services-loop-mobile project-slider w-slider"
        data-autoplay="true"
        data-easing="ease"
        data-hide-arrows="false"
        data-disable-swipe="false"
        data-autoplay-limit="0"
        data-nav-spacing="3"
        data-duration="500"
        data-infinite="true"
        suppressHydrationWarning
      >
        <div className="project-mask w-variant-314d80a7-7c1e-c7b8-2834-1719819b2756 w-slider-mask" suppressHydrationWarning>
          {services.map((service) => (
            <MobileSlide key={`mobile-${service.href}`} service={service} />
          ))}
        </div>
        <div
          className="slider-arrow-project cc-left w-variant-314d80a7-7c1e-c7b8-2834-1719819b2756 w-slider-arrow-left"
          suppressHydrationWarning
        >
          <div className="z-index-2-5 w-icon-slider-left" suppressHydrationWarning></div>
          <div className="arrow_dot-3" suppressHydrationWarning></div>
        </div>
        <div
          className="slider-arrow-project cc-right w-variant-314d80a7-7c1e-c7b8-2834-1719819b2756 w-slider-arrow-right"
          suppressHydrationWarning
        >
          <div className="z-index-2-5 w-icon-slider-right" suppressHydrationWarning></div>
          <div className="arrow_dot-3" suppressHydrationWarning></div>
        </div>
        <div className="hide w-slider-nav" suppressHydrationWarning></div>
      </div>
    </div>
  );
}
