# React 정리
## Tip
* 스타일
style={background-color:'red'} //이런 식으로 작성한 후 jsx에서 {} 안에 넣어 사용.
아니면 {{style:...}} 이렇게 사용 가능

* function input으로 들어오는 props에 바로 destructuring 가능하다. 
* 객체에 key:value 정의할 때 key랑 value 같으면 key값 하나만 써줘도 된다.
* 넘어온 props가 없을 때 기본값을 지정하려면, 컴포넌트 내에 다음처럼 정의해주면 된다.
``` javascript
[componentName].defaultProps = {key:value} 
```

* 컴포넌트의 자식으로 컴포넌트를 정의했을 때, 
``` javascript
<Component1>
    <Component2/>
</Component1>
```
    이런식으로 정의했을 때, 돌려보면 Component2는 렌더링이 되지 않을 거다.

    이런 경우 Component1에서 props.children을 사용하거나, parameter로 {children}을 사용해주면 된다.


* jsx에서 보통 {falsy value}를 렌더링하는 경우 아무것도 안나타나지만, 0은 예외다. 화면에 출력되니 참고


* Component에 props로 boolean값을 넘겨줄 때엔  
```javascript
<Component isTrue='true'/>
<Component isTrue/>
```
    그냥 isTrue만 넘겨줘도 알아서 true로 알아듣는다. 하지만 !는 붙일 수 없다.

* 객체 상태를 업데이트 할 때는 반드시 spread(...)문법을 사용해 객체를 한번 복사 하고, 특정 값을 덮어 씌워서 값을 설정해주자. 
이걸 "불변성 지키기"라고 하는데, 이렇게 해야만 리액트에서 상태 업데이트를 감지하고 필요한 렌더링을 진행한다.
setMethod를 사용하지 않고 임의로 ```stateValue = value;``` 이런 식으로 사용하면 리액트가 멍때린다. 업데이트 렌더링이 일어나지 않음

* getElementById처럼 React에서도 특정 DOM을 직접 선택해야하는 상황이 발생한다."ex) 초기화버튼을 누르면 입력창 자동으로 포커싱" 이를 위해 **ref**를 사용하는데, 
함수형 컴포넌트에서는 **useRef라는** Hook method를 사용하고, 클래스형 컴포넌트에서는 React.createRef()를 사용한다.
```javascript
const targetDOM = useRef();
<TargetDOM ref={targetDOM}/>
//위와 같이 하면 targetDOM.current.focus() 같은 DOM API를 사용 가능하다.
```
* **useRef**는 렌더링과 전혀 관계 없는 변수같은 것들을 관리할 때도 사용 가능하다.

* 컴포넌트가 reRendering될 때, 내부에서 사용되던 변수가 초기화된다. 불필요한 초기화로 인한 자원 낭비를 막기 위해서 useRef를 사용한 변수를 만들 수 있다. (useState를 사용해서 변수를 만들면, 변수값 변할 때마다 렌더링 다시되므로 비효율적이다.) 

* 렌더링할 때 key값이 없으면 비효율적인 렌더링이 일어나게 된다. key를 꼭 설정해주자! key를 설정해주면 해당 key를 보고 리액트가 렌더링할 위치를 알 수 있어 효율적인 렌더링이 가능하다. 데이터 고유의 id값이 없으면 map사용할 때의 index를 넣어줄 수 있지만(공식문서에서 비추함), 데이터가 자주 바뀌거나 많을 경우 굉장히 비효율적이 되니까 되도록 고유값을 가지도록 데이터를 설정하자.

