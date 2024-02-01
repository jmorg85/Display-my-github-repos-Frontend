import React from "react";

const GitRepoName = ({repo: {id, name, description, html_url}}) => {
    return(
        <div key={id} className="Repo-container">
            <div>
                <a href={html_url} target="blank">{name}</a>
                <p>Description: {description ? description : "N/A"}</p>
                <p></p>
            </div>
        </div>
    );
}

export default GitRepoName;