import Header from '../components/Layout/Header';
import LazyImage from '../components/LazyImage';
import Footer from '../components/Layout/Footer';

const About = () => {
  return (
    <div className="page-wrapper">
      <Header />
      <main className="main-wrapper">
        {/* About Hero Section */}
        <div className="about-hero">
          <div className="about-hero-block">
            <div className="padding-horizontal padding-medium">
              <div className="padding-vertical padding-medium">
                <div className="about-hero-bottom">
                  <div className="about-hero-title">
                    <div className="clip-title">
                      <h2 className="heading-style-h1">
                        <span className="word-one">Meet</span> <span className="word-two">the</span>
                      </h2>
                    </div>
                    <div className="clip-title">
                      <h2 className="heading-style-h1">
                        <span className="word-three">Company</span>
                      </h2>
                    </div>
                  </div>
                  <div className="about-hero-description">
                    <div className="margin-bottom">
                      <div className="load-1">
                        <p className="text-size-regular text-color-grey">
                          After 8 years in the industry, our team has designed spaces from New York to Monaco.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-hero-top">
              <div className="about-hero-image">
                <div className="image-overlay"></div>
                <LazyImage  
                  src="/images/Home-040_1Home-040.webp" 
                  loading="lazy" 
                  alt="Client office interior design." 
                  className="image-fill"
                />
              </div>
              <div className="about-hero-image">
                <div className="image-overlay"></div>
                <LazyImage  
                  src="/images/Home-018_1Home-018.webp" 
                  loading="lazy" 
                  alt="Client home interior design." 
                  className="image-fill"
                />
              </div>
              <div className="about-hero-image">
                <div className="image-overlay"></div>
                <LazyImage  
                  src="/images/Home-016_1Home-016.webp" 
                  loading="lazy" 
                  alt="Client home interior design." 
                  className="image-fill"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div id="intro" className="about-intro">
          <div>
            <div className="padding-top padding-huge">
              <div className="padding-horizontal padding-small">
                <div className="action-block">
                  <div className="intro-title">
                    <p className="heading-style-h2 text-style-allcaps text-align-center">
                      interiors with a difference
                    </p>
                  </div>
                  {/* Timeline content will be added here */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
