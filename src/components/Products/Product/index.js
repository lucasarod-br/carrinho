import React from 'react'
import styled from 'styled-components'
import { Text } from '../../Text/style'

const StyledProduct =styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    max-width: 460px;
    width: 95vw;
    margin: .4rem 0;
`

function Product( { img, name, maxPrice, originalPrice, price} ) {
    const prices = maxPrice === originalPrice
    const w = window.innerWidth 
    return (

    
    <StyledProduct>
        <img src={img} alt={name} width={w <= 425 ? '58px': w <= 790 ? '62px' : w <= 1048 ? '72px' : '100px' }/>
        
        <Text size='12' style={{'display': 'inline-block'}}>{name}</Text>

        {price && ( prices ? <Text bold>R${maxPrice.toFixed(2)}</Text> : <div style={{'display': 'flex', 'flexDirection': 'column'}}> <Text color='#9B9B9B'>R$<s>{maxPrice.toFixed(2)}</s></Text><Text bold >R${originalPrice.toFixed(2)}</Text>  </div>)}

    </StyledProduct>
    )
}

export default Product