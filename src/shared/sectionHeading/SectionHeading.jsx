

const SectionHeading = ({ who,heading }) => {
    return (
        <div>
            <h1 className="text-center text-2xl font-semibold">{who} {heading}</h1>
        </div>
    );
};

export default SectionHeading;