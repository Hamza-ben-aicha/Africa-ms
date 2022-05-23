import React, { useEffect, useState } from "react";
import API from "../../api/index.js";
const ProjectTable = (id) => {
  const [projectsTable, setProjectsTable] = useState([
    { NormeId: "", date_deb: "", date_fin: "" },
  ]);
  const [entreprises, setEntreprises] = useState([]);
  const [normes, setNormes] = useState([]);

  let index = 0;

  useEffect(() => {
    if (localStorage.getItem("curentUser")) {
      const curentUser = JSON.parse(localStorage.getItem("curentUser"));
      if (curentUser?.user?.role === "entreprise") {
            console.log("------");
      } else {
        if (curentUser?.user?.role === "consultant") {
          API.get(`getPC/1`)
            .then((result) => {
              //console.log(result);
              setProjectsTable(result?.data?.projects);
              setEntreprises(result?.data?.EntrepriseNames);
              setNormes(result?.data?.Normes);
              // console.log(result?.data?.projects);
              // console.log(result?.data?.EntrepriseNames);
            })
            .catch((err) => {
              console.log("err");
            });
        }
      }
    }
  }, []);

  return (
    <div className="container" style={{ marginTop: "20px" }}>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Nom Entreprise</th>
            <th scope="col">Norme</th>
            <th scope="col">Date debut</th>
            <th scope="col">date Fin</th>
            <th scope="col">View</th>
            <th scope="col">statistique</th>
          </tr>
        </thead>
        <tbody>
          {projectsTable?.map((project) => (
            <tr key={project?.id}>
              <td className="tableCell">
                {entreprises[index]}
                <span hidden>{index++}</span>
              </td>
              <td className="tableCell">{normes[index]}</td>
              <td className="tableCell">{project?.date_deb}</td>
              <td className="tableCell">{project?.date_fin}</td>
              <td className="tableCell">
                <button type="button" className="btn btn-outline-dark">
                  view
                </button>
              </td>
              <td className="tableCell">
                <button ype="button" className="btn btn-outline-secondary">
                  stats
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectTable;
