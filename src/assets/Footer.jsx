const Footer = ({ theme }) => {
  return (
    <footer className='px-6 md:px-16 lg:px-24 py-10 flex flex-col md:flex-row items-center justify-between gap-4' style={{ borderTop: '0.5px solid #222' }}>
      <h1 style={{ fontSize: '16px', fontWeight: '500' }}>Agency<span style={{ color: '#a78bfa' }}>.AI</span></h1>
      <p style={{ fontSize: '11px', color: '#555' }}>© 2026 Agency.AI. All rights reserved.</p>
      <div className='flex gap-6'>
        {['Home', 'Services', 'Work', 'Contact'].map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`} style={{ fontSize: '11px', color: '#555' }} className='hover:text-white transition'>
            {link}
          </a>
        ))}
      </div>
    </footer>
  )
}

export default Footer