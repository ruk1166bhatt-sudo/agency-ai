const Navbar = ({ theme, setTheme }) => {
  return (
    <nav style={{ borderBottom: '0.5px solid #222', position: 'sticky', top: 0, zIndex: 50, background: '#0a0a0a' }}
      className='flex items-center justify-between px-6 md:px-16 py-4'>

      <h1 style={{ fontSize: '18px', fontWeight: '500' }}>
        Agency<span style={{ color: '#a78bfa' }}>.AI</span>
      </h1>

      <ul className='flex gap-8'>
        {['Home', 'Services', 'Work', 'Contact'].map((link) => (
          <li key={link}>
            <a href={`#${link.toLowerCase()}`} style={{ fontSize: '13px', color: '#888' }} className='hover:text-white transition'>
              {link}
            </a>
          </li>
        ))}
      </ul>

      <button
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        style={{ width: '34px', height: '34px', background: '#1a1a1a', borderRadius: '50%', border: 'none', cursor: 'pointer', fontSize: '14px' }}
        className='flex items-center justify-center'>
        {theme === 'light' ? '🌙' : '☀️'}
      </button>

    </nav>
  )
}

export default Navbar