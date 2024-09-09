

const MenuItem = ({item}) => {
    const {name, recipe, image, price} = item;
    return (
        <div className="flex space-x-4">
            <img style={{borderRadius: " 0px 200px 200px 200px"}}  className="w-[120px] border-2 border-sky-500" src={image}/>
            <div>
                <h3 className="uppercase">{name}--------</h3>
                <h1>{recipe}</h1>
            </div>
            <p className="text-yellow-600">$:{price}</p>
        </div>
    );
};

export default MenuItem;