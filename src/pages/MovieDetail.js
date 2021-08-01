import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

// Components
import Award from '../components/Award';

// Styles
import styled from 'styled-components';
import { Hero, Content } from '../styles/styles';

// Movie data
import { MovieState } from '../components/moviesState';

// Animation
import { pageAnimation } from '../components/animation';

const MovieDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  console.log(url)
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const currentMovie = movies.filter(movie => movie.url === url);

    setMovie(currentMovie[0]);
  }, [movies, url]);

  console.log(movie)

  return (
    (
      movie &&
      <Movie variants={pageAnimation} exit="exit" initial="hidden" animate="show">
        <MovieContent>
          <h2 className="h3">Movie Detail</h2>
          <img src={movie.mainImg} alt={movie.title}loading="lazy" />
        </MovieContent>
        <Awards>
          {
            movie.awards.map(award => (
              <Award 
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))
          }
        </Awards>
        <ImgDisplay>
          <img src={movie.secondaryImg} alt="" loading="lazy" />
        </ImgDisplay>
      </Movie>
    )
  );
};

const Movie  = styled(Hero)`
  padding: 0 1.5rem;
`;

const MovieContent = styled(Content)`
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  padding: 2rem 0;
  h2 {
    align-self: center;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Awards = styled.div`
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 2rem 0;
`;

const ImgDisplay = styled.div`
  min-height: 50vh;
  padding: 2rem 0;
  img {
    min-height: 90vh;
    width: 100%;
    object-fit: cover;
  }
`;

export default MovieDetail;