export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      padding: '20px'
    }}>
      <div style={{
        background: 'rgba(255, 255, 255, 0.95)',
        borderRadius: '20px',
        padding: '60px 80px',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
        textAlign: 'center',
        maxWidth: '600px'
      }}>
        <h1 style={{
          fontSize: '3.5rem',
          margin: '0 0 20px 0',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: '800'
        }}>
          Hi There! 👋
        </h1>
        <p style={{
          fontSize: '1.25rem',
          color: '#555',
          lineHeight: '1.8',
          margin: '0'
        }}>
          Welcome to your new web application. This is a clean, modern starting point built with Next.js and deployed on Vercel.
        </p>
        <div style={{
          marginTop: '40px',
          padding: '20px',
          background: '#f8f9fa',
          borderRadius: '10px',
          fontSize: '0.9rem',
          color: '#666'
        }}>
          <strong>Ready to customize?</strong> Start editing <code style={{
            background: '#e9ecef',
            padding: '2px 8px',
            borderRadius: '4px',
            fontFamily: 'monospace'
          }}>app/page.js</code>
        </div>
      </div>
    </div>
  )
}
