import { useState } from "react";
import { Issue } from "./issue-model";
import IssueRow from "./IssueRow";

const initialIssues: Issue[] = [
  {
    title: "Do stuff",
    labels: [{text: "Feature", color: "blue"}],
    selected: false
  },
  {
    title: "Do stuff",
    labels: [{text: "Feature", color: "blue"}, {text: "Wontfix", color: "yellow"}],
    selected: true
  }
]

function App() {
  const [issues, setIssues] = useState<Issue[]>(initialIssues);

  // useState is a "hook"
  const [label, setLabel] = useState<string>("");

  const classNames = {
    "blue": "bg-info",
    "yellow": "bg-warning",
    "red": "bg-danger"
  }

  const toggleSelection = (checked: boolean) => {
    setIssues(issues.map(issue => ({...issue, selected: checked})));
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2>Issues</h2>

          <form className="rounded bg-light p-3 mb-4">
            <div className="row mb-3">
              <label htmlFor="label" className="col-sm-2 col-form-label">Label</label>
              <div className="col-sm-4">
                <input type="text" 
                        value={label}
                        onChange={ e => setLabel(e.target.value) }
                        className="form-control" 
                        id="label"/>
              </div>
            </div>



            <div className="row mb-3">
              <label htmlFor="color" className="col-sm-2 col-form-label">Color</label>
              <div className="col-sm-4">
                <select className="form-control" id="color">
                  <option>Blue</option>
                  <option>Yellow</option>
                  <option>Red</option>
                </select>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-4 offset-sm-2">
                <div className="form-check">
                  <input className="form-check-input" 
                        onChange={e => toggleSelection(e.target.checked)}
                        checked={issues.every(issue => issue.selected)}
                        type="checkbox" 
                        id="select"/>
                  <label className="form-check-label" htmlFor="select">
                    Select
                  </label>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="offset-sm-2">
                <button type="submit" className="btn btn-primary">Add Label</button>
              </div>
            </div>
          </form>

          <ul className="list-group">
            {
              issues.map((issue, i) => (
                <IssueRow key={i} 
                  issue={issue} 
                  setIssues={setIssues}
                  issues={issues}
                  classNames={classNames} />
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
