// export const getStaticPaths = async () => {
//     //내가 가진 데이터 기준으로 얼마나 많은 라우팅 페이지를 만들어야하는지 설정해주는 메소드
//     const res = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await res.json();
//     const paths = data.map((fruit) => {
//         return {
//             params: {
//                 id: fruit.id.toString(), // 이렇게 안해주면 integer로 들어오는데, 반드시 string version이어야한다.
//             },
//         };
//     });
//     return {
//         paths,
//         fallback: false,
//     };
// };

// export const getStaticProps = async (context) => {
//     const id = context.params.id;
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
//     const data = await res.json();

//     return {
//         props: {
//             fruit: data,
//         },
//     };
// };

const Details = ({ fruit }) => {
    console.log(fruit);
    return (
        <div>
            <h1>{fruit.name}</h1>
            <p>{fruit.website}</p>
            <p>{fruit.email}</p>
            <p>{fruit.address.city}</p>
        </div>
    );
};

export default Details;
