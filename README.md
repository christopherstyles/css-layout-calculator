# CSS Layout Calculator

When developing an art-based layout with many elements that need to be positioned absolutely in relation to one another and maintain their position/scale as the browser window or device is resized, it’s helpful to use `vw` ([viewport](https://developer.mozilla.org/en-US/docs/Web/CSS/Viewport_concepts) length units for width) values instead of absolute pixel positions or percentages. 

The primary goal of this calculator is to accept a global container width, a dimension value in pixels, and to generate various helper values for that dimension. 

The calculator takes the following inputs:

* Container Width – the overall size of the container your element will be in. This often a breakpoint size. Ex. `1440`, `1024`, `768`.
* Round To – the number of decimal places to generate. Ex. `2`, will produce a value such as `3.89vw`.
* Prefix – a prefix to add to the generated tailwind helpers. Ex. `md:`, will produce a value such as `md:w-[3.55vw]`.
* Element Width – the width of the element you are positioning. Ex. `200`.

## To install

Run it with `yarn install` then `yarn start`.

