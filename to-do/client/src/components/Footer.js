import React from 'react';

function Footer() {
  return (
    <div className="footer footer__container">
     <h5>Made with {' '}
       <span
            className="emoji"
            role="img"
            aria-label="heart"
            aria-hidden="false"
          >
            ❤️
          </span>{' '}
            by<a href="https://github.com/puentedg"><b> Gabriella</b></a></h5>
    </div>
  );
}

export default Footer;
