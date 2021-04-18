import {useRouter} from 'next/router';
const Post = ()=>{
    const router = useRouter();
    console.log(router);
    console.log(router.query);
    return <div>this is the post</div>;
}

export default Post;