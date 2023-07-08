import { useNavigate, useParams } from "react-router-dom";
import { ItemPageWrap, ItemPageContent } from "../styles/ItemPage.styles";
import { useEffect, useState } from "react";
import axios from "axios";

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

  const fetchDetails = async () => {
    try {
      let response = await axios.get(
        `http://api.thecatapi.com/v1/images/${id}`
      );
      setCurrentItem(response.data);
      return response.data;
    } catch (err) {
      console.error(err);
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
    <ItemPageWrap>
      <ItemPageContent>
        <button onClick={() => navigato(-1)}>
          <span>⇐</span> Back
        </button>

        {currentItem?.url && (
          <>
            <img src={currentItem.url} alt={currentItem.breeds?.[0]?.name} />
            {currentItem.breeds?.[0] && (
              <>
                <h2>{currentItem.breeds[0].name}</h2>
                <p>
                  Temperament: <span>{currentItem.breeds[0].temperament}</span>
                </p>
                <p>
                  Life Span: <span>{currentItem.breeds[0].life_span}</span>
                </p>
              </>
            )}
          </>
        )}
        <p>
          Width: <span>{currentItem?.width}</span>
        </p>
        <p>
          Height: <span>{currentItem?.height}</span>
        </p>
      </ItemPageContent>
    </ItemPageWrap>
  );
};

export default ItemPage;
