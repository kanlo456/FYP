import { ColorModeContext, useMode } from "../theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "../scenes/global/Topbar";
import Sidebar from "../scenes/global/Sidebar";
import Dashboard from "../scenes/dashboard";
// import Team from "../scenes/team";
// import Invoices from "../scenes/invoices";
// import Contacts from "../scenes/contacts";
// import Bar from "../scenes/bar";
// import Form from "../scenes/form";
// import Line from "../scenes/line";
// import Pie from "../scenes/Pie";
// import FAQ from "../scenes/faq";
// import Geography from "../scenes/geography";
// import Calendar from '../scenes/calendar'

const AdminUserPage = () => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            <Topbar />
            <Routes>
              {/* <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/" element={<Team />} />
              <Route path="/team" element={<Team />} />
              <Route path="/team" element={<Team />} />
              <Route path="/team" element={<Team />} />
              <Route path="/team" element={<Team />} />
              <Route path="/team" element={<Team />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default AdminUserPage;
