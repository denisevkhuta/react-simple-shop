import React from 'react'

function Categories({ items }) {

    const [activeItem, setActiveItem] = React.useState(null);

    const onSelectItem = (index) => {
        setActiveItem(index);
    }

    return (
        <div className="categories">
            <ul>
                <li className={activeItem === null ? 'active' : ''} onClick={() => onSelectItem(null)}>Все</li>
                {items && items.map((val, index) =>
                    <li
                        onClick={() => onSelectItem(index)}
                        key={val + index}
                        className={activeItem === index ? 'active' : ''}
                    >
                        {val}
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Categories
