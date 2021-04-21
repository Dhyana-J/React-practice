import React from 'react';
import Link from 'next/link';

function Header() {
    return (
        <Link href="/">
            <header>
                <h1>
                    <a>Board</a>
                </h1>
            </header>
        </Link>
    );
}

export default Header;
