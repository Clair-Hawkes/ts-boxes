import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

//Props - none
//State - done
//Effects - none
//Context - none
//Events - none

/** Manage list of boxes
 *
 * State:
 * - boxes: [ { id, width, height, backgroundColor }, ... ]
 */


//TODO: How to confirm?
interface boxesInterface{
  id:string;
  width:number|string;
  height:number|string;
  backgroundColor:string;
}

function BoxList() {
  //TODO TYPE the state:
  const [boxes, setBoxes] = useState<boxesInterface[]>([])

  /** add box with given { id, width, height, backgroundColor } */
  function add(newBox:boxesInterface):void {
    setBoxes((boxes:boxesInterface[]):boxesInterface[] => [...boxes, newBox]);
  }

  /** remove box matching that id. */
  function remove(id: string):void {
    setBoxes((boxes:boxesInterface[]):boxesInterface[] => boxes.filter(box => box.id !== id));
  }

  return (
    <div>
      <NewBoxForm createBox={add} />
      {/* TODO: boxes.map return TYPE? */}
      {boxes.map(({ id, width, height, backgroundColor }:boxesInterface) => (
        <Box
          key={id}
          id={id}
          width={width}
          height={height}
          remove={remove}
          backgroundColor={backgroundColor}
        />
      ))}
    </div>
  );
}

export default BoxList;
export type {boxesInterface}
