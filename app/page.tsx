import Link from 'next/link'
import Navigation from '@/components/Navigation'

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <section className="hero">
          <h1>Cornell High Frequency Trading Club</h1>
          <p>The premiere trading club for FPGA Engineers at Cornell University</p>
        </section>

        <div className="container">
          <section className="section">
            <h2>Welcome to Cornell HFTC</h2>
            <p>
              The Cornell High Frequency Trading Club (HFTC) is dedicated to advancing 
              the field of high-frequency trading through cutting-edge FPGA engineering. 
              We bring together passionate engineers, traders, and researchers to explore 
              the intersection of hardware acceleration and financial markets.
            </p>
            <p>
              Our club focuses on developing low-latency trading systems, optimizing 
              algorithms for FPGA implementation, and pushing the boundaries of what's 
              possible in high-frequency trading technology.
            </p>
          </section>

          <section className="section">
            <h2>What We Do</h2>
            <div className="card-grid">
              <div className="card">
                <h3>FPGA Development</h3>
                <p>
                  Design and implement high-performance trading systems using Field-Programmable 
                  Gate Arrays for ultra-low latency execution.
                </p>
              </div>
              <div className="card">
                <h3>Algorithm Optimization</h3>
                <p>
                  Develop and optimize trading algorithms specifically tailored for hardware 
                  acceleration and real-time market data processing.
                </p>
              </div>
              <div className="card">
                <h3>Research & Innovation</h3>
                <p>
                  Conduct cutting-edge research in high-frequency trading, exploring new 
                  methodologies and technologies in the field.
                </p>
              </div>
            </div>
          </section>

          <section className="section">
            <h2>Get Involved</h2>
            <p>
              Whether you're an experienced FPGA engineer or just starting out, we welcome 
              members from all backgrounds. Join us to work on exciting projects, learn from 
              industry experts, and be part of a community pushing the frontiers of trading technology.
            </p>
            <p>
              <Link href="/about" style={{ color: '#b31b1b', fontWeight: 600 }}>
                Learn more about us →
              </Link>
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

