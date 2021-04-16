# Next.js 튜토리얼

> Next.js automatically optimizes your application for the best performance by code splitting, client-side navigation, and prefetching (in production).



* Code Splitting을 자동으로 하기 때문에, 페이지가 렌더링 될 때 모든 코드를 한번에 불러오지 않고, 렌더링되는 페이지에 해당하는 코드만 미리 불러온다. 그래서 페이지 수가 많아도 빠른 렌더링이 가능하다.

* 브라우저의 viewport에 <Link/> 컴포넌트가 나타나면, 해당 페이지에 대한 코드를 백그라운드에 prefetch해둔다.

* 브라우저에 의한 페이지 이동이 아닌, JavaScript를 이용한 페이지 이동이 일어나므로, Client Side에서 라우팅이 가능하다. 즉, 더 빠르다

---
* Next.js에는 CSS, Sass support가 내장되어있다.
* 이미지 같은 Static Assets을 public 디렉토리에 보관한다.
* 이미지 최적화 기능을 제공한다.