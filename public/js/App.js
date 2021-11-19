const App = () => {
  // ajax call from component to server and show products below
  // for state we use react hook useState
  //product is empty array initially
  const [products, setProducts] = React.useState([]);

  // when components load then we need to req for data
  React.useEffect(() => {
    fetchProducts();
  }, []);

  function fetchProducts() {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }

  return (
    <ul className="list-group">
      <li className="list-group-item">Cras justo odio</li>
    </ul>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
