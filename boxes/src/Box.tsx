import type {boxesInterface} from './BoxList'
//Props
//State
//Effects
//Context
//Events

interface BoxPropsInterface extends boxesInterface{
  // id:string;
  // width:number;
  // height:number;
  // backgroundColor:string;
  remove:Function;
}


/** Colored box presentation
 *
 * Props:
 * - id (unique)
 * - width
 * - height
 * - backgroundColor
 * - remove (function to call)
 *
 * BoxList -> Box
 */

function Box({ id, width = 5, height = 5, backgroundColor, remove }:BoxPropsInterface) {

  /** Remove a box. */
  //To TYPE remove we need to visit BoxList for the func passed to remove.
  function handleRemove():void {
    remove(id);
  }

  return (
    <div className="Box">
      <div className="Box-box"
        style={{
          height: `${height}em`,
          width: `${width}em`,
          backgroundColor: backgroundColor
        }}
      />
      <button
        className="Box-removeBtn"
        onClick={handleRemove}>
        Remove The Box!
      </button>
    </div>
  );
}

export default Box;
