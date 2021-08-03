import React, { useState, useEffect } from 'react';

import styled from 'styled-components';


const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(query);

    if(mql.matches !== matches) {
      setMatches(mql.matches)
    }

    const listener = () => {
      setMatches(mql.matches);
    };

    mql.addListener(listener);

    return () => mql.removeListener(listener);

  }, [matches, query])
  
  return matches;
}

export default useMediaQuery;