import { CheckoutSummaryItemContainer, ImageContainer, DetailsContainer } from "./checkout-summary-item-styles";

const CheckoutSummaryItem = ({cartItem}) => {
    const {imageUrl, name, selectedSize, price} = cartItem;
    return (
        <CheckoutSummaryItemContainer>
            <ImageContainer>
                <img src={imageUrl}></img>
            </ImageContainer>

            <DetailsContainer>
                <h3>{name}</h3>
                <span>{selectedSize}</span>
            </DetailsContainer>
            

        </CheckoutSummaryItemContainer>
    );
};

export default CheckoutSummaryItem;