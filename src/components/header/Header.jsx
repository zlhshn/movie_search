import { Button, Container, Stack } from "react-bootstrap";
import "./Header.scss";

export const Header = ({categories,handleFilter}) => {


  return (
    <Container className="header">
      <h1>Movies List</h1>
      <Stack
        direction="vertical"
        gap={3}
        className="btns justify-content-center flex-md-row"
      >
       {
        categories.map((item)=>(

          <Button onClick={(e)=>handleFilter(e)}>{item.toUpperCase()}</Button>
        ))
       }
      </Stack>
    </Container>
  );
};
