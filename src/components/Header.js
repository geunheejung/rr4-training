import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      {/* Link 태그는 실제 렌더링될 경우 a태그로 된다. */}
      {/* a 태그를 누를 시 실제 페이지가 이동되어도 다시 그리지 않는다 숨기고 보여지고의 동작 방 */}
      <NavLink
        exact
        to="/"
        className="item"
        activeClassName="active"
      >홈</NavLink>
      {' '}
      <NavLink
        to="/about/Geuni"
        className="item"
        activeClassName="active"
      >소개</NavLink>
      {' '}
      <NavLink
        to="/posts"
        className="item"
        activeClassName="active"
      >포스트</NavLink>
      {' '}
      <NavLink
        to="/login"
        className="item"
        activeClassName="active"
      >로그인</NavLink>
      {' '}
      <NavLink
        to="/me"
        className="item"
        activeClassName="active"
      >마이페이지</NavLink>
      <NavLink
        to="/search"
        className="item"
        activeClassName="active"
      >검색</NavLink>
    </div>
  );
};

export default Header;
