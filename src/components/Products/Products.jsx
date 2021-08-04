import React from 'react'
import {ProductContainer,ProductHeading,ProductWrapper,ProductCard,ProductImg,ProductInfo,ProductTitle,ProductDesc,ProductPrice,ProductButtom} from './ProductsElements';

const Products = ({heading,data}) => {
    return (
        <ProductContainer>
            <ProductHeading>{heading}</ProductHeading>
            <ProductWrapper>
                {data.map(product=>(
                    <ProductCard key={product.id}>
                        <ProductImg src={product.img} alt={product.alt} />
                        <ProductInfo>
                            <ProductTitle>{product.name}</ProductTitle>
                            <ProductDesc>{product.desc} </ProductDesc>
                            <ProductPrice>{product.price} </ProductPrice>
                            <ProductButtom>{product.button} </ProductButtom>
                        </ProductInfo>
                    </ProductCard>
                ))}
            </ProductWrapper>
        </ProductContainer>
    )
}

export default Products
