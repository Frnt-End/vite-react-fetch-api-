import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Item from "./Item";
import {
  PaginationBtns,
  ListContainer,
  WrapPaginationBtns,
  Container,
  LoadingImg,
  Spinner,
  Ring,
  RingItem,
} from "../styles/ListPage.styles";

function ItemsList() {
  const [theData, setTheData] = useState<any[]>([]);
  const [pageNum, setPageNum] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchData = async (pageNum: number) => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `http://api.thecatapi.com/v1/images/search?limit=10&has_breeds=1&page=${pageNum}&api_key=db933426-eb41-4dbc-9cda-60bc56b6d916`
      );
      setIsLoading(false);
      return response.data;
    } catch (error) {
      setIsLoading(false);
      console.error(error);
      throw error;
    }
  };

  useEffect(() => {
    fetchData(pageNum)
      .then((data) => {
        setTheData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [pageNum, setTheData]);

  const arrNum = Array.from({ length: 10 }, (_, index) => index + 1);

  return (
    <Container>
      <h1>The List</h1>
      <p>Click an item for more details</p>
      <WrapPaginationBtns>
        <PaginationBtns>
          <button
            onClick={() => setPageNum((pageNum) => pageNum - 1)}
            disabled={pageNum === 1 || isLoading}
          >
            &lt;&lt;
          </button>

          {arrNum.map((num) => (
            <button
              key={num}
              onClick={() => setPageNum(num)}
              disabled={pageNum === num || isLoading}
            >
              {num}
            </button>
          ))}

          <button
            onClick={() => setPageNum((pageNum) => pageNum + 1)}
            disabled={pageNum === 10 || isLoading}
          >
            &gt;&gt;
          </button>
        </PaginationBtns>
      </WrapPaginationBtns>

      {isLoading ? (
        <Ring>
          <RingItem />
          <RingItem />
          <RingItem />
        </Ring>
      ) : (
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
      )}
    </Container>
  );
}

export default ItemsList;
