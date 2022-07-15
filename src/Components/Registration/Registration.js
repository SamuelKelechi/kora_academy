import React,{useState} from 'react';
import './Registration.css';
import {useNavigate} from 'react-router-dom';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import { Switch } from '@mui/material';
import { addDoc, collection, Timestamp} from 'firebase/firestore';
import {getDownloadURL, ref, uploadBytesResumable} from 'firebase/storage';
import { storage, db } from '../../Base';
import { toast } from 'react-toastify';
import Foot from './Foot';



function Registration() {
    const [avatar, setAvatar] = useState('')
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [gender, setGender] = useState('')
    const [occupation, setOccupation] = useState('')
    const [education, setEducation] = useState('')
    const [address, setAddress] = useState('')
    const [state, setState] = useState('')
    const [origin, setOrigin] = useState('')
    const [hobbies, setHobbies] = useState('')
    const [age, setAge] = useState('')
    const [laptop, setLaptop] = useState('')
    const [stack, setStack] = useState('')
    const [whystack, setWhystack] = useState('')
    const [whyconsider, setWhyconsider] = useState('')
    // const [createdAt, setCreatedAt] = useState(Timestamp.now().toDate(),)

    const [display, setDisplay] = useState(false)
    const [progress, setProgress] = useState(0)

    const navigate = useNavigate()

    const handleImage = (e) => {
        if(e.target.files.length !==0)
        {
            setAvatar(URL.createObjectURL(e.target.files[0]))
        }
        // setAvatar({avatar: e.target.files[0]})
    }

    const toggleDisplay = () => {
        setDisplay(!display)
    }

    const CollectionRef = collection(db, "registration")

    const cont =  e => {
        e.preventDefault();
        const storageRef = ref(storage, `/images/${Date.now()}${avatar.name}`);
        const uploadImage = uploadBytesResumable(storageRef, avatar)
        uploadImage.on("state_changed", (snapshot) => {
            const progressPercent = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgress(progressPercent);
        },
        (err)=>{
            console.log(err)
        },
        ()=> {
            getDownloadURL(uploadImage.snapshot.ref)
            .then((url) => {
               addDoc(CollectionRef, {
                avatar: url,
                firstname,
                lastname,
                email,
                phone,
                gender,
                occupation,
                education,
                address,
                state,
                origin,
                hobbies,
                age,
                laptop,
                stack,
                whystack,
                whyconsider,
                createdAt:Timestamp.now().toDate(),
                })
                .then(() => {
                    toast("Submitted Successfully", {type: "success"});
                    setProgress(0);
                })
                .catch(err=>{
                    toast("Error occur while submitting", {type: "error"});
                })
            });
        }
        )
        navigate('/success');
    }

  

  return (
    <>
        <section className='RegContainer'> 
            <div className='HeroTop'>
                Registration for the Kora Academy cohort 1.0 is now open!
            </div> 
            <div className='FormContainer'>
                <form className='FormHolder' onSubmit={cont}>
                    { 
                        ! avatar ? (
                            <PermIdentityOutlinedIcon style={{fontSize:'70px', color:'white', borderRadius:'50%', border:'3px solid white'}}/>
                    ):(
                        <img  src={avatar} alt='profile' style={{height:'90px', width:'90px', borderRadius:'50%'}}/> 
                    )
                    } 
                    

                    <label htmlFor='img' className='ImgInput'>
                            Upload Photo
                        <input id='img' type='file' className='Images'
                                required='required' 
                                accept='image/*' 
                                onChange={handleImage}
                        />
                    </label>

                    <div style={{color:'red', borderRadius:"5px", padding:"3px", marginBottom:'5px', fontWeight:'500'}}>Please, note that all fields are required</div>
                    
                    
                    <input
                        type='text'
                        required 
                        className='inputs' value={firstname}
                        placeholder='Enter First Name'
                        onChange={(e) => {setFirstname(e.target.value)}}
                    />
                    <input
                        type='text'
                        required 
                        className='inputs' value={lastname}
                        placeholder='Enter Last Name'
                        onChange={(e) => {setLastname(e.target.value)}}
                    />
                    <input 
                        type='email'
                        required 
                        className='inputs' value={email}
                        placeholder='Email: e.g jonny@gmail.com'
                        onChange={(e) => {setEmail(e.target.value)}}
                    />
                    <input
                        type='text'
                        required 
                        className='inputs' value={phone}
                        placeholder='Phone: +234 0000 0000 00'
                        onChange={(e) => {setPhone(e.target.value)}}
                    />
                    <input 
                        type='text'
                        required 
                        className='inputs' value={gender}
                        placeholder='Gender'
                        onChange={(e) => {setGender(e.target.value)}}
                    />
                    <input
                        type='text'
                        required 
                        className='inputs' value={occupation}
                        placeholder='Enter Occupation'
                        onChange={(e) => {setOccupation(e.target.value)}}
                    />
                    <input 
                        type='text'
                        required 
                        className='inputs' value={education}
                        placeholder='Enter your highest level of Education'
                        onChange={(e) => {setEducation(e.target.value)}}
                    />
                    <input 
                        type='text'
                        required 
                        className='inputs' value={address}
                        placeholder='Address: Street/City/State'
                        onChange={(e) => {setAddress(e.target.value)}}
                    />
                    <input
                        type='text'
                        required 
                        className='inputs' value={state}
                        placeholder='Enter State of Origin'
                        onChange={(e) => {setState(e.target.value)}}
                    />
                    <input
                        type='text'
                        required 
                        className='inputs' value={origin}
                        placeholder='Enter L.G.A of Origin'
                        onChange={(e) => {setOrigin(e.target.value)}}
                    />
                    <input
                        type='text'
                        required 
                        className='inputs' value={hobbies}
                        placeholder='What are your hobbies'
                        onChange={(e) => {setHobbies(e.target.value)}}
                    />

                    <div className='AgeSelect' onChange={(e) => {setAge(e.target.value)}}>
                        <span className='AgeHold'>Age : </span>
                        <input className='AgeSelector' name='age' value='17-20' type="checkbox" required/> 17-20
                        <input className='AgeSelector' name='age' value='21-25' type="checkbox"/> 21-25
                        <input className='AgeSelector' name='age' value='26-30' type="checkbox"/> 26-30
                        <input className='AgeSelector' name='age' value='31-35' type="checkbox"/> 31-35
                    </div>

                    <div className='LaptopSelect'  onChange={(e) => {setLaptop(e.target.value)}}>
                        <span className='AgeHold'>Do you have a Laptop? : </span>
                        <input className='AgeSelector' name='laptop' value='Yes' type="checkbox" required/> Yes
                        <input className='AgeSelector' name='laptop' value='No' type="checkbox"/> No
                    </div>

                    <div className='StackTitle'>What Stack are you interested in?</div>
                    <div className='StackHolder' onChange={(e) => {setStack(e.target.value)}}>
                        <input className='StackSelector' name='stack' value='Backend Development' type='radio' required/> Backend Development
                        <br/>
                        <br/>
                        <input className='StackSelector' name='stack' value='Frontend Development' type='radio'/> Frontend Development
                        <br/>
                        <br/>
                        <input  className='StackSelector' name='stack' value='Product Design' type='radio'/> Product Design
                    </div>

                    <div className='StackTitle'>Why are you interested in the Stack?</div>
                    <textarea className='StackReason' value={whystack}
                        required 
                        type='text'
                        placeholder='Minimum of 90 words'
                        onChange={(e) => {setWhystack(e.target.value)}}
                    />

                    <div className='StackTitle'>Why should we consider you for this opportunity?</div>
                    <textarea className='StackReason' value={whyconsider}
                        required
                        type='text'
                        placeholder='Minimum of 120 words'
                        onChange={(e) => {setWhyconsider(e.target.value)}}
                    />

                    <div className='DownAgree'>
                        <Switch 
                            style={{color:'#E0A60B'}}
                            onClick={toggleDisplay}
                        />

                        I agree to Kora Academy <span>Terms and conditions</span>
                    </div>

                    <div className='DownSubmit'>
                        {
                         !display ? (
                                <button className='Disable' disabled>
                                    SUBMIT
                                </button>
                        ) :  (
                                <input className='Enable'
                                type='submit' 
                                />
                        )  
                        }
                    </div>


                </form>

            </div>
        </section>
        <Foot />
    </>
  )
}

export default Registration