import React, { forwardRef } from "react";

const IMAGE_URL = "https://loremflickr.com/120/120/sun";

type circleProps = {
  id: string;
  text: string;
}

const Circle = forwardRef(({ text, id }: circleProps, ref: any) => (
  <div ref={ref}>
    <div className="circle">
      <span
        className="image"
        style={{
          backgroundImage: `url('${IMAGE_URL}?random=${id}')`
        }}
      />
    </div>
    <p className="text">{text}</p>
  </div>
));

export default Circle;
