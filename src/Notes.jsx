import Themes from "./Themes";
import { useState } from "react";
export default function Notes({ notes, updateContent, remove, AddNote, handFontMob, addFmob ,add ,handleClick ,Default ,darkenBlue ,yelan ,nightSky ,galaxietMountain ,yelanMob ,ff ,Oled ,handMob ,addMob ,add2 ,handleFont }){
   const [fontC, setFontC] = useState("white")
   
function White () {
    setFontC("white")
}
function Blue () {
    setFontC("blue")
}
function Dark () {
    setFontC("black")
}
function Purple () {
    setFontC("purple")
}
function Galax () {
    setFontC("dodgerblue")
}

   
    return (
      <>
        <div className="container">
        {notes.map((note, index) => (
          <div className="note-container" key={note.id}>
            <textarea style={{color: fontC}}
              placeholder={note.plah}
              value={note.content}
              onChange={(e) => updateContent(index, e.target.value)}
              onDoubleClick={() => remove(index)}
            ></textarea>
          </div>
        ))}
        <button onClick={AddNote}>Add</button> 
        </div>
        <Themes White={White} Dark={Dark} Blue={Blue} Purple={Purple} Galax={Galax}  handFontMob={handFontMob} addFmob={addFmob} add={add} handleClick={handleClick} Default={Default} darkenBlue={darkenBlue} yelan={yelan} nightSky={nightSky} galaxietMountain={galaxietMountain} yelanMob={yelanMob} ff={ff} Oled={Oled} handMob={handMob} addMob={addMob} add2={add2} handleFont={handleFont} />
     </>

    ) 
}