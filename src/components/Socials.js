import React from 'react';
import {
  ImFacebook,
  ImPinterest,
  ImInstagram,
} from 'react-icons/im'

const Socials = () => {
  return <div className='hidden xl:flex ml-24'>
   <ul className='flex gap-x-4'>
      <li>
        <a href='https://www.facebook.com' target='_blank'>
          <ImInstagram/> 
        </a>
      </li>
      <li>
        <a href='https://www.facebook.com' target='_blank'>
          <ImPinterest/> 
        </a>
      </li>
      <li>
        <a href='https://www.facebook.com' target='_blank'>
          <ImFacebook/> 
        </a>
      </li>
    </ul> 
  </div>;
};

export default Socials;
