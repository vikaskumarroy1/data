import logo from './logo.svg';
import './App.css';
import Card from './Component/Card';
import data from './Util/data.json'

function App() {
  return (
    <div className="App">
     {
    data.map((data)=>{
     return <Card title={data.title} subTitle={data.subtitle}/>
})

    
}
    </div>
  );
}

export default App;
