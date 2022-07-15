import React,{useState, useEffect} from 'react';
import '../Applicants/Applicants.css'
import {db} from "../../Base"
import {collection, query, orderBy, onSnapshot, deleteDoc, doc} from "firebase/firestore";
import Footer from '../Footer/Footer';

function Admin() {
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

    const deleteApplicant = async (id) => {
        const userDoc = doc(db, "registration", id)
        await deleteDoc(userDoc)
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
                    <button className='PrevButton' onClick={() => {
                        deleteApplicant(id)
                    }}>Delete</button>
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

export default Admin