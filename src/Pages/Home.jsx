import React, { use } from 'react';
const toyPromises = fetch('/toy.json').then(res => res.json())
const Home = () => {
    const toyData = use(toyPromises);
    console.log(toyData)
    return (
        <div>
            <p>this is home</p>
        </div>
    );
};

export default Home;