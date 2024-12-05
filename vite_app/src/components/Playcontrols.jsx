

import './Playcontrols.css'

function Playcontrols(){

    const data =[
        {img_url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Liked.png?raw=true",title:'Liked songs'},
        {img_url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image4.png?raw=true",title:'netflix'},
        {img_url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image3.png?raw=true",title:'k/da'},
        {img_url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image1.png?raw=true",title:'k/da'},
        {img_url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image2.png?raw=true",title:'k/da'}
        
       
    
    ]

    const name=[
        {img_url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image9.png?raw=true",title:'k/da'},
        {img_url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image8.png?raw=true",title:'k/da'},
        {img_url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image7.png?raw=true",title:'k/da'},
        {img_url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image6.png?raw=true",title:'k/da'},
        {img_url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image5.png?raw=true",title:'k/da'},
        {img_url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image10.png?raw=true",title:'k/da'}
    
    
    ]

    return (
        <>
     {}
        {/* Mainmenu */}
       

        <div className="container2">
        <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/User.png?raw=true" alt="" className="images"/>
        <img className="arrows" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/top%20arrow%20navigation.png?raw=true" alt=""/> 
        <p className="Good">Good Morning</p>  
    </div>


     <div className="container3">
        {/* <div className="child">
            <img className="images2" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Liked.png?raw=true" alt=""/><p className="text2">Liked Songs</p>
        </div>
        <div  className="child">
            <img className="images2" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image4.png?raw=true" alt=""/><p className="text2">Neffex Playlist</p>
        </div>
        <div className="child">
            <img className="images2" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image3.png?raw=true" alt=""/><p className="text2">K/DA</p>
        </div>
        <div className="child">
            <img className="images2" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image1.png?raw=true" alt=""/><p className="text2">Liked Songs</p>
        </div>
        <div className="child">
            <img className="images2" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image2.png?raw=true" alt=""/><p className="text2">Dance/ Electronix mix</p>
        </div> */}
    
    {data.map((i)=>(
        <div key={i.id} className="child" >
            
            <img className="images2" src={i.img_url} alt="" />
            <p className="text2">title:{i.title}</p>
        </div>
    ))}
    </div> 
    

    



   
    <p className="Shows">Shows You Might Like</p>
    <div className="container4">
        {/* <div className="child2">
            <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image9.png?raw=true" alt="" className="images3"/><p className="text3">Weekly Motivatio...</p></div>
        <div className="child2"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image8.png?raw=true" alt="" className="images3"/><p className="text3">Meditation SELF</p></div>
        <div className="child2"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image7.png?raw=true" alt="" className="images3"/><p className="text3">Words beyond act... </p></div>
        <div className="child2"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image6.png?raw=true" alt="" className="images3"/><p className="text3">The Alexa Shows</p></div>
        <div className="child2"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image5.png?raw=true" alt="" className="images3"/><p className="text3">The Stories of Ma...</p></div>
        <div className="child2"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image10.png?raw=true" alt="" className="images3"/><p className="text3">Motivation Daily b...</p></div> */}
   
   {name.map((i)=>(
        <div key={i.id} className="child2" >
            
            <img className="images3" src={i.img_url} alt="" />
            <p className="text3">title:{i.title}</p>
        </div>
    ))}
   
    </div>

    <div className="container5">
        <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image11.png?raw=true" alt="" className="images4"/>
        <p className="on" >Dreaming On <br/>NEFEX</p>
    <img className="img14" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/bx_bxs-heart.png?raw=true" alt=""/>
    <img className="images5" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Music%20Player%20Options.png?raw=true" alt=""/>
    <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Right%20options.png?raw=true" alt="" className="images6"/>
    </div>

    <div className="green">
    <p className="par">Listenini on ASUS-ROG-G531GT</p>
    
    </div>


    
    </>
      )

}

export default Playcontrols