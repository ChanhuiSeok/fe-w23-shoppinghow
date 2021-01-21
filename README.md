# 카카오 쇼핑하우 서비스 일부 기능 개발하기

## 주요 기능
* 팝업 레이어 (최근 본 상품)
* 무한 슬라이딩 UI (홈 > 프로모션)
* 반응형 슬라이딩 UI (기획서 홈 > 패션)

## 일일 기록사항
### 1일차
* 초기 레이아웃 및 프로젝트 생성, querySelector custom API 구현
* express 설치 및 sass 설치
  * 프로젝트 기본 세팅
  * sass를 이용해 css 파일을 생성
* querySelector, querySelectorAll 커스텀 API 구현
  * dfs 활용

### 2일차
* 페이지의 헤더 및 상단 컨텐츠 영역 레이아웃과 css 구성
  * 컨텐츠 영역에 필요한 데이터는 json 데이터를 제공하는 서버 구현 후 fetch API 사용
  * 더보기 클릭 시 영역이 나타나는 이벤트
* querySelector custom api를 구현한 코드를 matches를 활용하여 리팩토링
* css, sass 폴더 분리
* 목적별로 자바스크립트 파일 분리
* 상단 컨텐츠의 carousel 동작 구현
  * 이전, 다음 버튼
  * 하단 내비게이션 바

### 3일차
* 템플릿 리터럴 방식 활용
* 더보기 기능
  * 더보기 버튼을 누르면 새로운 아이템이 5개씩 추가적으로 보이게 함

* 최근 본 상품 기능
  * 배너 이미지 클릭 시 로컬 스토리지에 저장 (key = 이미지 주소, value = Date.now())
  * 최근 본 상품 버튼에 마우스를 가져가면, 로컬 스토리지의 값을 읽어서 출력

* 기타 레이아웃 요소 구성
  * 헤더의 z-index 수정 및 위치 고정
  * 하단의 지금 뜨는 테마 카테고리 영역의 레이아웃 구성

### 4일차
* 하단의 지금 뜨는 테마 카테고리 carousel 구현
  * 이전, 다음 버튼 클릭 시 배너 1개씩 이동
  * 이전, 다음 버튼을 2초 정도 꾹 누르면 배너 2개씩 이동

* 최근 본 상품 영역
  * 화면 비율이 달라져도 영역의 위치가 고정되도록 변경 (부모 요소에 relative 추가)
  * 마우스를 상품 영역에 가져가도 사라지지 않도록 변경
  * 같은 배너를 클릭하면 최근 본 상품에 중복으로 추가되지 않도록 변경

* MyPromise 클래스 구현
  * 아직 일부만 구현한 상태


### 5일차
* 슬라이드 쇼를 구현하는 Slider class의 재사용성 고려
  * 특정한 dom 요소에 의존적이지 않도록, 생성자로 받은 요소에 슬라이드 쇼(carousel)를 적용할 수 있도록 변경
  * 이제 슬라이드 쇼를 적용할 dom의 이름과 상수값을 넘기면 carousel을 적용할 수 있음
  * 특정한 숫자들은 인자로 받고, 매직 넘버로 관리

* 기타 이름이 어색한 클래스명 변경


### 2주차 간략 회고
* 더욱 사용성이 높은 코드를 만들어야겠다는 생각을 했다. (특정한 요소에 국한되지 않게)
* 코드를 어떻게 하면 더 깔끔하게 짤 수 있을지 고민해 보기!
* 아직 미숙한 자바스크립트 문법들을 체크하기
* 루카스 강의 꼼꼼하게 살펴보기

### 6일차
* ES Module 방식으로 리팩토링
  * 기존에 사용하던 자바스크립트 함수 및 클래스들을 모듈로 나누고 import/export로 구현

* webpack, babel 설정
  * 파일 수정 시 바로 반영된 결과를 볼 수 있도록 webpack-dev-server 활용
  * 최종 결과물을 담은 번들링 파일(bundle.js) 생성
  * 기존과 같이 index.html에 파일별로 script 태그들을 모두 달지 않고, bundle.js 하나로 반영 가능
  * 엔트리 포인트 : public/js/app.js


### 7일차
* 검색창 기능 구현
  * SearchBox 클래스 생성
  * 상위 10개 인기검색어 롤링, 포커스 두면 인기 쇼핑 키워드 노출
  * 자동 완성 - 입력한 글자를 포함하는 문자열 표시, 입력 중인 글자와 일치하는 부분은 강조
  * 기타 레이아웃 구성

* webpack 설정
  * copy-webpack-plugin 설치
    * 빌드하면 dist/ 폴더에 images, css 등을 그대로 복사하기 위해 사용


### 8일차
* 검색창 관련 기능 구현 및 수정
  * 띄어쓰기가 포함된 문자열에서 발생할 수 있는 자동완성 하이라이트 버그들 수정
    * 예외사항이 발생했던 상황
      * 입력값에 띄어쓰기가 포함되고, 데이터에는 띄어쓰기가 없을 때
      * 데이터에는 띄어쓰기가 포함되고, 입력값에는 띄어쓰기가 없을 때
      * 문자마다 전부 한 칸씩 띄워서 입력할 때
      * 기타 (띄어쓰기로 인한 버그를 발생시키는 단어들)
  * 검색창에서 마우스가 벗어나면, 일정 시간 이후 자동으로 포커스 해제
  * 검색어를 입력하다가 포커스를 해제시키면, 이전 검색어에 대한 검색결과를 삭제
  * 검색창의 어떤 부분을 클릭하더라도 입력할 수 있도록 변경

* fetch-then 패턴을 async/await으로 변경
* 로직상에 같이 존재하던 템플릿 문자열들을 별도의 객체에 저장하여 관리


### 9일차
* 카테고리 탭 구현
  * 카테고리에 마우스를 가져가면, 대-중-소분류 순서로 출력
  * 하위 메뉴가 변경되면서 보여지게 설정
  * 대분류를 움직일 때 중분류는 기본적으로 첫 번째가 선택된 상태이도록 변경

* fethc-then 패턴을 async/await로 마저 변경
