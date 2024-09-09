
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mt-10 py-5">
            <p className="text-yellow-600 text-center text-xl">----- {subHeading} -----</p>
            <div className="bg-slate-500 w-[300px] h-[3px] m-auto mt-2"></div>
            <h1 className="text-2xl font-bold text-center py-4">{heading}</h1>
            <div className="bg-slate-500 w-[300px] h-[3px] m-auto mb-10"></div>
        </div>
    );
};

export default SectionTitle;