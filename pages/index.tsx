import type { NextPage } from 'next';

const Home: NextPage = () => {
  const arr = new Array(10).fill(0);
  return (
    <div>
      {arr.map((_, i) => (
        <div key={i}>
          <h2>Some project name</h2>
          <p>College name</p>
          <p>some description</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
