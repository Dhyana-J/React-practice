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

    배열에 객체를 추가할 때는, ```setArray([...array,element])``` 혹은 ```setArray([array.concat(element)])```처럼 사용하자. 
    **배열 복사가 일어나지 않는 push같은거 사용하면 업데이트 안됨**

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

* 화면에 컴포넌트가 나타나고 사라지는 것을 mount, unmount 라고 한다.

* useEffect : 컴포넌트가 나타날 때, 사라질 때, 업데이트 될 때 도중에 뭔가 하고싶을 때 쓴다.
    ```javascript
    useEffect(()=>{
        console.log('컴포넌트 마운트될 때 실행');
        // props->state
        // REST API 요청
        // D3 Video.js
        // setInterval, setTimeout

        return ()=>{ //Cleaner function
            console.log('컴포넌트 언마운트될 때 실행');
            //clearInterval, clearTimeout
            //라이브러리 인스턴스 제거
        }
    },[]); // 배열은 Deps(Dependencies) 설정용이다. 비워두면 처음 마운트될 때의 state값만 세팅된다.(state변화해도 인지를 못하게된다.) 앞의 함수는 컴포넌트가 바뀔 때 마다 실행되는데, Deps 배열에 특정 state를 세팅해두면 그 state가 변화할 때에도 실행된다. 
    ```

* useMemo : 특정 값이 바뀔 경우에만 특정 함수를 실행하고 연산할 수 있다, 원하는 값이 바뀌지 않았다면 리렌더링시 이전의 값을 재사용할 수 있게 해준다.
    ```javascript
    const count = useMemo(()=>countActiveUsers(users),[users]);
    // users가 바뀔 경우에만 countActiveUsers 실행. 그 외에는 초기값 재사용
    ```

* useCallback : 이전에 만들었던 함수 재사용할 수 있게 해준다. 컴포넌트가 새로 렌더링 될 때마다 함수가 다시 만들어지면 아무래도 virtual DOM 성능 최적화에 좋지 않다. 그래서 쓴다.
    ```javascript
    const useCallback (재사용할 함수,[state or prop or 빈칸]);
    // state나 props가 변경될 때 마다 새로 만들어진다.
    ```


* React.memo : 컴포넌트가 바뀌지 않았을 때 리렌더링을 방지하도록 할 수 있다. 
    ```javascript
    export default React.memo(Component);
    ```

* 렌더링 성능 최적화? -> 쓸데없는 리렌더링을 방지하는 것

* 위 최적화 메소드들은 사용해서 연산을 줄일 수 있는 경우에만 사용하자. 오히려 썼는데 연산이 기존보다 늘어 성능이 안좋아지는 경우가 있다.

* useReducer : action 객체를 기준으로 업데이트를 진행한다. 컴포넌트의 상태 업데이트 로직을 컴포넌트 밖으로 분리시킬 수 있다. (다른파일에 작성해서 불러와 사용 가능)

    ```javascript
    function reducer(state,action){ //기존 상태와 실행할 명령을 받아서
        switch(action.type){
            case 'increment': return state+1;
            case 'decrement': return state-1;
            default: return state; //새로운 상태를 반환한다.
        }
    }

    const [number,dispatch] = useReducer(reducer,기본값);
    //number는 현재 상태
    //dispatch는 action type이 기술된 객체를 넘겨줘서 action을 발생시키는 함수
    ```

    * useState vs useReducer -> 복잡하다 싶으면 Reducer 쓰면 되는데, 직접 둘 다 써보면서 나한테 편한거 쓰면 된다.
