import "./styles.css";
import { connect } from "react-redux";
import { imgAction, imgIDAction } from "./Redux/imgAction";
import { useEffect, useState } from "react";
import { store } from "./index";
import {Card,CardImg,CardBody,CardTitle,Row,Col,InputGroup,InputGroupText,InputGroupAddon,
  Input,
  Button
} from "reactstrap";
const mapStateToProps = (state) => {
  return { img: state.images };
};

function App(props) {
  const [search, setSearch] = useState("");
  const [limit, setLimit] = useState(3);
  const handlesearch = (e) => setSearch(e.target.value);
  const handleLimit = () =>
    setLimit((prevValue) => {
      if (prevValue === 3) {
        return 30;
      } else if (prevValue === 30) {
        return 3;
      }
    });
  const searchItem = () => props.imgIDAction(search);

  useEffect(() => props.imgAction(), []);
  const images = props.img;
  return (
    <div className="App">
      <div style={{ marginTop: "20px" }} className="container">
        <InputGroup>
          <Input onChange={(e) => handlesearch(e)} />
          <InputGroupAddon addonType="append">
            <Button onClick={searchItem}>Search By ID</Button>
          </InputGroupAddon>
        </InputGroup>
      </div>
      {images.length > 1 ? (
        <Row style={{ "marginLeft": "108px","marginRight": "108px","marginTop":"20px"}}>
          {images.slice(0, limit).map((i) => {
            return (
              <Col xs="3" key={i.id}>
                <Card>
                  <CardImg
                    top
                    width="50%"
                    src={i.download_url}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle tag="h5">ID : {i.id}</CardTitle>
                  </CardBody>
                </Card>
              </Col>
            );
          })}
        </Row>
      ) : (
        <Col style={{ "marginLeft": "108px","marginRight": "108px","marginTop":"20px"}} xs="6" key={props.img.id}>
          <Card>
            <CardImg
              top
              width="50%"
              src={props.img.download_url}
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle tag="h5">ID : {props.img.id}</CardTitle>
            </CardBody>
          </Card>
        </Col>
      )}
      {limit === 3 && images.length > 1 ? (
        <Button style={{"marginTop":"20px"}} onClick={handleLimit} color="info">
          Load More
        </Button>
      ) : images.length > 1 ? (
        <Button style={{"marginTop":"20px"}} onClick={handleLimit} color="info">
          see Less
        </Button>
      ) : (
        ""
      )}
    </div>
  );
}

export default connect(mapStateToProps, { imgAction, imgIDAction })(App);
