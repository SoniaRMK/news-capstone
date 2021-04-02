import React from 'react';
const FeaturedArticle = (article) => {
  return <img src={article.article.image.url} alt=''/>;
};

export default FeaturedArticle;
