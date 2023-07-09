import { ItemImgWrap, ListPageItem } from "../styles/Item.styles";

const Item = ({ item }: any) => {
  return (
    <ListPageItem>
      <h2>{`${item.breeds[0].name}`}</h2>
      <ItemImgWrap>
        <img src={item.url} alt={`${item.breeds[0].name}`} />
      </ItemImgWrap>

      <p>⇒</p>
    </ListPageItem>
  );
};
export default Item;
