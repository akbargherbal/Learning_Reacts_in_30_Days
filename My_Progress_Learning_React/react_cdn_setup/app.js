// const App = () => {
//     return (<div>hello world</div>)
//  }
 
//  ReactDOM.render(<App />, document.getElementById('root'))


//  console.log(`Hello world! from external file`)



function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  const element = <Welcome name="Sara" />;
  root.render(element);