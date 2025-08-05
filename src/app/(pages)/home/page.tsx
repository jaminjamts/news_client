'use client';

import { Box, Container, Grid } from '@mui/material';
import { useState, useEffect } from 'react';

import { NewsArticleType } from '@/types/type';

import NewsCard from '../../../components/NewsCard';
import Loading from '../../../components/Loading';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [datas, setDatas] = useState<NewsArticleType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?category=business&apiKey=${process.env.NEXT_PUBLIC_NEWS_ORG_API_KEY}`,
        );
        const data = await response.json();
        setDatas(data?.articles);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error('Fetch error:', error);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Container>
        <Grid container size={12}>
          <Grid container size={3} spacing={3}>
            {datas.map((data, index) => (
              <Grid key={index}>
                <NewsCard article={data} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
