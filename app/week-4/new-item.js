"use client";

import React, { useState } from "react";

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);
    const maxQuantity = 20;
    const minQuantity = 1;

    const increment = () => {
        if (quantity < maxQuantity) {
            setQuantity(prevQuantity => Math.min(prevQuantity + 1, maxQuantity));
        };

    const decrement = () => {
        setQuantity(prevQuantity => Math.max(prevQuantity - 1, minQuantity));
    };

    