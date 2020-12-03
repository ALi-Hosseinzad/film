import React from "react";
import src from '../../image/126.gif';
function WithListLoading(Component) {
  return function WihLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
      <div style={{ textAlign: "center", fontSize: "30px", margin:"10px auto" }}>
        <img src={src} alt="loading"/>
      </div>
    );
  };
}
export default WithListLoading;
