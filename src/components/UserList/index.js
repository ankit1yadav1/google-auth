import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Header from "../Header";

function UserList() {
  let user = JSON.parse(localStorage.getItem("user"));
  let gid = sessionStorage.getItem("gId");
  const [loadedUsers, setLoadedUsers] = useState({});
  const [isauthenticated, setisauthenticated] = useState(true);

  useEffect(() => {
    if (!gid || !user || gid !== user.data.userId) {
      setisauthenticated(false);
    }
    axios({
      method: "get",
      url: "https://google-users-auth-api.herokuapp.com/auth/users",
      headers: { Authorization: `Bearer ${user.data.token}` },
    })
      .then((response) => {
        setLoadedUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onDelete = (id) => {
    axios({
      method: "post",
      url: "https://google-users-auth-api.herokuapp.com/auth/delete-user",
      data: {
        userId: id,
      },
      headers: { Authorization: `Bearer ${user.data.token}` },
    })
      .then((response) => {
        setLoadedUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const logout = useCallback(() => {
    sessionStorage.clear();
    localStorage.clear();
    setisauthenticated(false);
  });

  return (
    <>
      {isauthenticated ? (
        <div>
          {user && (
            <Header data={JSON.parse(user.config.data)} onLogout={logout} />
          )}

          <main>
            {" "}
            <div class="lw">
              <div class="cw">
                {loadedUsers.totalItems && (
                  <h1 class="text-bold">
                    Contacts{" "}
                    <span class="text-normal">
                      ( {loadedUsers.totalItems} )
                    </span>
                  </h1>
                )}
                <div class="listwpr">
                  <div class="title flex">
                    <p class="text-normal">Name</p>
                    <p class="text-normal">Email</p>
                    <p class="text-normal">Phone Number</p>
                  </div>
                  <div class="list">
                    {loadedUsers &&
                      loadedUsers.users &&
                      loadedUsers.users.map((individual, index) => {
                        return (
                          <div
                            className="datawpr flex boxshadow aligncenter"
                            key={index}
                          >
                            <div className="namewpr flex aligncenter">
                              <input type="checkbox" />
                              <img
                                src={individual.imageUrl}
                                alt="Individual user image"
                                className="border-red rounded"
                              />
                              <p className="text-medium">{individual.name}</p>
                            </div>
                            <p className="text-normal email">
                              {individual.email}
                            </p>
                            <div className="lastcolwpr flex justifybetween">
                              <p className="text-medium">987-654-3211</p>
                              <div className="svgwpr">
                                {gid == individual._id && (
                                  <button
                                    onClick={() => onDelete(individual._id)}
                                  >
                                    <svg
                                      width="19"
                                      height="20"
                                      viewBox="0 0 19 20"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M1 5.52332L17.54 2.00774"
                                        stroke="#053ED1"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M10.5413 1.02613L6.99832 1.77901C6.68409 1.8451 6.40912 2.0336 6.23415 2.30284C6.05919 2.57209 5.99864 2.89993 6.06588 3.21391L6.31711 4.39597L12.2242 3.13983L11.973 1.95857C11.9068 1.64503 11.7188 1.37062 11.4503 1.19574C11.1818 1.02086 10.8548 0.959843 10.5413 1.02613Z"
                                        stroke="#053ED1"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M8.24646 14.8896V8.85049"
                                        stroke="#053ED1"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M11.8701 14.8896V8.85049"
                                        stroke="#053ED1"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M14.5877 5.22699H16.7014L15.5862 18.009C15.5341 18.6368 15.0083 19.1192 14.3784 19.117H5.73436C5.10627 19.1167 4.58328 18.635 4.53136 18.009L3.69635 7.94621"
                                        stroke="#053ED1"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  </button>
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
}

export default UserList;
