import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/Home";
import DetailPage from "./components/Detail";
import CustomHeader from "./components/Header";
import "./App.css";

function App() {
  return (
    <Layout className="App">
      <Header>
        <CustomHeader />
      </Header>
      <Layout>
        <Content>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:id/details" element={<DetailPage />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
