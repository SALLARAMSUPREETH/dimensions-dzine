import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #f8f6f1 0%, #e8e6e1 100%)',
      padding: '2rem'
    }}>
      <div style={{
        maxWidth: '600px',
        textAlign: 'center',
        background: 'white',
        padding: '4rem 2.5rem',
        borderRadius: '1rem',
        boxShadow: '0 20px 60px rgba(84, 103, 54, 0.15)'
      }}>
        <h1 style={{
          fontFamily: 'Sentient, serif',
          fontSize: '3rem',
          fontWeight: '700',
          color: '#1a1a1a',
          marginBottom: '1rem'
        }}>404 - Page Not Found</h1>
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '1.125rem',
          color: '#4a5568',
          marginBottom: '2rem'
        }}>
          Looks like this page doesn't exist yet. Let's get you back home!
        </p>
        <Link to="/" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '1rem 2rem',
          background: '#546736',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '0.5rem',
          fontFamily: 'Inter, sans-serif',
          fontWeight: '600'
        }}>
          <FaHome />
          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
