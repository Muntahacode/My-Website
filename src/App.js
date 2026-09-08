import React from "react";
import emailjs from "@emailjs/browser";
import "./App.css";

function App() {
  const SendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_977aiwj",
      "template_e2h1cel",
      e.currentTarget,
      {
        publicKey: "gZCI4VuUZh8p-VeNF",
      }
    )
    .then(() => {
      alert("Message sent successfully! ❤️");
      e.currentTarget.reset();
    })
    .catch((error) => {
      console.log("FAILED...", error);
      alert("Message could not be sent. Please try again.");
    });
};
  return (
    <div className="app">

      {/* NAVBAR */}
      <header className="header">
        <a href="#home" className="logo">
          <span>Muntaha</span>
        </a>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="nav-btn">
          Let's Talk <span>↗</span>
        </a>
      </header>


      {/* HERO */}
      <section className="hero" id="home">

        <div className="hero-content">

          <p className="welcome">
            ✦ Hello, I'm
          </p>

          <h1>
            Muntaha
            <br />
            <span>Web Developer</span>
          </h1>

          <p className="hero-description">
            I create modern, responsive and user-friendly websites
            that help businesses and brands stand out online.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="primary-btn">
              View My Work →
            </a>

            <a href="#contact" className="secondary-btn">
              Hire Me
            </a>

          </div>

        </div>


        {/* CODE CARD */}
        <div className="hero-visual">

          <div className="glow"></div>

          <div className="code-card">

            <div className="code-header">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="code">

              <p>
                <span className="pink">&lt;div</span>{" "}
                <span className="blue">class</span>=
                <span className="green">"developer"</span>
                <span className="pink">&gt;</span>
              </p>

              <p className="indent">
                <span className="pink">&lt;h1&gt;</span>
                Hello World
                <span className="pink">&lt;/h1&gt;</span>
              </p>

              <p className="indent">
                <span className="pink">&lt;p&gt;</span>
                Let's Build Something Amazing
                <span className="pink">&lt;/p&gt;</span>
              </p>

              <p>
                <span className="pink">&lt;/div&gt;</span>
              </p>

            </div>

          </div>


          <div className="tech html">HTML</div>
          <div className="tech css">CSS</div>
          <div className="tech js">JS</div>
          <div className="tech react">React</div>

        </div>

      </section>


      {/* STATS */}
      <section className="stats">

        <div>
          <h3>20+</h3>
          <p>Projects Completed</p>
        </div>

        <div>
          <h3>15+</h3>
          <p>Happy Clients</p>
        </div>

        <div>
          <h3>2+</h3>
          <p>Years Experience</p>
        </div>

        <div>
          <h3>100%</h3>
          <p>Client Satisfaction</p>
        </div>

      </section>


      {/* ABOUT */}
      <section className="section" id="about">

        <div className="section-heading">
          <p>ABOUT ME</p>
          <h2>
            Turning Ideas Into
            <span> Digital Experiences</span>
          </h2>
        </div>

        <div className="about">

          <div className="about-image">

            {/* Baad mein apni picture yahan laga sakti ho */}
            <div className="profile-placeholder">
              &lt;/&gt;
            </div>

            <div className="experience">
              <strong>2+</strong>
              <small>Years Experience</small>
            </div>

          </div>


          <div className="about-text">

            <h3>
              Passionate about creating beautiful websites.
            </h3>

            <p>
              I'm a passionate web developer who loves turning
              ideas into clean, modern and functional websites.
            </p>

            <p>
              I focus on responsive design, smooth user experience
              and writing clean code that is easy to maintain.
            </p>

            <div className="points">
              <p>✓ Responsive Websites</p>
              <p>✓ Clean & Modern UI</p>
              <p>✓ Fast Performance</p>
              <p>✓ User Friendly</p>
            </div>

          </div>

        </div>

      </section>


      {/* SKILLS */}
      <section className="section dark-section" id="skills">

        <div className="section-heading">
          <p>MY SKILLS</p>
          <h2>
            Technologies I
            <span> Work With</span>
          </h2>
        </div>


        <div className="skills">

          <div className="skill">
            <div className="skill-icon html-icon">HTML</div>
            <h3>HTML5</h3>
            <p>Semantic & Clean Structure</p>
            <div className="bar">
              <span style={{ width: "95%" }}></span>
            </div>
            <small>95%</small>
          </div>


          <div className="skill">
            <div className="skill-icon css-icon">CSS</div>
            <h3>CSS3</h3>
            <p>Modern Responsive Design</p>
            <div className="bar">
              <span style={{ width: "90%" }}></span>
            </div>
            <small>90%</small>
          </div>


          <div className="skill">
            <div className="skill-icon js-icon">JS</div>
            <h3>JavaScript</h3>
            <p>Interactive Web Experiences</p>
            <div className="bar">
              <span style={{ width: "85%" }}></span>
            </div>
            <small>85%</small>
          </div>


          <div className="skill">
            <div className="skill-icon react-icon">⚛</div>
            <h3>React JS</h3>
            <p>Dynamic Web Applications</p>
            <div className="bar">
              <span style={{ width: "80%" }}></span>
            </div>
            <small>80%</small>
          </div>


          <div className="skill">
            <div className="skill-icon node-icon">JS</div>
            <h3>Node JS</h3>
            <p>Backend Development</p>
            <div className="bar">
              <span style={{ width: "75%" }}></span>
            </div>
            <small>75%</small>
          </div>


          <div className="skill">
            <div className="skill-icon python-icon">Py</div>
            <h3>Python</h3>
            <p>Programming & Automation</p>
            <div className="bar">
              <span style={{ width: "85%" }}></span>
            </div>
            <small>85%</small>
          </div>

        </div>

      </section>

      {/* SERVICES */}
      <section className="section dark-section" id="services">

        <div className="section-heading">
          <p>WHAT I DO</p>
          <h2>
            My
            <span> Services</span>
          </h2>
        </div>


        <div className="services">

          <div className="service">
            <div className="service-number">01</div>
            <div className="service-icon">⌘</div>
            <h3>Web Development</h3>
            <p>
              Modern and functional websites built with clean
              and scalable code.
            </p>
          </div>


          <div className="service">
            <div className="service-number">02</div>
            <div className="service-icon">✦</div>
            <h3>UI/UX Design</h3>
            <p>
              Beautiful interfaces designed to provide an
              excellent user experience.
            </p>
          </div>


          <div className="service">
            <div className="service-number">03</div>
            <div className="service-icon">▣</div>
            <h3>Responsive Design</h3>
            <p>
              Websites that look perfect on mobile, tablet
              and desktop.
            </p>
          </div>


          <div className="service">
            <div className="service-number">04</div>
            <div className="service-icon">⚡</div>
            <h3>Website Optimization</h3>
            <p>
              Fast, lightweight and optimized websites for
              better performance.
            </p>
          </div>

        </div>

      </section>


      {/* CONTACT */}
      <section className="section" id="contact">

        <div className="section-heading">
          <p>CONTACT ME</p>

          <h2>
            Let's Build Something
            <span> Amazing</span>
          </h2>

          <p className="subheading">
            Have a project in mind? Let's discuss your idea
            and create something amazing together.
          </p>
        </div>


        <div className="contact">
        <form className="contact-form" onSubmit={SendEmail}>

  <div className="input-row">
    <input
      type="text"
      name="user_name"
      placeholder="Your Name"
      required
    />

    <input
      type="email"
      name="user_email"
      placeholder="Your Email"
      required
    />
  </div>

  <input
    type="text"
    name="subject"
    placeholder="Subject"
    required
  />

  <textarea
    name="message"
    rows="6"
    placeholder="Tell me about your project..."
    required
  ></textarea>

  <button type="submit">
    Send Message →
  </button>

</form>
        </div>

      </section>


      {/* FOOTER */}
      <footer>

        <div className="footer-logo">
          <span>Muntaha</span>
        </div>

        <p>
          Building modern websites with passion & creativity.
        </p>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <small>
          © 2026 Muntaha. All Rights Reserved.
        </small>

      </footer>

    </div>
  );
}

export default App;