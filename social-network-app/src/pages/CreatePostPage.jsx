import { useState } from 'react';
import postsApi from '../api/postsApi';
import { useNavigate } from 'react-router-dom';
import PageContainer from '../components/PageContainer';

export default function CreatePostPage() {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await postsApi.post('/posts', { message });
    navigate('/posts');
  };

  return (
    <PageContainer>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h1 style={styles.title}>Nueva publicación</h1>
        <textarea
          style={styles.textarea}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="¿Qué estás pensando?"
        />
        <button style={styles.button}>Publicar</button>
      </form>
    </PageContainer>
  );
}

const styles = {
  form: {
    maxWidth: '600px',
    margin: '100px auto',
    padding: '2rem',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  title: {
    textAlign: 'center',
  },
  textarea: {
    padding: '1rem',
    fontSize: '1rem',
    height: '120px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    resize: 'vertical',
  },
  button: {
    padding: '0.75rem',
    fontSize: '1rem',
    backgroundColor: '#2d3436',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};
