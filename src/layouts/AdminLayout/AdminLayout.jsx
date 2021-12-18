import React from "react";
import { Header, Menu } from "../../components";
import '../../styles/components/layout.sass'

const AdminLayout = ({ children }) => {
  return (
    <div className="Layout">
      <Header userType="Administrator" />
      <div className="Layout__Container">
        <main className="Layout__Content">
          {children}
        </main>
      </div>
    </div>
  );
};

export { AdminLayout };
