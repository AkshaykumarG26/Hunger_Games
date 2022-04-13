import { SimpleGrid, Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import "./resto.css";
export const RestaurantList = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch("http://localhost:3001/data")
      .then((response) => response.json())
      .then((json) => setData(json));
  };

  useEffect(() => {
    getData();
  }, []);

  // console.log(data)
  return (
    <>
      <div className="grid">
        {data.map((item) => (
          <SimpleGrid columns={[2, null, 3]} spacing="40px">
            <Card style={{ width: "18rem" }}>
              <Card.Body
                className="cardBody"
              >
                <Box heihgt="80px">
                  <Card.Img
                    variant="top"
                    src={item.image}
                    className = "cardImg"
                  />
                </Box>
                <Box>
                  <Card.Title>
                    <h2>{item.name}</h2>
                  </Card.Title>
                </Box>
                <Card.Text>{item.category}</Card.Text>
                <Card.Text>
                  Rating: <bold>{item.rating}</bold>
                </Card.Text>
                {/* <Button variant="primary">{item.rating}</Button> */}
              </Card.Body>
            </Card>
          </SimpleGrid>
        ))}
      </div>
      ;
    </>
  );
};
