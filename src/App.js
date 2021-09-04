import "./App.css";
import CloudIcon from "@material-ui/icons/Cloud";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import FeaturedPlayListRoundedIcon from "@material-ui/icons/FeaturedPlayListRounded";
import VideoLibraryRoundedIcon from "@material-ui/icons/VideoLibraryRounded";
import DateRangeRoundedIcon from "@material-ui/icons/DateRangeRounded";
import PhotoLibraryRoundedIcon from "@material-ui/icons/PhotoLibraryRounded";
import SettingsRoundedIcon from "@material-ui/icons/SettingsRounded";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import YouTubeIcon from "@material-ui/icons/YouTube";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
function App() {
  return (
    <div
      style={{
        maxWidth: "1600px",
        margin: "0 auto",
        backgroundColor: "#381E56",
      }}
    >
      <div
        style={{
          minHeight: "100vh",
          margin: "0 15%",
        }}
      >
        <div style={{ padding: "10px", backgroundColor: "#381E56" }}>XLIV | CMS</div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto auto",
            alignItems: "center",
            gridGap: "10px",
            
          }}
        >
          <div>
            <div
              className={"blockstyle"}
              style={{ borderRadius: "10px 0px 10px 10px", padding: "10px",backgroundColor:"slategray" }}
            >
              <div style={{ display: "flex" ,backgroundColor:"slategray"}}>
                <div style={{backgroundColor:"slategray"}}>Mon, 05Jul21</div>
                <div style={{ padding: "0 10px",backgroundColor:"slategray" }}>|</div>

                <div style={{backgroundColor:"slategray"}}>9.25AM</div>
              </div>
              <div style={{backgroundColor:"black"}}> <hr  /></div>
             
              <div style={{ display: "flex", backgroundColor:"slategray"}}>
                <div style={{ padding: "20px",backgroundColor:"slategray" }}>
                  <CloudIcon  style={{fontSize:"80px",backgroundColor:"slategray"}}/>
                </div>
                <div style={{marginTop:"30px",backgroundColor:"slategray"}}>
                  <div style={{backgroundColor:"slategray"}} > Mexico,USA</div>
                  <div style={{fontSize:'40px',backgroundColor:"slategray"}}> 30 &#8451;</div>
                </div>
              </div>
            </div>
            <br />
            <div
              className={"blockstyle"}
              style={{
                borderRadius: "10px 0px 10px 10px",
                padding: "10px",
                textAlign: "center",
              
              }}
            >
              <div className={"bgcolor"}>media</div>
              <div className={"bgcolor"}  style={{ padding: "20px" }}>
                <VideoCallIcon style={{fontSize:"80px",backgroundColor:"slategray"}} />
              </div>
              <div className={"bgcolor"} style={{ display: "flex", justifyContent: "center" }}>
                <div className={"bgcolor"}>
                  <div className={"bgcolor"} >170</div>
                  <div className={"bgcolor"}>Total Images</div>
                </div>
                <div
                  style={{ margin: "0 10px", borderRight: "solid black 2px" }}
                ></div>
                <div className={"bgcolor"}>
                  <div className={"bgcolor"}>110</div>
                  <div className={"bgcolor"}>Total Videos</div>
                </div>
              </div>
            </div>
            <br />
            <div
              className={"blockstyle"}
              
              style={{
                borderRadius: "10px 0px 10px 10px",
                padding: "10px",
                
                textAlign: "center",
              }}
            >
              <div className={"bgcolor"}>displays</div>
              <div className={"bgcolor"} style={{ padding: "20px" }}>
                <FeaturedPlayListRoundedIcon  style={{fontSize:"80px",backgroundColor:"slategray"}} />
              </div>
              <div className={"bgcolor"} style={{ display: "flex", justifyContent: "center" }}>
                <div>
                  <div className={"bgcolor"}>170</div>
                  <div className={"bgcolor"}>Total Images</div>
                </div>
                <div
                  style={{ margin: "0 10px", borderRight: "solid black 2px" }}
                ></div>
                <div >
                  <div className={"bgcolor"}>110</div>
                  <div className={"bgcolor"}>Total Videos</div>
                </div>
              </div>
            </div>
            <br />
          </div>
          <div>
            <div
              className={"blockstyle"}
              style={{
                borderRadius: "10px 0px 10px 10px",
                padding: "10px",
                textAlign: "center",
              }}
            >
              <div className={"bgcolor"}>Projects</div>
              <div  className={"bgcolor"}style={{ padding: "20px" }}>
                <VideoLibraryRoundedIcon style={{fontSize:"80px",backgroundColor:"slategray"}} />
              </div>
              <div  className={"bgcolor"} style={{ display: "flex", justifyContent: "center" }}>
                <div>
                  <div className={"bgcolor"}>170</div>
                  <div className={"bgcolor"}>Total Images</div>
                </div>
                <div
                  style={{ margin: "0 10px", borderRight: "solid black 2px" }}
                ></div>
                <div>
                  <div className={"bgcolor"}>110</div>
                  <div className={"bgcolor"}>Total Videos</div>
                </div>
              </div>
            </div>
            <br />
            <div
              className={"blockstyle"}
              style={{
                borderRadius: "10px 0px 10px 10px",
                padding: "10px",
                textAlign: "center",
              }}
            >
              <div className={"bgcolor"}>Schedular</div>
              <div  className={"bgcolor"} style={{ padding: "20px" }}>
                <DateRangeRoundedIcon style={{fontSize:"80px",backgroundColor:"slategray"}} />
              </div>
              <div  className={"bgcolor"}style={{ display: "flex", justifyContent: "center" }}>
                <div >
                  <div className={"bgcolor"}>170</div>
                  <div className={"bgcolor"}> Total Images</div>
                </div>
                <div
                  style={{ margin: "0 10px", borderRight: "solid black 2px" }}
                ></div>
                <div>
                  <div className={"bgcolor"}>110</div>
                  <div className={"bgcolor"}>Total Videos</div>
                </div>
              </div>
            </div>
            <br />
            <div
              className={"blockstyle"}
              style={{ textAlign: "center", padding: "30px",borderRadius:"15px 0px"  }}
            >
              Screensaver
          
              <div className={"bgcolor"}>
              <br/>
                <PhotoLibraryRoundedIcon  style={{fontSize:"80px",backgroundColor:"slategray"}}/>
              </div>
            </div>
            <br />
          </div>
          <div>
            <div
              
              style={{ display: "flex",  }}
            >
              <div className={"blockstyle"} style={{ width: "50%", borderRadius:"10px 0px 10px 10px", textAlign: "center",padding:"10px" }}>
                <div className={"bgcolor"}>settings</div>
                <br/>
                <div className={"bgcolor"}>
                  <SettingsRoundedIcon style={{fontSize:"50px",backgroundColor:"slategray"}} />
                </div>

              </div>
              <div style={{margin:"0 10px"}}></div>
              
              <div className={"blockstyle"} style={{ width: "50%",borderRadius:"10px 0px 10px 10px", textAlign: "center",padding:"10px" }}>
                <div className={"bgcolor"}>Profile</div>
                <br/>
                <div className={"bgcolor"}>
                  <PersonRoundedIcon style={{fontSize:"50px",backgroundColor:"slategray"}} />
                </div>
                <br/>
                <div className={"bgcolor"}>John Smith</div>
              </div>
            </div>
            <br />
            <div className={"blockstyle"} style={{ textAlign: "center",padding:"10px",borderRadius:"15px 0px" }}>
              <div className={"bgcolor"}  style={{}}>Editor</div>
              <div className={"bgcolor"} style={{padding:'40px'}}>
                <YouTubeIcon style={{fontSize:"100px",backgroundColor:"slategray"}}  />
              </div>
            </div>
            <br />
            <div
              className={"blockstyle"}
              style={{
                borderRadius:"15px 0px" ,
                padding: "10px",
                textAlign: "center",
              }}
            >
              <div className={"bgcolor"}>Video Walls</div>
              <div  className={"bgcolor"} style={{ padding: "20px" }}>
                <QuestionAnswerIcon style={{fontSize:"100px",backgroundColor:"slategray"}} />
              </div>
              <div className={"bgcolor"} style={{ display: "flex", justifyContent: "center" }}>
                <div>
                  <div className={"bgcolor"}>170</div>
                  <div className={"bgcolor"}>Total Images</div>
                </div>
                <div
                  style={{ margin: "0 10px", borderRight: "solid black 2px" }}
                ></div>
                <div>
                  <div className={"bgcolor"}>110</div>
                  <div className={"bgcolor"}>Total Videos</div>
                </div>
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
