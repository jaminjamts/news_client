// components/NewsCard.tsx

import * as React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';

import { NewsArticleType } from '../types/type';

type Props = {
  article: NewsArticleType;
};

export default function NewsCard({ article }: Props) {
  return (
    <Card sx={{ minWidth: 300, maxWidth: 350, height: 300 }}>
      <CardMedia sx={{ height: 140 }} image={article?.urlToImage} title={article?.title} />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            color: 'text.primary',
            display: '-webkit-box',
            WebkitLineClamp: 1,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {article?.title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: 'text.secondary',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {article?.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={article?.url} target="_blank" rel="noopener noreferrer">
          Дэлгэрэнгүй унших
        </Button>
      </CardActions>
    </Card>
  );
}
