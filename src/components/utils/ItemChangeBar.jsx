import React from 'react'
import './ItemChangeBar.scss'

const ItemChangeBar = (props) => {
    return (
        <ul className="item-change-container">
            <li className="item-change-btn" onClick={() => props.setItemState(props.index)}>
                예약중으로 변경
            </li>

            <li className="item-change-btn" onClick={() => props.setItemState(props.index)}>
                거래완료로 변경
            </li>
        </ul>
    );
}

export default ItemChangeBar;