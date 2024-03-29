import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            // router.go(-1); // go to back
            // router.go(1); // go to forward
            alert('여기서 뭐해? 집에 가자 :)');
            router.push('/');
        }, 1000);
    }, []);

    return (
        <div className="not-found">
            <h1>Oooops...</h1>
            <h2>`That PAge can't be found`</h2>
            <p>
                Go Back to the{' '}
                <Link href="/">
                    <a>Homepage</a>
                </Link>
            </p>
        </div>
    );
};

export default NotFound;
