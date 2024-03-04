import "./index.css";
import demo from "./assets/demo.jpg";
import demo2 from "./assets/demo1.jpg";
import demo3 from "./assets/demo3.jpg";

// you can add to the data or change assets here
// Go to the Index.css file for the explanation
const projectsData = [
  { img: demo, title: "title 1" },
  { img: demo2, title: "title 2" },
  { img: demo3, title: "title 3" },
];
function App() {
  return (
    <div className="page-container">
      <h1>Title</h1>
      {projectsData.map((project, index) => {
        return (
          <div
            className="project-card"
            style={{ backgroundImage: `url(${project.img})` }}
            key={index}
          >
            <div className="text-details">{project.title}</div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
