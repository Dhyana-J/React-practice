import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return (
        <nav>
            <Link href="/">
                <div className="logo">
                    <Image src="/banana.png" width={100} height={100} />
                    <div style={{ fontSize: '10px', marginTop: '10px' }}>
                        "Icons made by{' '}
                        <a
                            href="https://www.flaticon.com/authors/pixel-perfect"
                            title="Pixel perfect"
                        >
                            Pixel perfect
                        </a>{' '}
                        from{' '}
                        <a href="https://www.flaticon.com/" title="Flaticon">
                            www.flaticon.com"
                        </a>
                    </div>
                </div>
            </Link>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/fruits">
                <a>Fruit Listing</a>
            </Link>
            <Link href="/about">
                <a>About</a>
            </Link>
        </nav>
    );
};

export default Navbar;
