import React, { useReducer } from "react";

const CategoriesData = [
    {
        title: "Phone",
        like: false,
        dislike: false,
        description: "Iphone 11, 12, 14, 14 pro"
    },
    {
        title: "Computer",
        like: false,
        dislike: false,
        description: "DEll, HP, Asus, Lenovo"
    },
    {
        title: "Headphone",
        like: false,
        dislike: false,
        description: "Sony, samsung, Soupeats"
    }
]

const reducer = (state, action) => {
    console.log("action:" , action);
    console.log("state:" , state);
    switch (action.type) {
        case "LIKE":
            console.log(state);
            console.log("user press like");
            return state.map((item, idx) => {
                if(idx === action.categoryId){
                    return {...item, like: true, dislike: false}
                }else{
                    return item
                }
            })
        case "DISLIKE":
            console.log(state);
            console.log("user press dislike");
            return state.map((item, idx) => {
                if(idx === action.categoryId){
                    return {...item, dislike: true, like: false}
                }else{
                    return item;
                }
            })
        default:
            return false;
    }
}

function Categories () {

    const [categories, dispatch] = useReducer(reducer, CategoriesData);


    const handleReact = (categoryId, type) => {
        dispatch({type: type , categoryId : categoryId});
    }

    return (
        <>
            <h1>Hello Categories !</h1>

            {categories.map((item, idx) => (
                <div key={idx} >
                    <label>Like</label>
                    <input type="checkbox" checked={item.like} onChange={() => {
                        handleReact(idx,"LIKE")
                    }}/>
                    <label>Dislike</label>
                    <input type="checkbox" checked={item.dislike} onChange={() => {
                        handleReact(idx,"DISLIKE")
                    }} />
                    -{item.title}
                    <br />
                </div>
            ))}</>

    )
}

export default Categories;