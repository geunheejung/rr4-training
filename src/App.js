import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Posts from './routes/Posts';
import Login from './routes/Login';
import MyPage from './routes/MyPage';
import Search from './routes/Search';
import NoMatch from './routes/NoMatch';
import Header from './components/Header';

const App = () => {
    return (
        <Router>
            {/* Router 컴포넌트 내부의 child 는 무조건 하나여야 한다. 굳이 2개 이상을 넣고 싶다면 block 레벨로 감싸줘야 한다. */}
            <div>
              <Header />
              {/* exact는 완벽하게 매칭될 경우에만, Route는 정해진 path를 하나하나 비교한다 그래서 exact가 없을 경우 동일한것 모든게 매칭된것이다. switch문과 같나? */}
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about/:username" component={About}/>
                <Route path="/posts" component={Posts} />
                <Route path="/login" component={Login} />
                <Route path="/me" component={MyPage} />
                <Route path="/search" component={Search} />
                <Route component={NoMatch} />
              </Switch>
            </div>
        </Router>
    );
};

export default App;
