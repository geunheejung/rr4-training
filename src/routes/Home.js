import React from 'react';

const Home = ({ history }) => {
    return (
        <div>
            홈
          <button
            onClick={() => history.push('/posts')}
          >
            Post 보러가기
          </button>
        </div>
    );
};

export default Home;
