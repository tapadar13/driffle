const Ellipse = () => {
  const ellipseStyle = {
    width: "944px",
    height: "568px",
    display: "flex",
    flexShrink: 0,
    borderRadius: "994px",
    border: "1px dashed rgba(255, 255, 255, 0.20)",
    justifyContent: "center",
    alignItems: "center",
    background:
      "linear-gradient(135deg, rgba(33, 83, 211, 0.40) 0%, rgba(39, 103, 123, 0.40) 100%)",
    filter: "blur(120px)",
    position: "relative",
    left: "30%",
  };

  return <div className="ellipse" style={ellipseStyle}></div>;
};

export default Ellipse;
