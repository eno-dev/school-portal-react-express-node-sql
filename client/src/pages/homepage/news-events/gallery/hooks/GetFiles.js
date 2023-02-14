import { useState, useEffect } from 'react';
import axios from 'axios';

export const GetFiles = gallery => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/api/gallery/getFileNames/${gallery}`, {
        params: { name: gallery },
      });
      setData(response.data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [loading]);

  return { data, loading, error };
};
