import type { NextPage } from 'next';

const Home: NextPage = () => {
  const arr = [...new Array(10).keys()];
  return (
    <div>
      {arr.map(a => (
        <div key={a}>
          <h2>Some project name</h2>
          <p>College name</p>
          <p>some description</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
