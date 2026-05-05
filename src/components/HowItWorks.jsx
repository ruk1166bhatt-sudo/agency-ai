const stepsData = [
  { num: '1', title: 'Book a Call', desc: 'Tell us about your business, goals and what you want to achieve.' },
  { num: '2', title: 'We Build Strategy', desc: 'Our AI models and experts create a custom growth strategy for you.' },
  { num: '3', title: 'You Grow', desc: 'We execute, optimise and help you scale faster than ever before.' },
]

const HowItWorks = ({ theme }) => {
  return (
    <section className='px-6 md:px-16 lg:px-24 py-20' style={{ borderTop: '0.5px solid #111' }}>
      <div className='text-center mb-16'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4'>
          How It <span style={{ color: '#a78bfa' }}>Works</span>
        </h2>
        <p style={{ color: '#666', fontSize: '14px' }}>Three simple steps to get started</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
        {stepsData.map((step, index) => (
          <div key={index} className='text-center flex flex-col items-center gap-4'>
            <div style={{ width: '40px', height: '40px', background: '#1a0f2e', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#a78bfa', fontSize: '16px', fontWeight: '500' }}>
              {step.num}
            </div>
            <h3 style={{ fontSize: '15px', fontWeight: '500' }}>{step.title}</h3>
            <p style={{ fontSize: '12px', color: '#666', lineHeight: '1.6', maxWidth: '220px' }}>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HowItWorks