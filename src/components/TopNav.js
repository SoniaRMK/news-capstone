import React from 'react';
import { NavLink } from 'react-router-dom';

const topics = [
  'World',
  'U.S.',
  'Politics',
  'Business',
  'Tech',
  'Science',
  'Health',
  'Sports',
  'Arts',
  'Food',
  'Travel',
  'Real Estate',
];

const TopNav = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light'>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarTogglerDemo01'
        aria-controls='navbarTogglerDemo01'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>

      <ul
        className='navbar-nav collapse navbar-collapse justify-content-lg-around'
        id='navbarTogglerDemo01'
      >
        {topics.map((topic) => (
          <li className='nav-item' key={topic}>
            <NavLink className='nav-link' to={`/search/${topic}`}>
              {topic}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TopNav;
