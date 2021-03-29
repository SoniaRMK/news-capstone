import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import MainArticle from '../components/MainArticle';
import SidePanel from '../components/SidePanel';
import ArticleList from '../components/ArticleList';
import FeaturedArticle from '../components/FeaturedArticle';
import getAPI from '../helpers/APIHelpers';

function SearchLandingPage() {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { searchTerm } = useParams();

  useEffect(() => {
    setLoading(true);
    const params = {
      q: `${searchTerm}`,
      pageNumber: '1',
      pageSize: '25',
      autoCorrect: 'true',
      withThumbnails: 'true',
      fromPublishedDate: 'null',
      toPublishedDate: 'null',
    };
    setLoading(false);

    const onSuccess = (data) => {
      setNewsData(data.value);
    };

    const onError = (err) => {
      alert('Something went wrong');
    };

    getAPI(
      'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI',
      params,
      onSuccess,
      onError
    );
  }, [searchTerm]);

  if (loading) return 'Loading...';
  return (
    <Container fluid className='my-5'>
      <Row>
        <Col xs={12} lg={3} className='px-4'>
          <ListGroup variant='flush'>
            {newsData.length > 0 && <ArticleList details={newsData} />}
          </ListGroup>
        </Col>
        <Col xs={12} lg={6} className='border-left border-right px-4'>
          {newsData.length > 0 && <MainArticle details={newsData} />}
        </Col>
        <Col xs={12} lg={3} className='px-4'>
          <ListGroup variant='flush'>
            {newsData.length > 0 && <FeaturedArticle article={newsData[12]} />}
            {newsData.length > 0 && <SidePanel details={newsData} />}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default SearchLandingPage;
