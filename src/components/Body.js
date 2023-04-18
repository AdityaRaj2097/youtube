import { MainsContainer } from "./Maincontainer";
import { SideBar } from "./Sidebar";
export const Body=()=>{
    return(
        <div className="flex flex-row">
              <div className="w-1/12" > 
            <SideBar ></SideBar></div>
            <div className="w-11/12" > 
            <MainsContainer className="w-10/12"></MainsContainer>
            </div>
           
        </div>
    )
}