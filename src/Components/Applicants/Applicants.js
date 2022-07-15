import React,{useState, useEffect} from 'react';
import './Applicants.css'
import {db} from "../../Base"
import {collection, query, orderBy, onSnapshot} from "firebase/firestore";
import {Link} from 'react-router-dom'
import Footer from '../Footer/Footer';


function Applicants() {
    const [applicant, setApplicant] = useState([])

    
    const userCollectionRef = collection(db, "registration")

    const querry = query(userCollectionRef, orderBy("createdAt", "desc"))

    const getApplicants =  () => {
        onSnapshot(querry, (snapshot) => {
            const r = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setApplicant(r);
        });
    };


    useEffect(() => {
        getApplicants();
    }, []);
  return (
    <>
        <section className='PrevContainer'>
            <h3 className='PrevTitle'>Total Applicants: {applicant.length}</h3>
            <div className='PrevWrapper'>

            {
                applicant.map(({id, avatar, firstname, lastname, email, phone, createdAt }) => (

                <div className='PrevCards' key={id}>
                
                    <img className='PrevImage' src={avatar} alt='Profile'/>
                    <p className='PrevPara'><b>Name:</b> {firstname} {lastname}</p>
                    <p className='PrevPara'><b>Email:</b> {email}</p>
                    <p className='PrevPara'><b>Phone:</b> {phone}</p>
                    <p className='PrevPara'><b>Registered On:</b> {createdAt.toDate().toDateString()}</p>
                    <Link to={`/regdetails/${id}`}><button className='PrevButton'>View</button></Link>
                </div>
            ))
            }

            </div>
        </section>
        <br/>
        <br/>

        <Footer />
    </>
  )
}

export default Applicants