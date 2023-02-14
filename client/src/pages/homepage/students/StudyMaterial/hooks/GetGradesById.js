import { useState, useEffect } from 'react';
import axios from 'axios';

export const GetGradesById = grade => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:1337/api/grades/${grade}?populate=*`);
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
    if (grade > 0) {
      fetchData();
    }
  }, [loading, grade]);

  return { data, loading, error };
};
