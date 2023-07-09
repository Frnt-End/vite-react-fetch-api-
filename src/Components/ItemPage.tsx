import { useNavigate, useParams } from "react-router-dom";
import {
  ItemPageWrap,
  ItemPageContent,
  ImgWrap,
  ItemPageContentBottom,
} from "../styles/ItemPage.styles";
import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import { Ring, RingItem } from "../styles/ListPage.styles";

interface Breed {
  name: string;
  temperament: string;
  life_span: string;
}

interface CurrentItemTypes {
  url?: string;
  breeds?: Breed[];
  width?: number;
  height?: number;
}

const ItemPage = () => {
  const navigato = useNavigate();

  let { id } = useParams();
  const [currentItem, setCurrentItem] = useState<CurrentItemTypes>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchDetails = async () => {
    setIsLoading(true);
    try {
      let response = await axios.get(
        `http://api.thecatapi.com/v1/images/${id}`
      );
      setCurrentItem(response.data);
      setIsLoading(false);
      return response.data;
    } catch (err) {
      console.error(err);
      setIsLoading(false);
      throw err;
    }
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  useEffect(() => {
    console.log("currentItem:", currentItem);
  }, [currentItem]);

  return (
    <>
      {isLoading ? (
        <Ring>
          <RingItem />
          <RingItem />
          <RingItem />
        </Ring>
      ) : (
        <ItemPageWrap>
          <ItemPageContent>
            <button className="button_top" onClick={() => navigato(-1)}>
              <span>⇐</span> Back
            </button>

            {currentItem?.url && (
              <React.Fragment>
                <ImgWrap>
                  <img
                    src={currentItem.url}
                    alt={currentItem.breeds?.[0]?.name}
                  />
                </ImgWrap>
              </React.Fragment>
            )}

            <ItemPageContentBottom>
              {currentItem?.breeds?.[0] && (
                <React.Fragment>
                  <h1>{currentItem.breeds[0].name}</h1>
                </React.Fragment>
              )}
              {currentItem?.breeds?.[0] && (
                <React.Fragment>
                  <p>
                    Temperament:{" "}
                    <span>{currentItem.breeds[0].temperament}</span>
                  </p>
                  <p>
                    Life Span: <span>{currentItem.breeds[0].life_span}</span>
                  </p>
                </React.Fragment>
              )}
              <p>
                Width: <span>{currentItem?.width}</span>
              </p>
              <p>
                Height: <span>{currentItem?.height}</span>
              </p>
            </ItemPageContentBottom>
          </ItemPageContent>
        </ItemPageWrap>
      )}
      ;
    </>
  );
};

export default ItemPage;
