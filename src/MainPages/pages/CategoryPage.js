import React from "react";
import MenuTopbar from "../../components/TopBars/MenuTopBar";
import CategoryView from "../../components/views/CategoryView";

const CategoryPage = () => {
    return (
        <>
            <MenuTopbar title="중고거래 카테고리" />
            <CategoryView />
        </>
    );
};

export default CategoryPage;
