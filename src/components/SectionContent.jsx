const SectionContent = ({ className, title, id, children }) => {
  return (
    <div className={`section mt-6 ${className}`} id={id}>
      <h3 className="font-semibold capitalize text-xl leading-loose">
        {title}
      </h3>
      <div className="section">{children}</div>
    </div>
  );
};
SectionContent.propTypes;

export default SectionContent;
