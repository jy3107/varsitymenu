import React from 'react'

const MenuItem = props => {
  // state variables setup -- selected value to be false initially
  const [selected, setSelected] = React.useState(false);
  // when button is clicked, change original value to its opposite
  const toggleSelected = () => {
    if (!selected) {
      props.addPurchasedItem({
        name: props.name,
        price: props.price,
      });
    } else {
      props.removePurchasedItem(props.name);
    }
    setSelected(!selected);
  }

  return (
    // change css class depending on value of 'selected'
  <button class={selected ? "menu-item selected" : "menu-item"} onClick={toggleSelected}>
    <img src={props.picture} alt={props.name} />
    <dt>{props.name}</dt>
    <dd>{props.price}</dd>
  </button>
)
}
export default MenuItem
