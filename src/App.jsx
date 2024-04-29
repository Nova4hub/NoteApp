import "./Note.css";
import { useState, useEffect } from "react";
import Notes from "./Notes"

export default function App() {
  const [notes, setNotes] = useState([]);
  const [Background, setBackground] = useState(localStorage.getItem("backgroundtheme")||'url("https://wallpapercave.com/wp/ZuN6QBW.jpg")')
  const [add, setAdd] = useState(false)
  const [addMob, setAddMob] = useState(false)
  const [add2, setAdd2] = useState(false)
  const [addFmob, setAddFmob] = useState(false)
  const [colored, setColor] = useState("blue")
  // Load notes and textarea content from localStorage when the component mounts
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("notesData")) || [];
    setNotes(savedData);
  }, []);

  // Save notes and textarea content to localStorage whenever notes change
  useEffect(() => {
    localStorage.setItem("notesData", JSON.stringify(notes));
  }, [notes]);

  useEffect(()=>{
    localStorage.setItem("backgroundtheme", Background)
  },[Background])

  function AddNote() {
    // Check if the maximum number of notes has been reached
      setNotes((prevNotes) => [
        ...prevNotes,
        { id: crypto.randomUUID(), plah: "Try Writing Something", content: "" },
      ]);
  }
  function remove(indexToRemove) {
    setNotes((prevNotes) =>
      prevNotes.filter((_, index) => index !== indexToRemove)
    );
  }

  function updateContent(index, content) {
    setNotes((prevNotes) => {
      const updatedNotes = [...prevNotes];
      updatedNotes[index].content = content;
      return updatedNotes;
    });
  }

useEffect(() => {
  let back = document.body;
  if (back) {
    back.style.background = Background;
    back.style.backgroundRepeat = "no-repeat";
    back.style.backgroundSize = 'cover';
  }

  let themes = document.getElementById('themes');
  let fonts = document.getElementById("fonts")
  let fontMob = document.getElementById("fonts-mob")
  if (themes) {
    if (add === false) {
      themes.style.display = "none";
    } else if (add === true) {
      themes.style.display = "block";
    }
  }
  if (fonts) {
    if (add2 === false) {
      fonts.style.display = "none";
    } else if (add2 === true) {
      fonts.style.display = "block";
    }
  }
  if(fontMob){
    if (addFmob === false) {
      fontMob.style.display = "none";
    } else if (addFmob === true) {
      fontMob.style.display = "block";
    }
  }
}, [Background, add, add2, addFmob]);

function handleClick(){
  if(add2){
    setAdd(!add)
    setAdd2(!add2)
  }
  setAdd(!add)
}

function Default(){
  setBackground('url("https://wallpapercave.com/wp/ZuN6QBW.jpg")')
}

function darkenBlue(){
  setBackground('linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,108,1) 36%, rgba(0,212,255,1) 100%)')
}

function yelan(){
  setBackground('url(https://th.bing.com/th/id/R.7e23e2cce0ed61737e00cd1b18671542?rik=%2bo1EY834EcvqPQ&pid=ImgRaw&r=0)')
}
function yelanMob(){
  setBackground('url(https://a-static.besthdwallpaper.com/genshin-impact-beautiful-anime-girl-blue-eye-yelan-wallpaper-640x960-116395_169.jpg)')

}
function nightSky(){
  setBackground("url(https://wallup.net/wp-content/uploads/2019/09/190142-landscapes-nature-trees.jpg)")
}
function galaxietMountain(){
  setBackground('url(https://th.bing.com/th/id/OIP.i_7jq4bHqvltcvUeyPnk0gAAAA?rs=1&pid=ImgDetMain)')
}

function Oled(){
  setBackground('url(https://www.pxwall.com/wp-content/uploads/2018/09/iPhone-X-OLED-Wallpaper-hd.jpg)')
}

function ff(){
  setBackground('url(https://wallpapercave.com/wp/wp5755175.jpg)')
}

function handMob(){
  if(addFmob){
    setAddMob(!addMob)
    setAddFmob(!addFmob)
  }
  setAddMob(!addMob)
}
function handleFont(){
  if(add){
    setAdd(!add)
    setAdd2(!add2)
  }
  setAdd2(!add2)
}

function handFontMob(){
  if(addMob){
    setAddMob(!addMob)
    setAddFmob(!addFmob)
  }
  setAddFmob(!addFmob)
}

  return (
    <>
      <h1 className="title">Note taker</h1>
     <Notes notes={notes} remove={remove} updateContent={updateContent} AddNote={AddNote} handFontMob={handFontMob} addFmob={addFmob} add={add} handleClick={handleClick} Default={Default} darkenBlue={darkenBlue} yelan={yelan} nightSky={nightSky} galaxietMountain={galaxietMountain} yelanMob={yelanMob} ff={ff} Oled={Oled} handMob={handMob} addMob={addMob} add2={add2} handleFont={handleFont} />
       
    </>
  );
}
