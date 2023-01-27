import { Col, Form, Input, Row } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useLocation } from "react-router-dom";
const Search = ({ onSearch }) => {
  const location = useLocation();

  const onFormSubmit = (formData) => {
    const { q } = formData;
    const queryParam = new URLSearchParams(location.search);
    if (q) {
      queryParam.set("q", q);
    } else {
      queryParam.delete("q");
    }
    onSearch(queryParam.toString());
  };
  return (
    <Row justify="center">
      <Col>
        <Form className="form" onFinish={onFormSubmit}>
          <Form.Item label="" name="q">
            <Input
              type="search"
              placeholder="Search for shows"
              size="medium"
              //style={{ width: "300px" }}
              allowClear
              suffix={<SearchOutlined />}
            />
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default Search;
