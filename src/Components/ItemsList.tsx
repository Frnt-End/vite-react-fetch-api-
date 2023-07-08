import { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";
import { Link } from "react-router-dom";
import Item from "./Item";
import {
  PaginationBtns,
  ListContainer,
  WrapPaginationBtns,
  Container,
} from "../styles/ListPage.styles";

function ItemsList() {
  let { theData, pageNum, setPageNum } = useContext(AppContext);

  const arrNum = [];

  for (let a = 1; a <= 10; a++) {
    arrNum.push(a);
  }

  return (
    <Container>
      <h1>The List</h1>
      <p>Click an item for more details</p>
      <WrapPaginationBtns>
        <PaginationBtns>
          <button
            onClick={() => setPageNum((pageNum: number) => pageNum - 1)}
            disabled={pageNum === 1 ? true : false}
          >
            &lt;&lt;
          </button>

          {arrNum.map((num) => (
            <button
              key={num}
              onClick={() => setPageNum(num)}
              disabled={pageNum === num ? true : false}
            >
              {num}
            </button>
          ))}

          <button
            onClick={() => setPageNum((pageNum: number) => pageNum + 1)}
            disabled={pageNum === 10 ? true : false}
          >
            &gt;&gt;
          </button>
        </PaginationBtns>
      </WrapPaginationBtns>

      <ListContainer>
        <ul>
          {theData?.map((item: any) => (
            <li key={item.id}>
              <Link to={`details/${item.id}`}>
                <Item item={item} />
              </Link>
            </li>
          ))}
        </ul>
      </ListContainer>
    </Container>
  );
}
export default ItemsList;
