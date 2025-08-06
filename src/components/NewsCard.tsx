// components/NewsCard.tsx

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { NewsArticleType } from '@/types/type';

type Props = {
  article: NewsArticleType;
};

export default function NewsCard({ article }: Props) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 2,
          ease: 'power2.out',
        },
      );
    }
  }, []);

  if (!article.author || !article.description) {
    return null; // or fallback UI
  }

  return (
    <Card ref={cardRef} sx={{ width: 350, height: 'fit' }}>
      <CardMedia sx={{ height: 140 }} image={article?.urlToImage} title={article?.title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
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
          Дэлгэрэнгүй үзэх
        </Button>
      </CardActions>
    </Card>
  );
}
