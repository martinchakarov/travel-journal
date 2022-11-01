import Header from './components/Header';
import Card from './components/Card';
import data from './data';


export default function App() {
  const cardComponents = data
  // sort by start date in descending order
  .sort((a, b) => new Date(b.startDate) - new Date(a.startDate))
  .map((item, index) => { return <Card key={index} {...item}/> })

  return (
    <div className="app">
        < Header />
        {cardComponents}
    </div>
  );
}