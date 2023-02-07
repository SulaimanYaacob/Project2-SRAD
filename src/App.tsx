import { MantineProvider } from "@mantine/core";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Menu from "./components/registration/Menu";
import StudentInformation from "./components/registration/StudentInformation";
import StudentRegistration from "./components/registration/StudentRegistration";

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Layout>
        <Router>
          <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="/register" element={<StudentRegistration />} />
            <Route path="/information" element={<StudentInformation />} />
          </Routes>
        </Router>
      </Layout>
    </MantineProvider>
  );
}

export default App;
