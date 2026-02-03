import './App.css'

const coursesTitleArray: string[] = [
  'JavaScript Complex',
  'Java Complex',
  'Python Complex',
  'QA Complex',
  'Fullstack',
  'Frontend'
];

const App=()=> {
  return (
    <>
        <ul>
          {
            coursesTitleArray.map((value, index) => <li className="bg-sky-500/75 m-10 p-10 border-4 border-double border-purple-500 hover:bg-purple-500 hover:border-sky-500 transition-all duration-600 ease-in-out" key={index}>{value}</li>)
          }
        </ul>
    </>
  )
}

export default App
