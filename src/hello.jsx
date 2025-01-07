function Hello() {
  let name = 'Rita';
  let age = 20;

  {
    var address = () => {
      return 'Location Pune';
    };
  }
  return (
    <h1>
      Hello Good Morning {name} <br /> {address()}
      <br /> age : {age}
    </h1>
  );
}
export default Hello;
