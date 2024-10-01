import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { CgAdd } from "react-icons/cg";
import { BsPlusLg } from "react-icons/bs";
import { useLinkMatch } from "../hooks/useLinkMatch";

export const EditProfile = ({ show, setShow, profileData, onUpdate }) => {

  const [linkicon,setLinkIcon]=useState("")
  const [linksUrl,setLinkUrl]=useState("");
  const [socialLinks,setSocialLinks]=useState([])
  const [profile, setProfile] = useState({
    name: "",
    niche:"",
    bio: "",
    socialLinks:socialLinks 
  });
  
  const handleSubmit=(e)=>{
    setProfile({...profile,socialLinks:{...profile.socialLinks,other:linksUrl}})
  }
  const handleAddLink=(e)=>{
    e.preventDefault();

    setSocialLinks([...socialLinks,{linkicon:linkicon,url:`${linksUrl}`}])
    alert(socialLinks)
  }
 return<>
 {show  &&  
    <div className="w-full h-screen top-0 left-0 fixed z-20 backdrop-blur-sm flex items-center justify-center ">
      <div className="md:w-[500px]  w-full mx-10 md:mx-0 bg-white rounded-lg shadow-lg shadow-black/50  p-7">
      <header className="text-slate-600 text-xl font-bold flex items-center justify-between">Update Profile
        <button className="hover:text-red-500"  onClick={()=>setShow(false)}><IoClose size={30}/></button>
      </header>
      <form action="submit" className="flex flex-col gap-3 mt-5 items-center justify-center overflow-y-scroll no-scrollbar ">
        <input type="text" className=" text-lg w-full h-10 rounded-lg border-2 border-slate-300 outline-none p-2 mt-3" placeholder="Username" onChange={(e)=>setProfile({...profile,name:e.target.value})} />
        <input type="text" className="w-full  text-lg h-10 rounded-lg border-2 border-slate-300 outline-none p-2 mt-3" placeholder="Niche" onChange={(e)=>setProfile({...profile,niche:e.target.value})} />
        <textarea name="" id="" cols="30" rows="10" className="w-full  text-lg h-10 rounded-lg border-2 border-slate-300 outline-none p-2 mt-3" placeholder="About" onChange={(e)=>setProfile({...profile,bio:e.target.value})}></textarea>
        <span className="text-slate-600 text-lg font-semibold text-left w-full">Links</span>
        <div className="w-full flex gap-3 items-center justify-center">
          <div className="flex flex-col gap-3 w-full items-center justify-center">
            <select name="platfomr"  className="w-full text-lg h-12 rounded-lg border-2 border-slate-300 outline-none p-2 mt-3" defaultValue={"Platform"} onChange={(e)=>setLinkIcon(e.target.value)}>
              <option value="instagram">Instagram</option>
              <option value="facebook">Facebook</option>
              <option value="twitter">Twitter</option>
              <option value="linkedin">Linkedin</option>
              <option value="youtube">Youtube</option>
              <option value="github">Github</option>
              <option value="website">Website</option>
              <option value="medium">Medium</option>
              <option value="other">Other</option>
            </select>
            <input type="text" className="w-full  text-lg h-10 rounded-lg border-2 border-slate-300 outline-none p-2 " placeholder="URL" onChange={(e)=>setLinkUrl(e.target.value)} />

          </div>
          <button className="text-gray-200 hover:text-white rounded-lg bg-slate-900 w-20 flex items-center justify-center h-20 font-bold" onClick={(e)=>handleAddLink(e)}><BsPlusLg size={30}/></button>
        </div>

        <button className="text-lg  text-white hover:scale-[1.1] rounded-md w-[75%] bg-slate-700 py-2 mt-5 ease-in-out duration-300 mb-3" onClick={(e)=>{console.log(profile);e.preventDefault();}}>Update</button>

      </form>
      </div>
    </div>
  }
 </>
};

