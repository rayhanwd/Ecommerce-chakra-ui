import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

const ProductDetail = () => {
    
    let { id } = useParams();

    const [getDetail, setDetail] = useState({});

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(json => setDetail(json))
    }, [])
    return (
        <div>{getDetail.id}</div>
    )
}

export default ProductDetail;