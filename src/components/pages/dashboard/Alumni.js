import React, {useEffect, useState} from 'react'
import './Alumni.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Box } from '@mui/material';
import Alumni_logo from "../../../assets/images/ALumni_Rep_logo.png";
import Alumni_logo1 from "../../../assets/images/Header-Image_logo_1.jpg";
import Alumni_logo2 from "../../../assets/images/Header-Image_logo_2.jpg";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import TextField from '@mui/material/TextField';
// import Alumni_logo3 from './ALumni_Rep_logo.png';
// import Alumni_logo4 from './ALumni_Rep_logo.png';
// import Alumni_logo5 from './ALumni_Rep_logo.png';

import {Carousel} from 'react-bootstrap';



const Alumni = () =>{
    var ChangeImage=false;
    const userparams = "/"+ window.location.pathname + "/";

var a=-1,b=-1;
var c="";
console.log(userparams.length);
for(var i=userparams.length - 1 ; i>=0;i--){console.log(userparams[i]);

if(a!==-1 && userparams[i]==='/') break; 

if(a!==-1 && b===-1){
c+=userparams[i];
}
if(userparams[i]==='/') a=i;
}
console.log("c is ->" + c);

  const UserName = c.split("").reverse().join("");
  console.log(UserName);
    const Alumni_logo3=Alumni_logo;
    const Images=[Alumni_logo1,Alumni_logo2];
    const [TArr, setTArr] = useState([0,1,2]);
    // useEffect( async ()=>{

   
    // const token = localStorage.getItem(`User ${UserName}`);
    // console.log("fetched from local->")
    //    console.log(token);
       
    //  await axios.get('http://localhost:5000/auth/TokenValidate', {headers:{"authorization" : `Bearer ${token}`  }}).then(Response=>{
            
    //       if(Response.data.resval !== "TokenVerified")
    //       { window.location.replace(`/auth/Login`);
            
           
    //       }
    //     console.log(Response.data); 
        
    //  }).catch(error=>{
    //     console.log(error);
    //  })
    
      
    //     ChangeImage=true;

    // },[]); 

  
    // useEffect(async () => {
        
    //    // fetch data


    // }, [TArr]);
   

    const [CollageName , setCollageName] = useState('');
    const [BranchName , setBranchName] = useState('');
    const [PassOutYear , setPassOutYear] = useState('');
    const [filterArray,setFilterArray]=useState([]);



   const AlumniCard = ({Alumni}) =>{

  const AlumniPortfolioSite = Alumni.PortFolioWebSiteLink;
console.log(CollageName, BranchName, PassOutYear);
  if((CollageName === 'noFilter' || CollageName === Alumni.CollageName  || CollageName === '')
  && (BranchName === 'noFilter' || BranchName === Alumni.Branch || BranchName === '')
  && (PassOutYear === 'noFilter' || PassOutYear === Alumni.PassedOutYear || PassOutYear === '')){
       return(
           
               <div className="AlumniCard-Wrapper"  onClick={()=>{return 0}}>
                   <div className="AlumniCard-Container">
                       <div className="Alumni-Front">
                            <img  src={Alumni.Pic} alt="Not Available" />
                            <div className='AlumniCard-frontText-holder'>
                                <span className='text-Al   ACFTAN'>{Alumni.Name}</span>
                                <span className='text-Al   ACFTCN'>@{Alumni.CompanyName}</span>
                                <span className='text-Al   ACFTB'>{Alumni.Branch}</span>
                                <span className='text-Al   ACFTAPY'>{Alumni.PassedOutYear}</span>
                                <span className='text-Al   ACFTACD'>{Alumni.Campus}</span>
                            </div>
                       </div>
                       <div className="Alumni-Back">
                          <div className="ACBDH">
                          <span className='ACFTAN'>{Alumni.Name}</span>
                                <span className='text-Al   ACFTCN'>@{Alumni.CompanyName}</span>

                                  {
                                       BranchName === Alumni.Branch ?

                                <span className='text-Al   ACFTB'>{Alumni.Branch}</span>
                                :   <span></span>  
                                  }
                                <span className='text-Al   ACFTAPY'>{Alumni.PassedOutYear}</span>
                                
                          </div>
                          <div className="ACBCDH">
                          <span className=  ' text-Al  ACBTACDEI'>{Alumni.EmailId}</span>
                          <span className=  ' text-Al  ACBTACDWN'>{Alumni.MobileNumber}</span>
                          <span className=  ' text-Al  ACBTACDII'>{Alumni.InstaId}</span>
                          </div>
                          <div className=  " text-Al  ACBD">
                              
                            <span span className="text-Al">{Alumni.Description}   </span>
                              
                           </div>
                       </div>
                   </div>
               </div>
       )
                                }
                                else return (null);
   }




const Alumni ={
    Name:"Alumni Name",
    CompanyName:"Company Name",
    Campus:"Campus/Collage",
    PassedOutYear:"Passedoutyear",
    Branch:"CSE",
    ContactDetails:"Contactdetails",
    EmailId:"Email@cmrcet.ac.in",
    MobileNumber:"0000000000",
    InstaId:"InstaId",
    Description:"Acheivements, participtions,",
    AlumniPortfolioSite:"https://stackoverflow.com/questions/31079081/programmatically-navigate-using-react-router",
Pic:"data:image/jpeg;base64,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"
}


const CollageNames = [
    "noFilter",
    "CMRCET",
    "CMRIT",
    "CMRTC",
    "CMRP",
], BranchNames=[
    "noFilter",
    "CSE",
    "IT",
    "ECE",
    "EEE",
    "CIVIL",
    "MECH"
],PassOutYears=[
    "noFilter",
    "2021",
    "2020",
    "2019",
    "2018",
    "2017",
    "2016",
]



















    return(
        <div className="Alumni-Wrapper">
         <div className="AlumniHeader">
       
         <Carousel className="BGH"  fade>
        <Carousel.Item interval={2000} >
          <img
            class="d-block w-100"
            src={Alumni_logo2}
            alt="First slide"
          ></img>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            class="d-block w-100"
            src={Alumni_logo1}
            alt="First slide"
          ></img>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            class="d-block w-100"
            src="https://www.marjon.ac.uk/media/2018-website-images-gdpr/alumni/alumni-header-1.jpg"
            alt="First slide"
          ></img>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            class="d-block w-100"
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFBcVFBQYGBcaGyAeGxsbHB0dIR4bHR0gICIbHRskIiwkICApHhsgJjYlKS4wMzMzGiI5PjkxPSwyMzABCwsLEA4QHhISHjIqIikyMjIyMjIwMjIyMjIyMjI0MjIyMjIyMjIyMjIyMjI0MjIyMjIyMjIyMjIyMjIyMjIyMv/AABEIALcBEwMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xABJEAACAQIEAwQHBAcGBQMFAQABAhEAAwQSITEFQVEGEyJhMnGBkaGx8FLB0eEHFCNCU2KSM5OistLxFRZygsJDY3MkVGSDsxf/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAtEQACAgICAQMDAwMFAAAAAAAAAQIRAxIhMUEEE1EUImGBobGRwfAjJDJScf/aAAwDAQACEQMRAD8Ap7XaTGf/AHF3+8apC9psb/Huf1/lUHDYRpAKnbfl76fv4O4AO7UMZ1k8vfUVG6FbLDB9psa1y2pvvBdQdRsWA6V2EiGPr+orjXCcE+e0XADd4sgbekPurs130jQ0qKRkO3HFb+GFjubjDNnzaIZjJHpA9TtWXXtjjv4p/ot/6av/ANJV1F/V87Bf7SJMfw657bxRL6va7vNE5tY5c948qeqFbOm9h+N38S10XnkIqlfCg1JM7Dyqw7XcZuYW3be1lJZyDmWdInkRVN+jfIWvlGDeFNjPNqsu3lnNbtD+c/KlwMoU7d4n7Fr+h/8AXTy9u8Rzt2/6HH/nVJYwRmIPrjSpDcPPSjgOS2/59u87Se5/xq54NxpsVbZ2QLlfLAnoDOvrrCGy2bL3bbxMGN99q1/Ze1ktuP8A3P8AxFZ5K1ZULsm8cxBt2LjqYKxB/wC4CsinaO7/ABK1nH1nD3R5D/MKxCYas/TKLjyvI5tp8FmvaS9/EHuFKHaa79tfcKpsPcZnyd1cAkjMQY0nWY5x8amthT0rfSHwiNpFvhON37i3GUoe7TOdOVRx2ru9EPspzg9rJYxp/wDx3PuVjWHXGt5e4U1ii/Abs2p7W3PsIffQPa+5ztr7zWNGMPl7qJ8VPJfdR7MPgN5HR+B8ZOILgoFyAc5mZ/CrlcQtsNcf0VUkkCdBqdPUKxfYB5a9oBom3ratTxMfsL07d1c/yGuScFHMkjRNuNjidsMH/Eb+7uf6acXtVgz/AOsPajj/AMa5YuF9fvNL/VfX767aMrOpf8yYQ/8Arp7ZHzFScNxC1cXNbuB1kiRqJAkifVXIXwp6muhdg7cYQg6/tG39QooLLe/xSwhyvetI0TDOqmDsYJmKJeJ2DtftH1XE/GsJ+kG0TjJBjwJ99ZpbB6/CjUWx2IYq2driH1MD99HIOxmuNvYPl7qvuwuGBxLBgCO7bkPtLS1HZ0UikGsr+kJWSzaNslSbjSVkT4fL1VgDxHEDa9d/vH/GjVhsdkdZpllNckHGsUpI/WLoj/3G+81a9kuOXr2LW29+4ylXMEzqEJGvrpODGpI6C2EmhTF3GspIAGnWfxoVGqLtnOOC4hbjBQWbrO406fhW/wCB8MtOrZ1zMG6kaQI29vurLcI7Mur5pAMg6E/hW44Vg3tuWJEFYIE7g6cvM1hHJJyVdCUFFC8PwjDMcyCcrRo5MMp2Ou/lV7cPiNRLaKs5QBJJMcydz66kMZM10J8CKrj/AAvD3wn6wpIGYAiNM0Tvz00jXesPx3sbZVgmFIEGXFws0QSAQViBrXQcb3dwi3cQnUESDGYCd5HL2Vi8egts2YkKxmJB8OuwDmddNZFTOcl/xCx/sU6YNrqO1o5ssNbzQYneZLNr5bGtFxa+l4IFIMeLccx+XxrnrZhICmS0iRsu+/lpProlxZA2Gb5eqOs/71O8miLZpHw9+SLL4cnkrd5vGxYbb9KsOFYC+wAxQtBs8fsmYjKY3zD0pn4VkRj9QA+nQ+r3VccK44YyAqR1MyWnrMaH5Vn7k0WpJ8M17cAt/ab4fhSf1NbQhSTJnX1U9gMSt9EuA6iZAJADcww+40rG8q1yv7GVDsgY9M1th1A+YrJ8V7LPfKFbhTKCNOcxv4hWxZZEGiVRtXHDNKCpUauCbswr9ibsKFxD6Dz1kz9urXgfB7tuyqXAxYM8liCSM5g6MdIiNdo22rURQq/qpfCJeNEDDYAm1iE1Geyy6eYI++sFiey95bqJbtu9sxmuZR4ZOuk6wNa6cjkTHMQaTWi9ZJLpEvEm+zlL8FxQJH6s5AJg5NxO+lMPwvEjfDXf7t/wrrtJYUvrJfCH7SMh2Dw7p3udHTRfSUr12n11qsXZa5bu21jM9t1E9WUgfE0du3BJmZ+6n8MfGKhZN8ikPWotGUwXZO9kHeoC4EGGWInSNRyqJxHC9y/dvYunQEFAGEEnmG8jvXQ3Ri6ENCicw+1I09xqHioZzptA+vaa7Z5FFW0ZRjb4MUmHDoHAIDCYO/trWdlreWyw/nPyFB1AgBAZMbbDrtR4riiWLeiyxmAI3M6trIHnU48qk+glHVGR7fhziwFKx3a77z4vMGNqo+FK73AhykQTpv75PWtBieOo9wlilwkAAm2PR1gzv7PMc5q5w2DtgBu7tBuqLGnzpzy6vlCitujPNwpiJVGI8gTVj2VwLW75LIw/Zkagjmv4VosG5VHCrJXUKNJkaCeUkVKRiQCRBgSJmD0mnGeyTQONGS/SXbz4e0AzA96T4TBjIawakfvCOW9bzt1igMi8zI9Wxrn2Nw95QXCNk1ExpHOOcedW7M3dj3FMEO7dxr4CQfUv5VC7AXQuNtsxhcr6nzQ1ouCNbu2bi3gSApJIPI6EaazrVJhsKveAWlhepMwNdT7PlUrIncSvFnQMVxG1nbxc6FYi5grxJy22I5eH8DQp6j2ZrrPbnAj965/dtUy32/wP8S4P/wBb/hXL8TgdZVl8xouvqMeqPKq1rhDRAid5qIwj4Dds7VY7d4F2VFuOWZgqju7m7GBrl01NadLm+hEGDIrhHCMHcGIskoYF23O2njHn5V3e6dTTcUlaKTZmu0GOwoK97cW2XXMpKXJJBiTpy6HqPKsnxDFWbgVTikaOYVhvuPRk6yfaad/SeP2tjTTIwnkD4dKzWDwZMGA0xAnrUyglzZNmhwzWvSV8wTTMoPhzaSxI2MfOhhmtCc7/ALPoVgH2x9TT/BcKIfvAqjSAsanX5feah8QtMcqhiNTqdJgnTQfRNYpcitdj7HDtH7W2OsHQ+w7U7gcNhAWDXrUEzOaN6pr+BeTJUwN9BPspkYc9K1UE/JSkjqPDOLYO0gQYq17biz86kYzFJett+r30LAgZkKvB3g7jauQ3kZTAQt5ifwredgkizc0j9oP8lGSP2tfgqL5Qrij4qzae5385IOqJzIHTzqhTthf/AIi/0Ctl2mScJd/6R/mFYJOGOAGI0O2o5+QM1z+nwxlF7Gk5tPgsR2tvfbT+mj/5vvdbZ9n51BfCEKSFJgbDn5UxYss8zbZIjfnPT651v9PD4I9yRtOH4rE3ba3QbUMJAyt1I+15VU8S7UXrN1rbLaJWNYbmAftedafs/bjDWh0B/wAxrmvba+wx10AiBk6fw1rmxYlKbT65LnOopovF7a3PsWv8X+qj/wCdrn8NP8X41iVxD9V9w/CibEN/L7h+FdX0sDP3WdG4V2ku4gsLdpPCATLEb+w1fcKuXmuftERFA5MWJPuECsj+jWW74mNl2H/VW0xyDubx5i1cg9PAdQa5lj1zaro02uNlytAiuErj7oE9/dA6944++pFnHX22xN6OveXI+dd1GFnU+N37q6W2W2oiWgE+e4gfGsfxEloLXA+UGRJGYTEGI6a1RJxJtR+tXXbp3jsPdmipGFwl66hZfEiEgyQCSBmPnsazrmyW76Q7wu+FIDqskgHeIEQNyZ0Gs/hWy4bxi0qlGtlcs6+kDHJZAPXQxtWCx6G0VUMYyydZhpIO2kwBqaipiiDIuNtGnIdIqq+SdmjsVi4GEhYkeW3LaivXlXVmA9dch/4pdUSt+5tGhIIA1A9U8vxpt+MYm5CG9cuGCd425yBOn41SRW5tuMX7Ny8pLqVVgWGmuhEjqNvjVlj8LavJC5WA3AO67cuYrlGIs3ASWMGR13iedKwnEr9skpcYRppGgnl7aYtjZJwlbPeW8s+GR5gmIb3x7DVRdx1vDMFtrnjfLoDH2vL8+lVQ41icxdrpzdYXYGdo2kD6mo/A8WcRiMlwwjBmZsqgZlBK67DX4UtU/A9i7Xtpc6e4gD2CNKFTG4dw/nd1/wCoUKqkFsyDW71uEu22CkwMylSRpqG0M7UnDYYF5IAk7x91b/B//UQYQgbA6kTz25/dVta4Ov2LX9I/Cud5Wuomigu7M9g7qm6voz3ych9o/wAu/nXSrp1NUC8KghgqSCDsJkGem9K4hjzcJFvvUbb91R7SdvgdqaybLqgfBm+35U4myrAn9m20RuPSk+VU+GS0hKkLlI3UmZ00jaonFOKuzEN4ztLQSegJ1n1Co1tGJ2yg7wIj31Mm5GLdsvrV2zBNtiC8aHU6fXKncpaQhJE6kSfOI2qBhMOoWW5JGwHMbjy6z5U9w9TldjIGwy6+ICNTv5T7KnUdDi2SrSF1DHdddPOPkan2beaQwJjkR6MfKkXbhzycxI5GCCB0G+n3+9dtgQco1mSDodtZ0oXDsB0YIESBV92btZUf/rH+WqnD3p5KNfSYcvVWosYXu1MxqQdNtjVSyXFqvBrj5ZX9qrebB3lkiUiR6xWMwF8KUzSAsaz0FdAxVtWQqwBBiQeeoqKnC7H8NK58WfTg2lCytwCd9bW4EfxiYYeIawcwE6zSrnD2+w39JrQcLRLbZEUKpBgDrM/jUq5jGF5bXdXCrIWNwRkUgxkJ3zGu2ORTVroxcGuGQOGpltqpERPzNcp7cYe6cfeZbdxh4IYIxGltdiBG9deuHU+uhicY1qy1xLb3SCItpqxlgNJ6TJ8ga5sMv9R/qXNfajgaWrgEtbccySrD1kyKQ716J4hD2biuJV0KkTycZY+NY89jMD/B/wAdz/VXRPPGDpkKDfRUfoxn9tP8n/lW4xX9je/+N/8AKarOFcMtYdmFpMoYCdSdjpuT1q2VMyuv2kI94iuWORSy7I1cajRzPg/DA1uXJOpGvs0jWgyxmC2WIUkT4Rt5VvMPwJbawqECZ9KdaqOIdnrFvNee3qDmLTznce2uj3V207/8M3H4ZmltowkLrHu2+vZU3hWOW1bcMG8RbKYP2Y99V2Ix0kyQQdenPT90Rt6qQHkekY6jqd561ZjsScewunOf3Rl/xFj/AJvhUBEtkHUdPw9lI7wFdCdDuTuKO3J8UQWG8dfL76rYTkQ14NcBWSkSDozHboI13q07KYUjEnMP3HB/pqG9ptYkgbkDQT5+fXzpm3xE27meWVgCognzHt3ose3kuu2HdocojPmBgb5cvyn5VlFWTq3s3pWPxTPcLP4id/r62qNhrZZ5IMDVokgD3adaPAnyO3r3hI+1oNNqe7L4dWxVq3cY5CG9+Uke80i4iSoJ0B1Pl+O/vo7lrK6bwdjsYj69lNMZrL3ZQZjF73xRVR/8edPDnOnUa666++hVWOkI4dxG7bP7MtIIMAgA/wDbzFdK7O4i5csq930iTyjTkfbvp1riCvctkXFYgzofP2irS12sxwEDFOB/02/9NY6eQjwdxuXggzGY8hWR7T40klLVrU+k8SesT7jr1FRv0e8Yv31vd/cNzKUyyFESGnYDoKmYjFObN8s8lblwLMaAbAeqpmqLq0ZAIwEMsdSI98EffTmCMuPFAOxYgD3k6c6iXb91lBnUIJ2EsSJn/aoYuXc8Fpg9By3FQufJnqjQ4a4MxBbUeqCIOuaNoB1PSpGEgAQ4ILGIM6kltOuutUPeMpzaxrK7QDsD1p7C3ZaAvgHogmCJGvi6+dAJGhsOSwcZhHiJGXaSDrtqRtrvVlhrdy6WV15b6CNdNOfX2VjLPH7tqcoEzzBbYnlPKN6es9rsQNVFoaAegdht+9VKDZceDo3CsDctjS5z00ER0P5VaYq8QAPh9Cud8F7X4q5ftW27vK9xFMJBhmAMGelbbiOIZcTZtiMjpcY6ayhtga+pzSnFxi7NI1ZKsOXaMkj1+fnFPphbWdrgtnPGVjmGg3j0opuxqSJjT7xT+Hw8FiToeXl0mr9PijOO1IJz1dC0VJDBDI1BDKd9PtU82JHSPav+qmMqhS4JyxJIJOm5Ij7qjLcQmMrxuzHQKcoaGPqYeVdCwJdIW8W+WxbkydI1+0n+ry+FP4a6ANfmCPfNRGxdo3GtmRr6RMAtAOUc5hxHtpCXsORmS4GDGPCwJkkCPew9/qpL0yi7SHvFrl/sWd1lYQ09dKg47CWb1t7bhyjghoJGh/mG1NLjbC3Ht5yCkSWICgxMDnMA/wBJqTZVLgGQkqJ19RiB5ae7yNEvTrtoW8erG0wyqFCSAFjUjYR91HhrsPBBmPL8aeKLJOun3bfH5VX4jFZLtpQoPeXMhM+iMjtPn6Ee2sJ4Ywaa7sansqTLgv5ViO0z4m74SirbA18Wra7noKd7Y9rrmDvLaS0rhrYeWYjdmEQB/L8ax3EO2d26pU20UEQYJP1pVOLM3TGcM6kjXqNZA0Px9RqbiHRQArlidyAN/KOVUjcRuZAoVVHQDU+uajXMTcO7SDrpA1P1tRRm0kWBxXh0AEbzm9416UQckwVLCZETA8+W9V4x1wiDqI1IGvvpxLrDYweeuonp+VFUC4Lp7JIBPhGmmukdetRL1tQZDAAAztMnnVVi+IkgDU6a6nXXnS7NkvbLgEDnr02odoqk/A3iJJ8J06/L5UEt6kMxmNwTJjqJ8qdyqWRAZEmR6gd51OtRMdigHZSgMHcny9VHL6HqTkSBEarJMgDbn6o1qNaD3LqZHEk6azzgZl5/eKRgL0pe0iLRy6zEHl03odnMSe9BLlQBJbKGECNCI0B69TVpNdio3FrgSEDPlLczl3NCl/8AFrfVv6W/ChQPg5ot5nXxTEgTA67H2xFSe5CQCNTtW27G8MvWs1xLdl7BSFa8qyC2XNcjU5cuaZjQLWb4u1t2ZFAkO0MNFAB1ydQRsOelNpJClxwhjhXFb1m4GtEk6FlGoYdCI2/HlWoxuKm3cc3AFNx2C9ScvKdRruRA61kuF2G7xUtzcd5VVVTJkTtG+ns9lbbjnBsTcts9zDtbNtSYQIFVCM2QQRmIyjUSSd96nRSXAR5M5iLjZQBoMvKNJ5FvdUPC40rcRAoDNAJMkmfPXf1abzT+IwqhfTe3nthke4zS4Y5QsclDDNtOq8qfThPeG2oy2riKAjCf2kH02OXSAJmCdRWXtUuTRQY/jAuVhctkMRKn0tFEkHn9b70fDMOzRIA0XUbajMFncaGpuGw1u5cuW+9T+zKPcK5jlCElhJEQ5IO0gT6n+F4XIHusVFpQgNx4BUZYVlQywLkERuYij2WkFRbMtdxIV2Q28xBjTQEjQ+cR86eweGOQuykAEAgmDtm6TEA6wanNZt3GDkkIX1yGHJYkZVhNNdTmJMAEaa1Z8Q4JcwvdhjbhgWBQs5YBspi4x8Phyk7jx+2tIrUpQ+Cq4Xhku3ECXO6MzLZlIA5oQQSZBAOmxrdY7A4lDh8V35NtFRbiLrClmJeTJfP4F0g85rJcN4ci31W3cBW4oYFrZbIFJLKG/lMGRv8AGrPGC/ctzcY90n9ncK5UIVZQqQAxBbQTp5Hc6TjFrlfgUbUqDPae7lDd4bbO0gBDHdlfSXMuuVtI5lDtrVlh+0NxreR7ilriKiIQCWcnK4DHeRIzNA8S8wZyd2yCst6MsZYwVzvmzW1jUkyMszqNNZqS/BSUt3bd5LiL+0AXL3ikOAFIJyg+LXMIkEVONappdF5VHj5NJjsPdvW7FuzdCWVVg2V0RmuWj4hkJDNufBOWASd1ql4Pir6veW2HNy+ELOwLEnaPGCpB9HUAbidAKdwFlrIUMYzM1w5oYnMAd10EETzpm9iGwgN1nUsLngVT6QeTmfXUwN+pnlVyUulw/AoKLi5P+CXc445m6y2hcFqHVlMC6sHMFJ0OXw85MHlFVnZW73hs4fvGB70MHLEGAGYrnAkkwIBJgqeVN9nsKuIuNYtsEfI1xA4LB2WNGJaRrEnXZo6mVieAXcHiBcym7k/afsrdySoPjKrLQwkCZIEzpVuVd2Z1fKovLvA8XbFu1buYe5cMs6libpA0BV3Jz7mSVECR509xbj+Js3LeHt2ltkMqk5c4J7vMQIbm2o2OXeDpU3iVk37iXVc2oSCR6UiSuv8A3nSevtxXaHFX7mKYq03A65XtnKJVcmVZJgmI1O/xGpdci+3t0TMX2lxaX7dwQ6pbhrasVV38WpUwAw0BOsFSJOtEnGnjDYrFXszW71wNbtKP2ZKNlzrmAPo6aaDNqdqbx3AMUiNcuK37NR3hz+kkE6EHXLJmDrJ3FVlrhrX0U55FtwtzM4CjMcoUmNywygid5JG9ZpJu2aOMVG4ljZ4diMbeK3riXbtpVVw2VIQsSWlBlIGbYGdarezvAGxlxu7cd0rQzEjnMFRoSBpp6usVaYBLmBdmy217xcsBjcJRwHkgHQKIGbb1xNJ4FwfGW7E2u8VHYMMrogYKQhJuA5vSExzCbGa0eqV8mTUvwPjsaltw+JuAWkIJKEeOZgAMPCdpmdCai9p8Laa4e5t3EKMMzXIAuKQCGQAAeGYPrFX+EwmMfCXVUubpJOVnBZlBUFQx2BC6dJ5cq67hcVZY2byE5xmlT3gIgDNOmViYkQNAI5Guably49G2OGKSqXfJj7NktbZ82ihvCANgNp++qpLmdgo0E+2t4nDG7m53ilWIH7MKZyschIkTOx3PP11T4LstcttluJcV8oZZRozTAXQGZqlx2ZrHfRRXMOd6tMHiMtk2ym+sg/XSri1w4AOt1mW1JBddRnUbZZE6/vHkOWtM8N7NPiGUWyCSCVzz3ZUKdSdYJfSOmsVM1tSRTxSSsg4h7SOj7KAZ05kaDSqPGsHuOygwTpIjl+Va3tT2XfD3rYLpcV9gvhIyASCPdqCd+VRMJwS/fts6WzlLQpDAEETMjcgbfjWmPG132ZuXHLRScOWBdHW2w+VV2AxT2gWQwdpidKv8dwu9hbhS8FAK6FWBziQDlJjXkREiaqsMltc+cHLMqu8xyMUTTjwxxpqw/wDjd77Z9woqjY1PG2SVXkI20o6NWKjolu1dt2pmQy+MyYGbQwOgmPZWXxypauBbZXQg5mzEGT6JGXQg8wNmqJwNyO7QuyrmzGDpETqkwZg+urvjN5HVVDNrcXXu0UEzA2bqacvskjWEN4t/AOFYpbGJW7Z7u7eCm2yxcUB3ZLYdfAAdSQdf3tBXS+H3LgCF7kkDxzuXOp5+j0HlXL7twWz3i30ZkuAIsW9Ha6jkSLjEkZToV5cqaxPEzdVrtwk3ELSyypImYMHpA05Ac9a2g65MH8M6H2rxKtbYOltkTLynwPJOnWVHuqLZt3MRhCyEfulFQ5QwWDkbQyCB6JkeVY25xRhZuKhBzKCSwzf2ZBG555uc/Otb2TxiLYtLnCM4lOUkRMev7zVuCk0n1/crHk0jKu3X6IO9iBZwii9h9HQrkJK5lYxkJWIEtEDSNNqyfG+7uJdCk2wttCczOwd8zZUXXKIkgb6t5Gtd20xJNtSOToq7HViZHwWqDD3bmW6AoK92bdxSDz2Wf3Z5HeRWM4NT+OCoSSx/LbZS9nbJu3EJuBVR7eYMYzBmyn2gTW64z2mW4tnu7jMylmdbZKlE0Esf3lUT4NQQdQdBXOcUBbuGRAzBYGm6kg+sOAfODUzhAZb13UKIUEebKrEAchJqYraVGmSEoQt9J/ybTC8WREU5Aw9FGkLCm3PpcoiIj74mcTvq3CmwsxcTKmQbgK4Nuegbwa/zVy7BBmuXIRSUt3WMqD/Z2yc2vPOAfX7qvOyHBTibZui5Dd73a2wNWKoHLlswGkjz0HlWklaszhKmi+fs+cMLWIxpLW4hlty8NBOUrEFiJJMQMm+1WzdmmZ3u4QqqwCqnKjMRAIkACBEa8x5VU9v+PXVvHBhlyLlfMBBYkTGpMRm5b60nh/anHYnw2ypVf7QoFViA0DK3Vj0G07UnJRi76E4t0/JcHsdfu+F7iLEnK3jD+FTEgDSSQZnaINVHa3sZfBsqGR88pmEgIwQt4zGieE+L4TE23/MlzCG42IANxkBtifCQEUEqY0OcGRAPvFRuKdre8K3FJyLbcsoJgkLuftRqdRUuXkcVLVpCeF8AfC4i1iSltVtobb5WJLlvCHGm0nU6ctOm2tcPf9bF/MMhtZDBk5gdh/Jvp11rllntrecXVcqzZGa1CgeNVZgT5EAgqakYn9JmJUuiWbRRWYNJaTqdQQwj1AGPOn+GZx3rmv0NJwfh169aQNcNt09JSokBTlynUhjK7nTQ1T8G7FveOJBdSEuEJnSRcfKHkySAozid9Z6VW4f9IbjOy20DuTmXw+iTJ1iCNTvrqasuE9v+67x8itaa4Mo2KMbS+exZGpudX+R1dfg2nE+Hu1oYZTBCL4joGmRkO+hymfI+dU3Zvsg1pb9q+wy3O7ZcmuViXgEH7Jg9DA8xVV//AKAl+5bfJ3ZSZDANvpOh1MkDTz66NPxu9dNu+LmXxScpyju1YgNEkE6Hf7RB6Ulz0i23FVZf8T7CW7lxHOIdAEVbhgeKAFQpOiHQzM7jSpV7hjYTBtbu4gPD5lJ8MLAAXUkkyJ06msfxrjN67YNq4RcLuCuYLlIQgqRAG4bnOtT72OvcRTuGAS2iFiRJl1YILbdBOpadQYjnVyxOq8UZrIpfa2Ludo0w963ccMVbw+GDGhOuv1FSE41bv3Dct5sqyBIgkwpnnAk1kO1nZz9XwqXEYlwyC6DBClkIGVtJXNoJ11HWoXY2+/eXFLHKAvh5SYBP+EVyeoi4YWi4UpcHROC3i9+9cJBuFBBiAFltvcAI++q9uIPbOKDXM105CGddwSdADpoNAOcc6f7MPL4gkTDpbGgI8ILfNp91V2OQKcQ4P/qq8HXVcx33jxAx5VOKTqLf4O3D900q+CNxDFsxKF1IXKp1gu7FlYEzLAKcu2+Y/vCn+N465btnu3gwoUJInxbaayZ+FZ9rkXLSZAZdSWJ2AYEadcwBnzNS+N4l89sW1uNDDMEBJAIM7AwY51j6mEvqoteOfwdnqMTjuv8AOSZjONi8+ZraFVUqswTqVzEncZo26AVbdl8VPegJlSQVVRouYtzHkPjWFwloqrgrDFyWDA6wRByyI/M+yHxO5et3DcS5cRSQrFHZZbfUA1145tZbbOX1OP8A2qjql1yW36QL4a9aVSSUV8418OZxAOnlVJwBx+sq9yAoiSVEDVRJEQNOcbmTzrQdk8RcTvSGnvZMnU5rfnvrmPP92ne21zPZZyFzZUG4BjNPhE6iT51tPJtJs86EUo1+CHjMdhGuOXv3FbMQQLWaIMCW70SYGpjed96KsbmoVr9Q/gjRG4w/CWS5aZbqsbZVfDEwpO3UgNrPStTlMeJ2PrNUHBLV0MxuWsgiF9BpJPPWQBudOURWtuWMMbeUZ88elqdR6yN/VpXm5cjbqzvUcPs2pNS54KHizqlm5lPiiB4upAPltNZHCqEtvm5qzEToSUzD7q2uJ4OtwZSxjqI++aabs1aIynrM89oienlVY8yjGn+Thcm3yzL8LwTXLZW3DM5ygSOYgTO2vyqbxu0gt9/auqTb0KqwZdX/AHSNN29REVqMNw7ugRbbKCpHP94EEjzgnWqjDdisOHBuFnt87YYr/iAkVu/WRkkmukTGKTbvsZw3aFitq7c1CksAYJXTKW1gMQAYmo47dpbZkTDZU7zNmDMS5B0L22YpPnrsIHMXd/snYcAeLIvorMwOmaNfbTFrsNhVIP7QwZEv+EVE/VxlwOH22/NmcXFrcKtdRGdna4BqoDMzGMoEFQzSBI2A2mpuFRu77wGWe+UMxrvrt0HsrQWuyeEVi4tyxM6ux1mds0b61ZW+HWVAAtoIMiFG/X1+dRj9TGDurOj1HqPdjqlXX7Gd4Xw1M1+7nPjFy3CsohARnLFgfSCzMQMvnVx2bGHwmewLy3GBYgsqhYuKoOQgnWFUEaejU8YW39hfcKWLYHKp+pfJjuqVIyvHms3ne6ynOihciz+0C6ArAzA5QOZmKs+z/DcPaLXLV+4rsoUzBSN4yEA+lrMzoPObhRSwAd/hT+pTVUOM/kznaRLuKti2UBK5gpUnnoZLARPl9mq4cFu5GXux4kcasNCV02MHUnXTStqMvlR5B9GpeVsueTZ8JIwljsXcU5hcV4GUDLlkMplpJ0gmI5xOm1RcX2Lvvca4FUSxIGYdZrpFuNqegVpGbfJw5MsoSo5W/YfE6ZVUbHVhMwOk/vA++p9zsZdZFXRYKEwQfRRwdNNy1dGgUMoqnKyPqZHMrHY/EKjgKuY5YMjQiZHPy1j2VKsYXGIotnDscixmRkAOpOQhiDGsSNRO9dCiiKA0Kco3RUfVf9kYTDYXEi3F3D5jOkEDKsRlGsACI0g686F3C4gWwLNtrbDWMxIYzMPMAyQIJ2yiOtbO5ZI9VNA1MvVTSpm8XF/cjF37WOvp3N1MltiM7BgzMQQVB8WqgidTpT/DeAXLJJVlaSJzDXTofZWroETWE8rmqfRezKvBtctBgLaHNcNxjmMmVAgCNNAKg4pb1wujIgRrmfNmM5dshXL/ADEzPL1VfFKbNulCWtUbQ9RKDTXgxfFMPcR7NxbZcIQXVZnwmY1Ee6qTj+PD3M2qsdWGoI5AR6h8a6aUpl8Op3UE+YrV5dpbNcmuT12TImpVzX7HL7PesZljoZjTUjwj3gVYXkc4e6rBm1QgnfQDN9/vremwv2R7hTLYdfs0/c56OaWWUuG3/Uy/Z+V7pHlctxjrp4WQ6+rXepHau6v6uwHML6x4xy5VdvhUPIVHfBoQBAgbCm8qfglM5lNCugf8Gtfw09woVXvINjRg+dPZgOc+z86bU+31fnTi68vgK49QoUr+UUYbpRSKCmjUVDit5UtfaaSYoL57UajoXP1rSdaUynrTyPpE6UaMerGQ30KMKelOl6Qy++hwE4gBPSllvrSkkfU/UUYXy+P5UqoKDnyoE+Q99JjypXh6EUtmLkEc4Hr0pSiOVMsfd50DNOxinZhqoBI2BMD2mD8qQMTf/h2v7xv9FKUiNRHto0MaxPrMCnGbj0RLHGTthW8ReO6Wo/8AkYfNNab/AFy7O1oD1sfjp8qce5P7oHvpvMabyy+SHij8BvirvLux6wx+8U093EE6XLQH/wAbk/8A9KeV+pH101oi1HuP5D24/Aznv87q+y3HzY0Ez7uyn1Jl9/iI+FPZjRMRzPupOTfktQS5SEZ55UCfr6FBm6TSC3lSsoOaS00Tn1j66Ukvy+vfRwSGW05er60pPeeQps68h7/yofH3/hTTKAzjpSCKVy0j686bzeo1VgJcCmnEc6cZh5UlmncRRYDUDz+vZQos46/ChRZJNRqdUx51HU+qlqw6zSLJC68qcDdY+FMK/wBRNKzc9flRYWPK/SjLcjFMhyR1pQ2pbBsxzPTivTLabiKJXnY/XvpOQrZIz+oeuiNymCPqPzp1fZRbCxxd9qPMR9CmkJ2n46e+jdx1BPvj1mIpXwMUWk9T7KdRepimFI+ppTdJoQkLcgf7URuH/amyT66EjaT7DQMWx6zRr6/nSMmunLlI+GtEG129/wCRoAW4FJ0pLT1oFhzpCoI+VGdOXupIE7UtRr0+NCJCVZ6+4UTCPzpbJ5mmm212+PzoK4FFqbJO9AkHlSRPnTATpH502U84p1vrSKQX9XtoFQiD9RFE1KI6fXsiiZx1p0goZIHX69tAr019RpcA9PnTW3UfCmIbdfo0y7xUhj1BP11FMt0G/qpUOhrMOvwoUMnq9350dHIiej6aCPPelL7aZRx5eylG6fYOtUUSCY3omfT8/wAKZRusU4HX2+WlIBQYb5fiflSlcnZfr500kHz+NKDAaae+kA8z6bUIJ5H30gsNNPbNKU8tPfRQDiCKcDx0ppSOuvx+WtLIkSSAOp0oBINyeUUev0CaSwnz+NKGn5GPgdfZRQwECYJH17aUEHX2UnvABtFEXO4I+dFBQsKR/tQE8z99EpnmKWSFGo+E/wC9PUKB7SKJ38zSXuzBBHwH3UkXR09vKlQChHKPbROY6UoXjrO3Q7fKmyzDXbyBptcAwg/P5UWp/wB6NruYazpSHAj/AGqdSWgNIOp+vfRZejURI+pNBXnYGPZRQqBJ2k+rWlievsIPzpOvSiJI6R7J+dOikBkPT400T5x8aNr3KfZFBro5H4RRwAkr9RTbL66DP5+6kF/99fxo4JCJ/mPu+6jbQbyfd99ExG1NAH10AKmm3PWffRh+o+VNuRy/CmAuB9TR1Fzjr8qFMCZmI6fEn8qdLGOVChVFBW3kwd6ePqWOgFChQCFEjpRXCOQ9xihQqGA7afovvNKuXfZ8aFCh9AhAuxJMgfXSlLeJG9HQoQIBJny6zSpPL20KFAwNdjRifnSlOlChQA2WjrSlcHmaFChdgOIuuwNB7PPYUKFU+gE9xzHx/KnO8A0IHxNChQuh+Bg3I56cvb5UEXMNTQoVKEGbIEak+37qQ1vp1oUKdIQyXAI3pXeiaFCpQBNcA6e6kkiJgffR0KGDGifo01njehQoJAw93lptTZuiI5fXlQoUwGmYfQpBMakUKFAAzjofcKFChTGf/9k="
            alt="First slide"
          ></img>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            class="d-block w-100"
            alt="First slide"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1IgGIO9rque7KBs93Tnxt51wfnV-gWKqUbPsytKLn7CHDWvowJ2wMd8sG8Qu6Ghv2lsQ&usqp=CAU" alt="Broken"
          ></img>
        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <img
            class="d-block w-100"
            alt="First slide"
            src="https://www.sriramachandra.edu.in/university/images/alumni/about_alumni/proud-alu.jpg" alt="Broken"
          ></img>
        </Carousel.Item>

      </Carousel>
              <div className="Header-Content">
              <img src={Alumni_logo} alt="" />
              <div className="AlumniHeader-Row">
              <span className='header-text-1'>Once a senior and mentor <br/>Now an Inspiration</span>
              <span className='header-Main-text'>Know Your Alumni</span>
              </div>
              </div>
         </div>
         <div className="Alumni-BTW-Body">
         
             <span className="Alumni-Al-Text"></span>



             <div className="Filter-Alumni"   onClick={()=>{
                const xy= document.getElementById("SearchHolderAlumni");
                xy.classList.add("VisibleNow");
             }} >Filter Results</div>


                <div id="SearchHolderAlumni"  className="AlumniSearchHolder">
                <FormControl >
        <InputLabel id="demo-simple-select-label"    sx={{width:'600px',display:'flex',flexFlow:'row wrap',alignItems:'center',justifyContent:'space-around'}}   >Collage</InputLabel>
        <Select
        sx={{width:'250px'}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={CollageName}
          label="CollageName"
          onChange={(e)=>{setCollageName(e.target.value); filterArray.push()}}
          
        >
          {CollageNames.map((Collage,key)=>{
              return (
                  <MenuItem key={key} value={Collage}>{Collage}</MenuItem>
              )
          })
          

}
        </Select>
        </FormControl>
        <FormControl >
        <InputLabel id="demo-simple-select-label"    sx={{width:'600px',display:'flex',flexFlow:'row wrap',alignItems:'center',justifyContent:'space-around'}}   >Branch</InputLabel>
        <Select
        sx={{width:'250px'}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={BranchName}
          label="BranchName"
          onChange={(e)=>{setBranchName(e.target.value)}}
          
        >
          {BranchNames.map((Branch,key)=>{
              return (
                  <MenuItem key={key} value={Branch}>{Branch}</MenuItem>
              )
          })
          

}
        </Select>
        </FormControl>
        <FormControl>
        <InputLabel id="demo-simple-select-label"    sx={{width:'600px',display:'flex',flexFlow:'row wrap',alignItems:'center',justifyContent:'space-around'}}   >Pass Out Year</InputLabel>
        <Select
        sx={{width:'250px'}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={PassOutYear}
          label="PassOutYear"
          onChange={(e)=>{setPassOutYear(e.target.value)}}
          
        >
          {PassOutYears.map((Year,key)=>{
              return (
                  <MenuItem key={key} value={Year}>{Year}</MenuItem>
              )
          })
          

}
        </Select>
        </FormControl>

     <div className="Search"></div>
     
             </div>
             </div>
             <Box  
              className='Alumni-Multi-Box'  
              autoComplete="off"
              sx={{ width:'100%',      
               display:'flex',
               flexFlow:'row wrap', 
               alignItems:'center', 
               justifyContent:'space-around',
               flex:'1' ,
               marginTop:'8vh'
               }}>
                {/* Map cards after retrieving data*/}
                 
                 <AlumniCard  Alumni={Alumni} />
                     
                 <AlumniCard  Alumni={Alumni} />
                 <AlumniCard  Alumni={Alumni} />
                 <AlumniCard  Alumni={Alumni} />
                 <AlumniCard  Alumni={Alumni} />

                

         </Box>
        </div> 
    );
   
};

export default Alumni;






