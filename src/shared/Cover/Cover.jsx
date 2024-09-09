
import { Parallax } from 'react-parallax';
const Cover = ({img, title}) => {
  return (
    <Parallax
    blur={{ min: -50, max: 40 }}
    bgImage={img}
    bgImageAlt="the dog"
    strength={-200}>
<div className="hero h-[700px]">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md bg-slate-600 p-10 opacity-70"> 
            <h1 className="mb-5 text-6xl font-bold uppercase">{title}</h1>
            <p className="mb-5 text-lg">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi.
            </p>
          </div>
        </div>
      </div>
</Parallax>
  );
};

export default Cover;
