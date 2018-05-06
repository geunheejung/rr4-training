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
<code>
          <button
            onClick={() => history.push('/posts')}
          >
            Post 보러가기
          </button>
</code>
<hr />
6. 다른 Route로 props를 전달해주고 싶을 경우 *:*, 를 url path앞에 붙여주면 url 파라미터로 동작함.
<hr />
\`
  <Route exact path="/" component={Home} />
  <Route path="/about/:username" component={About} />
  <Route path="/posts" component={Posts} />
  <Route path="/login" component={Login} />
  <Route path="/me" component={MyPage} />
  <Route path="/search" component={Search} />
\`
<hr />
이를 사용할때는 앞서 말한 props.match에서 parmas라는 obj의 프로퍼티로 담겨져서 옴.
7. query String을 다룰때는 *props.location.search* 에 담겨져있는데 한글일 경우 인코딩이 안되서 깨져있다. 이럴 경우 es6의 javascript api인 *new URLSearchParams* 를 사용하여 인코딩해주면된다.
<hr />
<code>
  new URLSearchParams(location.search).get('keyword')
</code>
[https://developer.mozilla.org/ko/docs/Web/API/URLSearchParams]
<hr />

