import { Parallax } from "react-parallax";
const Cover = ({ img, title }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 40 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-500}
    >
      <div
        className="hero h-[700px]"
        style={{objectFit: "cover"}}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className=" bg-slate-600 p-10 opacity-70">
            <h1 className="mb-5 text-white text-3xl md:text-5xl lg:text-6xl font-bold uppercase">{title}</h1>
            <p className="mb-5 text-white text-lg">
            Our menu features fresh, seasonal ingredients with gourmet options for every palate, from appetizers to desserts. 
            Would you like to try a dish?.
            </p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
