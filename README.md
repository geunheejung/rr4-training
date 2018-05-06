# React router 4 트레이닝
## Velopert 님 강의참고

### 정리

1. 사용법: ES6 -> import {  } from react-router-dom
2. Router 컴포넌트로 감싸고 Route로 url 경로에 대한 path와 그에 매칭될 경우 보여져야되는 Component를 정할 수 있음.

3. Router 컴포넌트 안의 child는 오직 하나만 가능. 여러개 사용하고 싶을 경우 div로 감싸줘야함.

4. 기존의 <a> 태그로 이동할 경우 페이지가 다시 그려지면서 상태가 초기화되는데 React-router-dom에서 제공하는 Link, NavLink 컴포넌트를 이용하면 실제 dom에 그려질때는 <a> 태그로 그려지지만 <a> 태그의 동작 방식과는 다르게 페이지를 다시 그리지 않고, 매칭되지 않은 path의 컴포넌트는 hide 처리하고 매칭될 경우 show 하는 방식으로 동작하는거 같음.

5. Login과 같은 리다이렉트 처리를 구현할때에는 React-router-dom에서 제공하는 <Redirect /> 컴포넌트를 이용하면 리다이렉트 가능하나 함수나 메서드 안에서 리다이렉트를 시켜야할 경우에는 Route의 컴포넌트로 정해질 경우 Props에 *location*, *history*, *match* 가 담겨져있는데 이를 통해 url에 대한 정보나 리다이렉팅, 다른 url로 이동 가능

<hr />

ex)

<pre><code>
          <button
            onClick={() => history.push('/posts')}
          >
            Post 보러가기
          </button>
</code></pre>

<hr />

6. 다른 Route로 props를 전달해주고 싶을 경우 *:*, 를 url path앞에 붙여주면 url 파라미터로 동작함.

<hr />

<pre><code>
  <div>
    <Route exact path="/" component={Home} />
    <Route path="/about/:username" component={About} />
    <Route path="/posts" component={Posts} />
    <Route path="/login" component={Login} />
    <Route path="/me" component={MyPage} />
    <Route path="/search" component={Search} />
  </div>
</code></pre>

<hr />

이를 사용할때는 앞서 말한 props.match에서 parmas라는 obj의 프로퍼티로 담겨져서 옴.

7. query String을 다룰때는 *props.location.search* 에 담겨져있는데 한글일 경우 인코딩이 안되서 깨져있다. 이럴 경우 es6의 javascript api인 *new URLSearchParams* 를 사용하여 인코딩해주면된다.

<hr />

<pre><code>
  new URLSearchParams(location.search).get('keyword')
</code></pre>

[blog]https://developer.mozilla.org/ko/docs/Web/API/URLSearchParams

<hr />

8. <Router></Router> 태그 안의 Route의 path에 매칭되지 않을 경우 404 페이지를 보여주고 싶다면 react-router-dom 에서 제공하는 switch 컴포넌트를 사용하여 Route들을 한번 더 감싸준다. Route의 동작 방식은 순차적으로 path가 매칭될 경우 정의된 컴포넌트를 보여주는 방식이다. 그래서 exact를 서술해주지 않을 경우 모든 매칭되는 path가 다 보인것이다. <Switch></Switch> 로 <Route>들을 감싸주고 가장 마지막에 default 라우트를 정의해주면 모든 path가 매칭되지 않을 경우에 대한 컴포넌트를 보여줄 수 있다.

<hr />

### 전체적인 루트 Router 부분

<pre><code>

<Router>
  <div>
    <Header />

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

</code></pre>
