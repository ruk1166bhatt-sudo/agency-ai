const testimonialsData = [
  { quote: 'Agency.AI transformed our marketing. Their AI strategies helped us scale faster than we ever imagined. Highly recommended!!', name: 'James Carter', role: 'CEO, TrendFlyer', initials: 'JC' },
  { quote: 'The team is professional, responsive and delivers real results. Our ads have never been more effective. Truly world class!!', name: 'Sarah Mitchell', role: 'Marketing Director, MedCare', initials: 'SM' },
]

const Testimonials = ({ theme }) => {
  return (
    <section className='px-6 md:px-16 lg:px-24 py-20' style={{ borderTop: '0.5px solid #111' }}>
      <div className='text-center mb-16'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4'>
          What Our <span style={{ color: '#a78bfa' }}>Clients Say</span>
        </h2>
        <p style={{ color: '#666', fontSize: '14px' }}>Real feedback from real clients</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {testimonialsData.map((t, index) => (
          <div key={index} style={{ background: '#111', border: '0.5px solid #222', borderRadius: '12px', padding: '24px' }}>
            <p style={{ fontSize: '13px', color: '#888', lineHeight: '1.7', fontStyle: 'italic', marginBottom: '16px' }}>
              "{t.quote}"
            </p>
            <div className='flex items-center gap-3'>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#1a0f2e', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', color: '#a78bfa', fontWeight: '500' }}>
                {t.initials}
              </div>
              <div>
                <p style={{ fontSize: '13px', fontWeight: '500' }}>{t.name}</p>
                <p style={{ fontSize: '11px', color: '#666' }}>{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials