'use client';

import { Box, Container, Grid } from '@mui/material';
import { useState, useEffect } from 'react';

import { NewsArticleType } from '@/types/type';

import NewsCard from '../../../components/NewsCard';

export default function Home() {
  const [datas, setDatas] = useState<NewsArticleType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?category=business&apiKey=${process.env.NEXT_PUBLIC_NEWS_ORG_API_KEY}`,
        );
        const data = await response.json();
        setDatas(data.articles);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Container>
        <Grid container spacing={3}>
          {datas.map((data, index) => (
            <Grid key={index}>
              <NewsCard article={data} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
