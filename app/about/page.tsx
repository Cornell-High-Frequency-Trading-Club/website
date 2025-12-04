import Navigation from '@/components/Navigation'

export default function About() {
  return (
    <>
      <Navigation />
      <main>
        <div className="container">
          <section className="section">
            <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>About Us</h1>
            
            <h2>Our Mission</h2>
            <p>
              The Cornell High Frequency Trading Club (HFTC) is committed to fostering 
              excellence in high-frequency trading through innovative FPGA engineering. 
              We aim to bridge the gap between theoretical knowledge and practical 
              implementation, creating a platform where students can develop real-world 
              skills in low-latency trading systems.
            </p>

            <h2>Who We Are</h2>
            <p>
              We are a diverse group of engineers, computer scientists, and finance 
              enthusiasts united by our passion for high-frequency trading and hardware 
              acceleration. Our members come from various backgrounds, bringing unique 
              perspectives and expertise to our projects.
            </p>

            <h2>What Makes Us Unique</h2>
            <div className="card-grid">
              <div className="card">
                <h3>FPGA Expertise</h3>
                <p>
                  Specialized focus on Field-Programmable Gate Arrays, the hardware 
                  foundation of modern high-frequency trading systems.
                </p>
              </div>
              <div className="card">
                <h3>Hands-On Projects</h3>
                <p>
                  Work on real-world trading systems and algorithms, gaining practical 
                  experience that translates directly to industry.
                </p>
              </div>
              <div className="card">
                <h3>Industry Connections</h3>
                <p>
                  Network with professionals from leading trading firms and technology 
                  companies in the financial sector.
                </p>
              </div>
            </div>

            <h2>Our Focus Areas</h2>
            <ul style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#4a4a4a', marginLeft: '2rem', marginTop: '1rem' }}>
              <li>Low-latency system design and optimization</li>
              <li>FPGA programming and hardware acceleration</li>
              <li>Market data processing and analysis</li>
              <li>Trading algorithm development</li>
              <li>Network optimization for trading systems</li>
              <li>Risk management and system reliability</li>
            </ul>

            <h2>Join Our Community</h2>
            <p>
              We welcome students from all disciplines who are interested in high-frequency 
              trading, FPGA engineering, or financial technology. Whether you're looking 
              to deepen your technical skills, explore a new field, or connect with 
              like-minded individuals, Cornell HFTC provides the perfect environment.
            </p>
          </section>
        </div>
      </main>
      <footer>
        <p>&copy; 2024 Cornell High Frequency Trading Club. All rights reserved.</p>
      </footer>
    </>
  )
}

