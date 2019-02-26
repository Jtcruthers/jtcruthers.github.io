import React from 'react';

const Footer = ({  }) => {
  return (
    <div className="">
      <footer className="bg-blue">
      <div className="flex justify-between mx-auto p-4 text-sm">
        <p className="text-white">
          Created by{" "}
          <a className="font-bold no-underline text-white">
            Justin Carruthers
          </a>
        </p>

        <p>
          <a
            href="https://github.com/jtcruthers"
            className="font-bold no-underline text-white"
          >
            GitHub
        </a>
        </p>
      </div>
    </footer>
      
    </div>
  );
}

Footer.defaultProps = {};

export default Footer;
