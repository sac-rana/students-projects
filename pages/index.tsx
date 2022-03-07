import type { NextPage } from 'next';

const Home: NextPage = () => {
  const arr = Array.from<number, number>({ length: 10 }, (ele, i) => i);
  return (
    <div>
      {arr.map(a => (
        <div key={a}>
          <h2>Some project name</h2>
          <p>some description</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
