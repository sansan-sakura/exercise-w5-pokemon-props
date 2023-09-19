// Destructure pokemon props here :)
const Pokemon = ({name, types}) => {
  return (<div>
    <h2>{name}</h2>
    {types.map((type,i)=><p key={i}>{type}</p>)}
  </div>);
};

export default Pokemon
