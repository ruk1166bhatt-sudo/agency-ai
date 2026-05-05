import { useState } from 'react'

const Contact = ({ theme }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ access_key: 'YOUR_WEB3FORMS_KEY', ...formData })
    })
    if (response.ok) {
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } else {
      setStatus('error')
    }
  }

  const inputStyle = {
    width: '100%',
    background: '#111',
    border: '0.5px solid #222',
    borderRadius: '10px',
    padding: '12px 16px',
    fontSize: '13px',
    color: '#888',
    outline: 'none',
  }

  return (
    <section id='contact' className='px-6 md:px-16 lg:px-24 py-20' style={{ borderTop: '0.5px solid #111' }}>
      <div className='text-center mb-16'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4'>
          Get In <span style={{ color: '#a78bfa' }}>Touch</span>
        </h2>
        <p style={{ color: '#666', fontSize: '14px' }}>Let's build something amazing together</p>
      </div>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4' style={{ maxWidth: '480px', margin: '0 auto' }}>
        <input type='text' name='name' placeholder='Your Name' value={formData.name} onChange={handleChange} required style={inputStyle} />
        <input type='email' name='email' placeholder='Your Email' value={formData.email} onChange={handleChange} required style={inputStyle} />
        <textarea name='message' placeholder='Your Message' value={formData.message} onChange={handleChange} required rows={5} style={{ ...inputStyle, resize: 'none' }} />
        <button type='submit' style={{ background: '#7c3aed', color: 'white', padding: '12px', borderRadius: '10px', fontSize: '13px', fontWeight: '500', cursor: 'pointer', border: 'none' }}>
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>
        {status === 'success' && <p style={{ color: '#22c55e', textAlign: 'center', fontSize: '13px' }}>Message sent!! 🎉</p>}
        {status === 'error' && <p style={{ color: '#ef4444', textAlign: 'center', fontSize: '13px' }}>Something went wrong. Try again!</p>}
      </form>
    </section>
  )
}

export default Contact