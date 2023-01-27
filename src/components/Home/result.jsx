import { Card, Col, Empty, Row, message } from "antd";
import React, { useEffect, useState } from "react";
import ShowCard from "./showCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Results = ({ params }) => {
  const navigate = useNavigate();
  const [resultsArr, setResultsArr] = useState([]);
  const [loading, setLoading] = useState(false);

  const onCardClick = (item) => {
    const id = item?.show?.id || item?.id;
    console.log(id);
    navigate(`${id}/details`);
  };

  const apiCallForResults = async (params) => {
    try {
      if (params) {
        setLoading(true);
        const response = await axios.get(
          `${process.env.React_APP_BACKEND_URL}/search/shows?${params}`
        );
        setResultsArr(response.data);
        setLoading(false);
      } else {
        setLoading(true);
        const response = await axios.get(
          `${process.env.React_APP_BACKEND_URL}/shows`
        );
        setResultsArr(response.data);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      message.error(error);
    }
  };

  useEffect(() => {
    apiCallForResults();
  }, []);

  useEffect(() => {
    if (params) {
      apiCallForResults(params);
    }
  }, [params]);

  const renderAllCards = () => {
    if (resultsArr && resultsArr?.length > 0) {
      return resultsArr?.map((ele, index) => {
        return (
          <Col
            span={4}
            // style={gridStyle}
            key={`result_tile_${index}`}
            className="result-grid"
          >
            <ShowCard item={ele?.show || ele} onCardClick={onCardClick} />
          </Col>
        );
      });
    } else {
      return (
        <Col span={24}>
          <Empty />
        </Col>
      );
    }
  };

  return (
    <Card
      title="Shows"
      loading={loading}
      className="result-card"
      style={{ minHeight: 536 }}
    >
      <Row gutter={[16, 16]}>{renderAllCards()}</Row>
    </Card>
  );
};

export default Results;
