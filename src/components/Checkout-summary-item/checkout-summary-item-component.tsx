import { CheckoutSummaryItemContainer, ImageContainer, QuantityDisplay, DetailsContainer, PriceContainer } from "./checkout-summary-item-styles";

const CheckoutSummaryItem = ({cartItem}) => {
    const {imageUrl, name, selectedSize, itemPrice, quantity} = cartItem;
    return (
        <CheckoutSummaryItemContainer>
            <ImageContainer>
                <img src={imageUrl}></img>

                <QuantityDisplay>
                    {quantity}
                </QuantityDisplay>
                
            </ImageContainer>

            <DetailsContainer>
                <h3>{name}</h3>
                <span>{selectedSize}</span>
            </DetailsContainer>
            
            <PriceContainer>
                <span>${itemPrice}</span>
            </PriceContainer>
            

        </CheckoutSummaryItemContainer>
    );
};

export default CheckoutSummaryItem;