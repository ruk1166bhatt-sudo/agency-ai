const statsData = [
  { num: '500+', label: 'Clients' },
  { num: '98%', label: 'Satisfaction' },
  { num: '$2M', label: 'Revenue' },
  { num: '50+', label: 'Countries' },
]

const Stats = ({ theme }) => {
  return (
    <section className='px-6 md:px-16 lg:px-24 py-12' style={{ borderTop: '0.5px solid #111', borderBottom: '0.5px solid #111' }}>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
        {statsData.map((stat, index) => (
          <div key={index} className='text-center' style={{ background: '#111', borderRadius: '12px', padding: '20px' }}>
            <p style={{ color: '#a78bfa', fontSize: '28px', fontWeight: '500' }}>{stat.num}</p>
            <p style={{ color: '#666', fontSize: '12px', marginTop: '4px' }}>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Stats