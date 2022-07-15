import React,{useState, useEffect} from 'react';
import {useParams, Link} from "react-router-dom";
import { db } from '../../Base';
import { getDoc, doc} from "firebase/firestore";
import './Details.css'
import Footer from '../Footer/Footer'



function Details() {
    const {id} = useParams();
    const [getdetails, setGetDetails] = useState([])


    const usersID = doc(db, 'registration', id)

    const FetchData = async () => {
        getDoc(usersID)
        .then((doc) => {
            setGetDetails(doc.data(), doc.id)
        })
    }


    useEffect(() => {
        FetchData(id)
    }, []);
  return (
    <>
        <section className='DetailsContainer'>
            <div className='DetailsWrap'>
                
                <img className='DetailsAvat' src={getdetails.avatar} alt='ProfileImage' />
                <div className='Info'> <b>Name:</b> {getdetails.firstname} {getdetails.lastname}</div>
                <div className='Info'> <b>Email:</b> {getdetails.email}</div>
                <div className='Info'> <b>Phone No:</b> {getdetails.phone}</div>
                <div className='Info'> <b>Gender:</b> {getdetails.gender}</div>
                <div className='Info'> <b>Occupation:</b> {getdetails.occupation}</div>
                <div className='Info'> <b>Education:</b> {getdetails.education}</div>
                <div className='Info'> <b>Address:</b> {getdetails.address}</div>
                <div className='Info'> <b>State:</b> {getdetails.state}</div>
                <div className='Info'> <b>State of Origin:</b> {getdetails.origin}</div>
                <div className='Info'> <b>Hobbies:</b> {getdetails.hobbies}</div>
                <div className='Info'> <b>Age Range:</b> {getdetails.age}</div>
                <div className='Info'> <b>Do You Have A Laptop:</b> {getdetails.laptop}</div>
                <div className='Info'> <b>Preferred Stack:</b> {getdetails.stack}</div>
                <div className='Info'> <b>Why Your Choice of Stack?:</b> {getdetails.whystack}</div>
                <div className='Info'> <b>Why Should We Consider You?:</b> {getdetails.whyconsider}</div>

            </div>
        </section>
        <Footer />
    </>
  )
}

export default Details