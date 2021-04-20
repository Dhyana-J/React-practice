import styles from 'styles/Fruits.module.css';
import Link from 'next/link';

export const getStaticProps = async () => {
    // runs at build time. this function never runs in the browser
    // data fetch 할 수 있는 function

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return {
        props: { fruits: data },
    };
};

const Fruits = ({ fruits }) => {
    return (
        <div>
            <h1>All Fruits</h1>
            {fruits.map((fruit) => (
                <Link href={`fruits/${fruit.id}`} key={fruit.id}>
                    <a className={styles.single}>
                        <h3>{fruit.name}</h3>
                    </a>
                </Link>
            ))}
        </div>
    );
};

export default Fruits;
