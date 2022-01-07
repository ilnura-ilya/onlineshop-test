function Shop (props){
   console.log(props);
   return(
      <div className="shop">
         <h3>{props.name}</h3>
         <img src={props.image} alt="imageCC"width="250px"/>
         <h4>{props.price}</h4>
         <p>{props.description}</p>
      </div>
   )
}

export default Shop;