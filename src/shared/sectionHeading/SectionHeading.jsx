

const SectionHeading = ({ who,heading , color }) => {
    return (
        <div>
            <h1 className={`text-center text-3xl font-semibold ${color ? `${color}` : "text-black"}`}>{who} {heading}</h1>
        </div>
    );
};

export default SectionHeading;