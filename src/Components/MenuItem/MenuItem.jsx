

const MenuItem = ({item}) => {
    const {name, recipe, image, price} = item;
    return (
        <div className="flex space-x-4">
            <img style={{borderRadius: " 0px 200px 200px 200px"}}  className="w-[120px] border-2 border-[#008080] object-cover" src={image}/>
            <div>
                <h3 className="uppercase">{name}--------</h3>
                <h1>{recipe}</h1>
            </div>
            <p className="text-[#008080]">$:{price}</p>
        </div>
    );
};

export default MenuItem;