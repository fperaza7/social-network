import { useEffect, useState } from 'react';
import postsApi from '../api/postsApi';
import { Link } from 'react-router-dom';
import PageContainer from '../components/PageContainer';

export default function PostsPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    postsApi.get('/posts').then((res) => setPosts(res.data));
  }, []);

  return (
    <PageContainer>
      <div style={styles.container}>
        <div style={styles.header}>
          <h1>Publicaciones</h1>
          <Link to="/posts/create" style={styles.link}>
            Nueva publicación
          </Link>
        </div>
        <ul style={styles.list}>
          {posts.map((p) => (
            <li key={p.id} style={styles.postItem}>
              <strong>{p.message}</strong>
            </li>
          ))}
        </ul>
      </div>
    </PageContainer>
  );
}

const styles = {
  container: {
    maxWidth: '600px',
    margin: '40px auto',
    padding: '1rem',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1rem',
  },
  link: {
    textDecoration: 'none',
    backgroundColor: '#27ae60',
    color: 'white',
    padding: '0.5rem 1rem',
    borderRadius: '5px',
  },
  list: {
    listStyle: 'none',
    padding: 0,
  },
  postItem: {
    padding: '1rem',
    border: '1px solid #eee',
    borderRadius: '5px',
    marginBottom: '1rem',
    backgroundColor: '#f9f9f9',
  },
};
