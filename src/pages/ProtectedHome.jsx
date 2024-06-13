import { Navigate } from 'react-router-dom';
import  supabase  from './supabaseclient.js';
import { useState, useEffect } from 'react';

const ProtectedHome = ({ component: Component }) => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSession = async () => {
      const response = await supabase.auth.getSession();
      setSession(response.data.session); // Ensure correct session data handling
      setLoading(false); // Set loading to false once session is fetched
    };
    
    getSession();
  }, []);

  if (loading) {
    return <div className='place-self-center'>Loading...</div>; // Optionally add a loading state while fetching session
  }

  return (
    <>
      {!session ? <Navigate to="/login" /> : Component}
    </>
  );
};

export default ProtectedHome;

