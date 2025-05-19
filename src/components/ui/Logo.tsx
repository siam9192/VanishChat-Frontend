import React from 'react';
import { Link } from 'react-router';

function Logo() {
  return (
    <Link to={'/'}>
      <img src="/src/assets/logo.png" alt="" className=" size-12 md:size-18" />
    </Link>
  );
}

export default Logo;
