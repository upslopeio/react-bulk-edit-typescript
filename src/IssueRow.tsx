import { Issue } from "./issue-model";

type IssueRowProps = {
    issue: Issue, 
    classNames: {[key: string]: string},
    issues: Issue[],
    setIssues: any,
}

function IssueRow({issue, classNames, issues, setIssues}: IssueRowProps) {
    return (
        <li className="list-group-item">
            <input className="form-check-input d-inline-block me-2" 
                    checked={issue.selected}
                    onChange={e => {
                        setIssues(issues.map(other => {
                            if (other === issue) {
                                return {...issue, selected: e.target.checked}
                            } else {
                                return other;
                            }
                        }))
                    }}
                    type="checkbox" />
            {issue.title}
            {
                issue.labels.map((label, l) => (
                    <span key={l} className={`badge rounded-pill ${classNames[label.color]} ms-2 d-inline-block`}>{label.text}</span>
                ))
            }
        </li>
    )
}

export default IssueRow;