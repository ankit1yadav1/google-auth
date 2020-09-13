import React from "react";

const Header = ({ data, onLogout }) => {
  return (
    <header>
      <div className="fw flex">
        <div className="cw flex flex-1 justifybetween aligncenter">
          <div className="leftwpr flex aligncenter">
            <div className="imgwpr rounded">
              <img
                src={data.imageUrl}
                alt="profile image"
                className="rounded"
              />
            </div>
            <div className="contentwpr">
              <p className="name">{data.name}</p>
              <p className="email">{data.email}</p>
            </div>
          </div>
          <div className="rightwpr">
            <button onClick={onLogout}>
              <img src="../img/logout.svg" alt="logout" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
