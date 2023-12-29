# popup_go frontend

## project

- node v18 / npm v9
- next v14
- typescript v5
- emotion 11

## convention

- 컴포넌트 규칙 디자인 패턴 사용
- 자주 사용하는 event > custom hook 만들어 사용
- 자주 사용하는 functions > utils 에 정의

## folders

### app

### public

### utils

- axios : axios custom
- common : common functions
- data : date functions

## styles

https://www.howdy-mj.me/css/emotionjs-intro

- emotion
- 공통(반복되는) style은 emotion css props 를 사용하되, 재사용을 위해 개별적이거나 동적 스타일인 경우의 style 은 inline style 을 사용함
- styles/global.tsx
