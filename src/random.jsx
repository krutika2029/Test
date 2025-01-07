function Random() {
  var r = Math.random();
  return (
    <h1 style={{ color: 'blueviolet', backgroundColor: 'lightblue' }}>
      Random number : {Math.round(r * 100)}
    </h1>
  );
}
export default Random;
