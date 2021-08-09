import React from 'react'

function Hero({handleLogout}) {
    return (
        <section className="hero">
            <nav>
                    <p>Welcome Guys</p>
                    <button onClick={handleLogout}></button>
            </nav>
        </section>
    )
}

export default Hero
