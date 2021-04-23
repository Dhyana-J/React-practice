import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            alert('여기서 뭐해? 집에 가자');
            window.location.href = '/';
        }, 1000);
    }, []);

    return (
        <div className="not-found">
            <h1>Oooops...</h1>
            <h2>`That Page can't be found`</h2>
            <p>Go Back to the Home</p>
        </div>
    );
};

export default NotFound;
