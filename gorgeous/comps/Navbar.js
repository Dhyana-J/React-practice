import Link from 'next/link';

const Navbar = () => {
    return (
        <nav>
            <Link href="/">
                <div className="logo">
                    <h1>
                        <a>✨ Fruit List ✨</a>
                    </h1>
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
