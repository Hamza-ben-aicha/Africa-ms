import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../api/index";

const OneProject = () => {
  const params = useParams();
  const [state, setState] = useState(false);
  const [norme, setNorme] = useState("");
  const [chapitre, setChapitre] = useState([]);
  const [article, setArticle] = useState([]);
  const [question, setQuestion] = useState([]);
  const [resQuestion, setResQuestion] = useState([]);
  useEffect(() => {
    API.get(`/getbyId_projet/${params.id}`).then((result) => {
      const data = result.data;
      setNorme(data.norme);
      setChapitre(data.chapitre);
      setArticle(data.articles);
      setQuestion(data.questions);
      API.get(`/getResultsByProject/${params.id}`).then((result) => {
        const data = result.data;
        setResQuestion(data);
        setState(true);
      });
    });
  }, []);

  //   state.question.forEach((element) => {
  console.log("====================================");
  console.log(resQuestion);
  console.log("====================================");
  return (
    <div style={{ marginTop: "20px", marginLeft: "20px", marginRight: "10px" }}>
      {state ? (
        <>
          <h1>Iso {norme.norme}</h1>
          <br />
          <table className="table table-sm">
            <thead>
              <tr>
                <th
                  scope="col"
                  style={{ wordWrap: "breakWord", maxWidth: "80px" }}
                >
                  Chapitre
                </th>
              </tr>
            </thead>
            <tbody>
              {chapitre.map((chap) => (
                <tr>
                  <th scope="row">{chap.Chapitres}</th>
                  <td>
                    <table className="table table-sm">
                      <thead>
                        <tr>
                          <th>Articles</th>
                          <th>Questions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {article.map((art) =>
                          art.ChapitreId === chap.id ? (
                            <tr>
                              <td>{art.Articles}</td>

                              {art.ChapitreId == chap.id
                                ? question.map((quest) =>
                                    quest.ArticleId == art.id ? (
                                      <tr>
                                        <td> {quest.Questions}</td>
                                        <td>
                                          {resQuestion.map(
                                            (rquest) =>
                                              rquest.id_question == quest.id ? (
                                                <table className="table table-sm">
                                                  <thead>
                                                    <tr>
                                                      <th>evaluation</th>
                                                      <th>observation</th>
                                                      <th>note</th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    <tr>
                                                      <td>
                                                        {rquest.evaluation ==
                                                        null ? (
                                                          <>empty</>
                                                        ) : (
                                                          rquest.evaluation
                                                        )}
                                                      </td>
                                                      <td>
                                                        {rquest.observation ==
                                                        null ? (
                                                          <>empty</>
                                                        ) : (
                                                          rquest.observation
                                                        )}
                                                      </td>
                                                      <td>
                                                        {rquest.note == null ? (
                                                          <>empty</>
                                                        ) : (
                                                          rquest.note
                                                        )}
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              ) : null

                                            // ) : null
                                          )}
                                        </td>
                                      </tr>
                                    ) : null
                                  )
                                : null}
                            </tr>
                          ) : null
                        )}
                      </tbody>
                    </table>
                  </td>
                  <td></td>
                </tr>
              ))}
              {/* {chapitre.map((chap) => (
                <tr>
                  <th scope="row">{chap.Chapitres}</th>
                  {article.map((art) => art.ChapitreId === chap.id) ? (
                    <tr>
                     {art.Articles}
                      {question.map((ques)=>(
                        <tr><td></td></tr>
                      ))}
                    </tr>
                  ) : null}
                </tr>
              ))} */}
            </tbody>
          </table>
        </>
      ) : null}
    </div>
  );
};

export default OneProject;
