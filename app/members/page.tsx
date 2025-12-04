import Navigation from '@/components/Navigation'

export default function Members() {
  // Sample member data - replace with actual member information
  const members = [
    {
      name: 'John Doe',
      role: 'President',
      bio: 'Senior studying Computer Engineering with a focus on FPGA design and low-latency systems.',
    },
    {
      name: 'Jane Smith',
      role: 'Vice President',
      bio: 'Graduate student in Electrical Engineering, specializing in hardware acceleration for financial applications.',
    },
    {
      name: 'Alex Chen',
      role: 'Technical Lead',
      bio: 'Computer Science major with expertise in algorithm optimization and market microstructure.',
    },
    {
      name: 'Sarah Johnson',
      role: 'FPGA Engineer',
      bio: 'Electrical Engineering student passionate about high-performance computing and trading systems.',
    },
    {
      name: 'Michael Brown',
      role: 'Research Lead',
      bio: 'Graduate researcher working on novel approaches to ultra-low latency trading infrastructure.',
    },
    {
      name: 'Emily Davis',
      role: 'Member',
      bio: 'Computer Engineering student interested in the intersection of hardware and finance.',
    },
  ]

  return (
    <>
      <Navigation />
      <main>
        <div className="container">
          <section className="section">
            <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Our Members</h1>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#4a4a4a', marginBottom: '2rem' }}>
              Meet the talented individuals who make up the Cornell High Frequency Trading Club. 
              Our members bring diverse expertise in FPGA engineering, computer science, and 
              financial technology.
            </p>

            <div className="card-grid">
              {members.map((member, index) => (
                <div key={index} className="member-card">
                  <h3>{member.name}</h3>
                  <div className="role">{member.role}</div>
                  <div className="bio">{member.bio}</div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '3rem', padding: '2rem', background: '#f8f8f8', borderRadius: '8px' }}>
              <h2 style={{ marginBottom: '1rem' }}>Interested in Joining?</h2>
              <p style={{ color: '#4a4a4a', lineHeight: '1.8' }}>
                We're always looking for passionate individuals interested in high-frequency trading 
                and FPGA engineering. If you'd like to become a member or learn more about our club, 
                please reach out to us!
              </p>
            </div>
          </section>
        </div>
      </main>
      <footer>
        <p>&copy; 2024 Cornell High Frequency Trading Club. All rights reserved.</p>
      </footer>
    </>
  )
}

