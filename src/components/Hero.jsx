const Hero = ({ theme }) => {
  return (
    <section id='home' className='px-6 md:px-16 lg:px-24 py-24 flex flex-col items-center text-center gap-6'>
      <div style={{ background: '#1a0f2e', color: '#a78bfa' }} className='text-xs font-medium px-4 py-1 rounded-full'>
        AI Powered Marketing
      </div>
      <h1 className='text-4xl md:text-6xl font-bold max-w-3xl leading-tight'>
        Grow Your Business With <span style={{ color: '#a78bfa' }}>AI Solutions</span>
      </h1>
      <p style={{ color: theme === 'dark' ? '#666' : '#555' }} className='text-lg max-w-xl'>
        We use artificial intelligence and data-driven strategies to help businesses scale faster and smarter.
      </p>
      <div className='flex gap-4 mt-2'>
        <a href='#contact' style={{ background: '#7c3aed' }} className='text-white px-8 py-3 rounded-full text-sm font-medium hover:opacity-90 transition'>
          Get Started
        </a>
        <a href='#work' style={{ border: '0.5px solid #333', color: '#888' }} className='px-8 py-3 rounded-full text-sm font-medium hover:opacity-90 transition'>
          View Work
        </a>
      </div>
    </section>
  )
}

export default Hero