import { Col, Row } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import "./detail.css";
import { useNavigate } from "react-router-dom";
import DetailCard from "./detailCard";

const DetailPage = () => {
  const navigate = useNavigate();
  return (
    <div className="detailPage">
      <Row>
        <Col>
          <h3 className="detailPageHeader" onClick={() => navigate("/")}>
            <span>
              <ArrowLeftOutlined />
            </span>{" "}
            Show details
          </h3>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <DetailCard />
        </Col>
      </Row>
    </div>
  );
};

export default DetailPage;
