import { useState } from "react";
import { Issue } from "./issue-model";

const initialIssues: Issue[] = [
  {
    title: "Do stuff",
    labels: [{text: "Feature", color: "blue"}]
  },
  {
    title: "Do stuff",
    labels: [{text: "Feature", color: "blue"}, {text: "Wontfix", color: "yellow"}]
  }
]

function App() {
  const [issues, useIssues] = useState<Issue[]>(initialIssues);

  const classNames = {
    "blue": "bg-info",
    "yellow": "bg-warning",
    "red": "bg-danger"
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
                <input type="text" className="form-control" id="label"/>
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
                  <input className="form-check-input" type="checkbox" id="select"/>
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
                <li key={i} className="list-group-item">
                  <input className="form-check-input d-inline-block me-2" type="checkbox" />
                  {issue.title}
                  {
                    issue.labels.map((label, l) => (
                      <span key={l} className={`badge rounded-pill ${classNames[label.color]} ms-2 d-inline-block`}>{label.text}</span>
                    ))
                  }
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
