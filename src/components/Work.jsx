const workData = [
  { tag: 'Content', title: 'Fashion Brand Growth', desc: 'Increased organic reach by 312% in 6 months using AI content and targeted campaigns.' },
  { tag: 'Lead Gen', title: 'SaaS Lead Generation', desc: 'Generated 500+ qualified leads monthly through AI-powered ad targeting strategies.' },
  { tag: 'Healthcare', title: 'Clinic Marketing Success', desc: 'Transformed our marketing strategy for a clinic — 3x patient bookings in 90 days.' },
  { tag: 'Real Estate', title: 'Property Sales Boost', desc: 'Increased property enquiries by 280% with targeted social media and email campaigns.' },
]

const Work = ({ theme }) => {
  return (
    <section id='work' className='px-6 md:px-16 lg:px-24 py-20' style={{ borderTop: '0.5px solid #111' }}>
      <div className='text-center mb-16'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4'>
          Our <span style={{ color: '#a78bfa' }}>Work</span>
        </h2>
        <p style={{ color: '#666', fontSize: '14px' }}>Real results for real businesses</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {workData.map((item, index) => (
          <div key={index} style={{ background: '#111', border: '0.5px solid #222', borderRadius: '12px', padding: '28px' }}
            className='hover:border-purple-500 transition'>
            <span style={{ background: '#1a0f2e', color: '#a78bfa', fontSize: '10px', padding: '3px 10px', borderRadius: '20px' }}>
              {item.tag}
            </span>
            <h3 style={{ fontSize: '16px', fontWeight: '500', margin: '14px 0 8px' }}>{item.title}</h3>
            <p style={{ fontSize: '12px', color: '#666', lineHeight: '1.6' }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Work