import React from 'react';
import Link from 'next/link'

const Logo = () => {
    return (
        <div className="col-sm-4">
            <div className="logo" style={{ width: '100px', height: '100px' }}>
                <h1>
                    <Link href="/"><img src="/img/logo.png" /></Link>
                </h1>
            </div>
        </div>
    )
}
export default Logo