import React, { useState } from 'react';

import { motion } from 'framer-motion';

import styled from 'styled-components';

const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <motion.div layout className="question" onClick={() => setToggle(!toggle)}>
      <motion.h3 layout className="h4">{title}</motion.h3>
      {toggle && children}
      <FaqLine></FaqLine>
    </motion.div>
  );
};

const FaqLine = styled.div`
  width: 100%;
  height: 0.5rem;
  background: #fff;
  margin-top: 1.5rem;
`;

export default Toggle;