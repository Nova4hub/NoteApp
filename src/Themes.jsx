export default function Themes({ White, Dark, Blue, Purple, Galax, handleClick, add, Default, darkenBlue, yelan, nightSky, galaxietMountain, yelanMob, ff, Oled, handMob, addMob, add2, handleFont, handFontMob, addFmob }){
    return  <>
    <button className="theme-btn" onClick={handleClick} >Themes</button>
    {add&&(
      <div id="themes" >
      <h2 onClick={Default} >default</h2>
      <h2 onClick={darkenBlue} >darken-blue</h2>
      <h2 onClick={yelan}>kill4u</h2>
      <h2 onClick={nightSky}>night-sky</h2>
      <h2 onClick={galaxietMountain} >Gal Mountain</h2>
      </div>
    )}
    <button className="font-btn" onClick={handleFont} >Themes</button>
    {add2&&(
      <div id="fonts" >
      <h2 onClick={White} >white</h2>
      <h2 onClick={Dark}>dark</h2>
      <h2 onClick={Blue} >blue</h2>
      <h2 onClick={Purple} >purple</h2>
      <h2 onClick={Galax} >galax</h2>
      </div>
    )}
     <button className="theme-btn-mob" onClick={handMob} >Themes</button>
        {addMob&&(
          <div id="themes-mob" >
          <h2 onClick={Default} >default</h2>
          <h2 onClick={darkenBlue} >darken-blue</h2>
          <h2 onClick={yelanMob}>kill4u</h2>
          <h2 onClick={Oled} >oled</h2>
          <h2 onClick={ff} >F fantasy</h2>
          </div>
        )}
        <button className="fonts-btn-mob" onClick={handFontMob} >Themes</button>
        {addFmob&&(
          <div id="fonts-mob" >
          <h2>white</h2>
          <h2>dark</h2>
          <h2>blue</h2>
          <h2>purple</h2>
          <h2>rose</h2>
          </div>
        )}
    </>
}