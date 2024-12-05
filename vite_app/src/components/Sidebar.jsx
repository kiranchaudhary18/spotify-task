import './Sidebar.css'

function Sidebar(){

    return (
        <>

        <div className="white">
         <div className="container">
        <img src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/10.spotify-clone/assets/Spotify%20logo.png" alt="" className="logo"/>
        <div className="img1" ><img className="icons" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Home.png?raw=true" alt=""/><p className="text0">Home</p></div>
        
        <div className="img2" ><img className="icons" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Search.png?raw=true" alt=""/><p className="text01">search</p></div>
        
        <div className="img3" ><img className="icons" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Your%20library.png?raw=true" alt=""/><p className="text02">Your Library</p></div>
        
        <div className="img4" ><img className="icons" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Create.png?raw=true" alt=""/><p className="text03">Create playlist</p></div>
        
        <div className="img5"><img className="icons" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Liked.png?raw=true" alt=""/><p className="text04">Liked Songs</p></div>
    
    <div className="img6" ><img className="icons" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/your%20episodes.png?raw=true" alt=""/><p className="text05">Your Episodes</p></div>
    </div>

    <div>
        <p className="text1" >FAV</p>
    </div>
    <div>
        <p className="text10" >Daily Mix 1</p>
    </div>
    <div>
        <p className="text11" >Discover weekly</p>
    </div>
    <div>
        <p className="text4" >Malayalam</p>
    </div>
    <div>
        <p className="text5" >Dance / Electronix mix</p>
    </div>
    <div>
        <p className="text6" >EDM / Popular</p>
    </div>

    <div className="install">
        <img  src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/grommet-icons_install-option.png?raw=true" alt="" className="icons"/>
        <p className="app"  >Install App</p>
    </div>
    </div>

          
        </>
      )

}

export default Sidebar