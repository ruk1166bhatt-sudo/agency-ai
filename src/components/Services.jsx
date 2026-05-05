const servicesData = [
  { icon: '🤖', title: 'AI Content Creation', desc: 'Generate high quality content at scale using advanced AI models tailored to your brand voice.' },
  { icon: '📊', title: 'Data Analytics', desc: 'Turn raw data into actionable insights with powerful analytics and reporting tools.' },
  { icon: '🎯', title: 'Paid Advertising', desc: 'Optimise ad campaigns using AI to reach the right audience at the right time.' },
  { icon: '🔍', title: 'SEO Optimization', desc: 'Rank higher on search engines with intelligent keyword research and content strategy.' },
  { icon: '💬', title: 'Social Media Management', desc: 'Build your brand and engage audiences across all major platforms.' },
  { icon: '📧', title: 'Email Marketing', desc: 'Drive conversions with personalised email campaigns that actually get opened.' },
]

const Services = ({ theme }) => {
  return (
    <section id='services' className='px-6 md:px-16 lg:px-24 py-20'>
      <div className='text-center mb-16'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4'>
          Our <span style={{ color: '#a78bfa' }}>Services</span>
        </h2>
        <p style={{ color: '#666', fontSize: '14px' }}>Smart AI solutions to grow your brand and drive results</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {servicesData.map((service, index) => (
          <div key={index} style={{ background: '#111', border: '0.5px solid #222', borderRadius: '12px', padding: '24px' }}
            className='hover:border-purple-500 transition'>
            <div style={{ fontSize: '28px', marginBottom: '12px' }}>{service.icon}</div>
            <h3 style={{ fontSize: '14px', fontWeight: '500', marginBottom: '8px' }}>{service.title}</h3>
            <p style={{ fontSize: '12px', color: '#666', lineHeight: '1.6' }}>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services