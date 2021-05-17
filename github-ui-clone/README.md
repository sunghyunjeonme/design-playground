# GitHub UI

# 배운 개념

### ✔️ 다양한 메타 태그 (오픈 그래프와 트위터 카드)

<details>
<summary>펼치기</summary>

```html
<meta name="author" content="Hyun" />
<meta
  name="description"
  content="GitHub is where people build software. More than 65 million people use GitHub to discover, fork, and contribute to over 200 million projects."
/>
<meta
  name="viewport"
  content="width=device-width , initial-scale=1, user-scalable=no, maximum-scale=1, minimum-scale=1"
/>
<!-- http://ogp.me/ -->
<meta property="og:type" content="website" />
<meta property="og:site_name" content="GitHub" />
<meta property="og:title" content="Build software better, together" />
<meta
  property="og:description"
  content="GitHub clone coding / GitHub is where people build software. More than 31 million people use GitHub to discover, fork, and contribute to over 100 million projects."
/>
<meta property="og:image" content="img/logo__github.png" />
<meta property="og:url" content="https://github.com" />
<!-- https://developer.twitter.com/en/docs/tweets/optimize-with-cards/guides/getting-started.html -->
<meta property="twitter:card" content="summary" />
<meta property="twitter:site" content="GitHub" />
<meta property="twitter:title" content="Build software better, together" />
<meta
  property="twitter:description"
  content="GitHub clone coding / GitHub is where people build software. More than 31 million people use GitHub to discover, fork, and contribute to over 100 million projects."
/>
<meta property="twitter:image" content="img/logo__github.png" />
<meta property="twitter:url" content="https://github.com" />
```

</details>

메타 태그의 중요성을 더 알 수 있었다. 메타 태그는 직접적으로 SEO에 큰 영향을 끼친다. 오픈 그래프와 트위터 카드 태그를 새롭게 알게 되었다. 모든 태그를 모두 외울 순 없겠지만, 필요에 따라서 적재적소에 사용할 수 있도록 해야겠다.

### ✔️ 브라우저 스타일 초기화

- CDN 방식
- 직접 다운로드 받아서 사용하는 방식

`reset.css`와 같은 외부 라이브러리는 메인 `style.css`보다 먼저 작성되어야 한다. 왜? `reset.css`으로 스타일 초기화를 진행한 후에 `style.css`가 로딩되어야 하기 때문이다.

### ✔️ BEM(Block Element Modifier) 방법론

효율으로 CSS를 작성할 수 있는 방법론이다.

```css
<div class="container">
  <div class="container__item"></div>
</div>
```

- 일반적인 작명은 `-`로 구분한다.
- 구조적인 일부분은 `__`로 포함되어 있음을 명시한다.
  - `container` 안에 포함된 아이템은 `container__item`
- 상태를 나타내는 부분은 `--`로 명시한다.
  - `btn-success`로 허용 상태의 버튼을 지정할 수 있음

```css
/* btn */
.btn.btn--primary {
  border: 1px solid #65b836;
  color: #fff;
  background: #55a532 linear-gradient(#91dd70, #55ae2e);
}
```

[코드펜에서 보기](https://codepen.io/hyuns619/pen/BaWBjaV)

위와 같이 공통적으로 사용되는 CSS를 먼저 정의해 놓고, 그 상태에 따라서 변화를 주는 형태로 BEM 방법론을 보다 효과적으로 사용할 수 있다.

### ✔️ 색상 표현

- 색상은 `background:white`가 아니라 `background:#fffff`처럼 헥사 코드로 표현한다. Why? 브라우저마다 표현하는 색상이 다르기 때문에 정확한 색상을 지정해줘야 한다.

### ✔️ 컨테이너

- `margin:0 auto;`를 통해 가운데 정렬을 할 수 있다. 정렬하고자 하는 요소가 `display:block` 상태여야 하고 `width` 크기가 지정되어 있어야 사용할 수 있다.

### ✔️ 로고 이미지와 대체 텍스트

```html
<!-- html -->
<div class="menu-group float--left">
  <div class="logo">
    <a href="#">GitHub</a>
  </div>
</div>
```

```css
header .logo a {
  display: block;
  width: 32px;
  height: 32px;
  background-image: url("../img/logo.svg");
  text-indent: -9999px;
}
```

- 강의에서는 위와 같이 로고를 div 태그 내부의 a 태그에 대체 텍스트를 지정하고 CSS `text-indent:-9999px;`으로 텍스트가 안 보이게 하는 효과를 주었다.

- 로고 이미지가 hover가 되었을 때, 색상이 변경되는 것을 고려해서 `background-image:url()`로 이미지를 설정한 것 같은데 img 태그를 사용하지 않은 것에 의문이 들었다.

- [img vs CSS background-image](https://stackoverflow.com/questions/492809/when-to-use-img-vs-css-background-image)와 [하드웨어 가속](https://d2.naver.com/helloworld/2061385?source=post_page---------------------------)을 참고한 결과 SEO 관점에서 img 태그를 사용하는 게 좋을 것 같다.

### ✔️ 16:9 반응형 비디오 삽입

- 유튜브에서는 기본적으로 16:9 비율을 제공한다. 화면이 축소되거나 확대되어도 해당 비율은 그대로 유지돼야 한다.
- 비디오를 삽입할 때, 반응형을 고려하기 위해서 `<div class="video">` 태그 안에 반응형 매개체 역할을 하는 `<div class="video-ratio">` 태그를 만들고 그 안에 비디오 마크업을 작성한다. [코드펜에서 보기](https://codepen.io/hyuns619/pen/GRWoPZb)

### ✔️ 유용한 팁

- Submit 버튼은 데이터 제출을 위해 필요하지만, 화면에 나오지 않게 하기 위해 CSS로 조정
- 각 섹션 구조를 파악하면서 텍스트 영역과 양식 영역이 구분되어 있는데 텍스트 영역은 플렉서블하게 작업하고 양식은 영역은 고정될 수 있도록 작업함
- 텍스트와 제목이 계속 반복되었다. 반복되는 것은 어떻게 한다? 재사용성을 잘 고려해 보자.
- 백그라운드 이미지의 명암을 `::before`와 `position`을 통해서 추가로 조정할 수 있다.
- input의 너비를 각각 제어하지 말고 부모 요소의 너비를 지정해서 퍼센트로 input의 너비를 조정하자.
- 헤더, 푸터, form 태그 등에 `ul`과 `li`를 사용하자.
- 텍스트가 아래로 내려오는 효과는 `br` 태그를 사용하지 말고 `&nbsp;`를 사용해서 단어를 연결시켜서 자연스럽게 줄바꿈이 될 수 있도록 하자. Why? 최소한의 반응형을 고려하기 위함이다.

### ✔️ 미디어 쿼리 파일 관리

`main.css`에 미디어 쿼리로 반응형 작업을 하면서 기존 코드를 보려면 스크롤을 한참 위로 올려야 했다. 디바이스별로 파일을 나누어서 관리하자.
