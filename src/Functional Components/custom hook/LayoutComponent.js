import useWindowWidth from "../hooks/useWindowWidth";

const LayoutComponent = () => {
  const onSmallscreen = useWindowWidth(768);

  return (
    <div>
      <h1> you are Browsing in a {onSmallscreen ? "Small" : "Big"} Screen </h1>
    </div>
  );
};

export default LayoutComponent;
