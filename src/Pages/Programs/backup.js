import React, {useState} from 'react'
import './Programs.css'
import NavBar from '../../Components/Navbar/Navbar'
import iitlogo from '../../Components/Home/assets/iitgoalogo.svg';
import iiclogo from '../../Components/Home/assets/iiclogo.svg';
import ideaFunnel from '../../Components/vectors/ideaFunnel2.svg';
import aeiEPicon from '../../Components/vectors/leadership2.svg';
import startuplabs from '../../Components/vectors/startuplab2.svg';
function Programs() {
    console.log("i am in program")
    const [isAccessibleShown, setIsAccessibleShown] = useState(false);
    const [isEducationalShown, setIsEducationalShown] = useState(false);
    const [isPersonalizedShown , setIsPersonalizedShown] = useState(false);
    const [isPracticalShown, setIsPracticalShown] = useState(false);

    const handleAccessible = () => {
        setIsAccessibleShown(!isAccessibleShown);
    }
    const handleEducational = () => {
        setIsEducationalShown(!isEducationalShown);
    }
    const handlePersonalized = () => {
        setIsPersonalizedShown(!isPersonalizedShown);
    }
    const handlePractical = () => {
        setIsPracticalShown(!isPracticalShown);
    }
    return (
        <div className="programs">
            <div className="navbar" style={{display:'flex', flexDirection:'row'}}>
				<div className="logos" style={{flex:'1'}}>
					<img src={iitlogo} alt="iit logo" style={{width:'7vw', marginTop:'0.70vw',marginLeft:'1.5vw',marginRight:'0.8vw'}} />
					<img src={iiclogo} alt="iic logo" style={{width:'14vw', marginTop: '0.70vw'}}/>
				</div>
				<div className="heading" style={{flex:'1', textAlign:'center'}}>
					<h1 style={{color:'var(--orange)'}}>Programs</h1>
				</div>
				<div className="menu" style={{flex:'1'}}>
					<NavBar />
				</div>
			</div>
            <div style={{}}>
                <p className="pre-incubation">Pre-Incubation Support</p>
            </div>
            <div className="content">
                <div className="content_1">
                    <div className="accesible" style={{ transition: 'transform 100ms' ,transform: isAccessibleShown ? 'translateY(-6vh)' : ''}}>
                        <p style={{color:'var(--dark-blue)', fontSize:'2em',fontWeight:'bold', textAlign:'right', }}>Accessible</p>
                        <p style={{ color: 'var(--orange)', fontSize: '1.5em', textAlign: 'right'}}>All graduate and undergraduate students can participate</p>
                    </div>
                    <div className="educational">
                        <p style={{color:'var(--orange)', fontSize:'2em',fontWeight:'bold', textAlign:'center',}}>Educational</p>
                        <p style={{ color: 'var(--dark-blue)', fontSize: '1.5em', textAlign: 'center'}}>Designed to fit within the academic experience, the programs help students pursue entrepreneurial ideas along with classwork</p>
                    </div>
                    <div className="personalized">
                        <p style={{color:'var(--darl-blue)', fontSize:'2em',fontWeight:'bold', textAlign:'center',}}>Personalized</p>
                        <p style={{ color: 'var(--orange)', fontSize: '1.5em', textAlign: 'center'}}>Student teams are matched with mentors and given personalized attention that best support them in moving their ideas forward</p>
                    </div>
                    <div className="practical">
                        <p style={{color:'var(--orange)', fontSize:'2em',fontWeight:'bold', textAlign:'center',}}>Practical</p>
                        <p style={{ color: 'var(--dark-blue)', fontSize: '1.5em', textAlign: 'left'}}> Students learn by doing and gain real world experience in moving their ideas forward from concept to creation</p>
                    </div>
                </div>
                <div className="accessible">
                    <div className="info" style={{ transition: 'transform 100ms' ,transform: isAccessibleShown ? 'translateY(-6vh)' : ''}}>
                        <p style={{color:'var(--dark-blue)', fontSize:'2em',fontWeight:'bold', textAlign:'right', }}>Accessible</p>
                        <p style={{ color: 'var(--orange)', fontSize: '1.5em', textAlign: 'right'}}>All graduate and undergraduate students can participate</p>
                    </div>
                    <div className="info_card" style={{ height: isAccessibleShown ? '70vh' : '20vw'}}>
                        <div className="info_card_header">
                            <img src ={ideaFunnel} alt="Idea Funnel" style={{  width: isAccessibleShown ? '12vw' : '22vw', height: isAccessibleShown ? '10vw' : '17vw', marginTop: isAccessibleShown ? '-1vw' : '-2vw'}} id= "icons" onClick={handleAccessible} />
                            <p style={{color:'var(--dark-blue)', fontSize:'2vw',fontWeight:'bold'}}>Idea Funnel</p>
                        </div>
                        <div className="info_card_content" style={{ display: isAccessibleShown ? 'block' : 'none' }}>
                            <p style={{color:'var(--dark-blue)',fontWeight:'bold',textAlign: 'center',marginTop: '-0.5vw'}}>Idea Funnel is a continuous tool for idea scouting, validation and facilitation. 
                                In order to encourage students to bring forward executable ideas, IIC has set up an online idea consolidation mechanism, details of which are attached.</p>
                            <p style={{color:'var(--dark-blue)',fontWeight:'bold', textAlign: 'center', marginTop: '-0.5vw'}}>Please read the attached IDEA Funnel for details.(Appendix A1)</p>
                            <p style={{color:'var(--dark-blue)',fontWeight:'bold', textAlign: 'center', marginTop: '-0.5vw'}}>Link for the application is</p>
                        </div>
                        
                    </div>
                </div>
                <div className="educational">
                    <div className="info" style={{ transition: 'transform 100ms' ,transform: isEducationalShown? 'translateY(-6vh)' : ''}}>
                        <p style={{color:'var(--orange)', fontSize:'2em',fontWeight:'bold', textAlign:'center',}}>Educational</p>
                        <p style={{ color: 'var(--dark-blue)', fontSize: '1.5em', textAlign: 'center'}}>Designed to fit within the academic experience, the programs help students pursue entrepreneurial ideas along with classwork</p>
                    </div>
                    <div className="info_card" style={{ height: isEducationalShown? '70vh' : '20vw'}}>
                        <div className="info_card_header">
                            <img src ={ideaFunnel} alt="Idea Funnel" style={{  width: isEducationalShown ? '12vw' : '22vw', height: isEducationalShown ? '10vw' : '17vw', marginTop: isEducationalShown ? '-1vw' : '-2vw'}} id= "icons" onClick={handleEducational}/>
                            <p style={{color:'var(--orange)', fontSize:'2vw',fontWeight:'bold'}}>Ignite FDC grant</p>
                        </div>
                        <div className="info_card_content" style={{ display: isEducationalShown ? 'block' : 'none' }}>
                            <p style={{color:'var(--orange)',fontWeight:'bold', marginTop: '-0.5vw', textAlign: 'center'}}>POC Grant was developed to enable entrepreneurial spirit and develop a culture of innovation. Interested students work on their idea proposal with faculty and teams to develop a prototype.</p>
                            <p style={{color:'var(--orange)',fontWeight:'bold', marginTop: '-0.5vw', textAlign: 'center'}}> please read the attached IGNITE document. (Appendix A2)</p>
                        </div>
                    </div>
                </div>

                <div className="personalized">
                    <div className="info" style={{ transition: 'transform 100ms' ,transform: isPersonalizedShown ? 'translateY(-6vh)' : ''}}>
                        <p style={{color:'var(--darl-blue)', fontSize:'2em',fontWeight:'bold', textAlign:'center',}}>Personalized</p>
                        <p style={{ color: 'var(--orange)', fontSize: '1.5em', textAlign: 'center'}}>Student teams are matched with mentors and given personalized attention that best support them in moving their ideas forward</p>
                    </div>
                    <div className="info_card" style={{ height: isPersonalizedShown ? '70vh' : '20vw'}}>
                        <div className="info_card_header">
                            <img src ={aeiEPicon} alt="Idea Funnel" style={{  width: isPersonalizedShown ? '12vw' : '22vw', height: isPersonalizedShown ? '10vw' : '17vw', marginTop: isPersonalizedShown ? '-1vw' : '-2vw'}} id= "icons" onClick={handlePersonalized}/>
                            <p style={{color:'var(--dark-blue)', fontSize:'2vw',fontWeight:'bold'}}>AeIEP</p>
                        </div>
                        <div className="info_card_content" style={{ display: isPersonalizedShown ? 'block' : 'none' }}>
                            <p style={{color:'var(--dark-blue)',fontWeight:'bold',  marginTop: '-0.5vw', textAlign: 'center'}}> This program aims to provide skills required for entrepreneurs through courses, internships and similar programs in collaboration with academic units within IIT Goa and external organisations. AeIEP aims to generate better theoretical understanding</p>
                        </div>
                    </div>
                </div>
                <div className="practical" style={{ transition: 'transform 100ms' ,transform: isPracticalShown ? 'translateY(-6vh)' : ''}}>
                    <div className="info">
                        <p style={{color:'var(--orange)', fontSize:'2em',fontWeight:'bold', textAlign:'center',}}>Practical</p>
                        <p style={{ color: 'var(--dark-blue)', fontSize: '1.5em', textAlign: 'left'}}> Students learn by doing and gain real world experience in moving their ideas forward from concept to creation</p>
                    </div>
                    <div className="info_card" style={{ height: isPracticalShown ? '70vh' : '20vw'}}>
                        <div className="info_card_header">
                            <img src ={startuplabs} alt="Idea Funnel" style={{  width: isPracticalShown ? '12vw' : '22vw', height: isPracticalShown ? '10vw' : '17vw', marginTop: isPracticalShown ? '-1vw' : '-2vw'}} id= "icons" onClick={handlePractical} />
                            <p style={{color:'var(--orange)', fontSize:'2vw',fontWeight:'bold', }}>Startup Labs</p>
                        </div>
                        <div className="info_card_content" style={{ display: isPracticalShown ? 'block' : 'none' }}>
                            <p style={{color:'var(--orange)',fontWeight:'bold', marginTop: '-0.5vw', textAlign: 'center'}}>A start-up Lab is a program created as a “Hub” for venture creation. Start-up Labs offers a structured, guided, and blended program that takes a student who has a business model and/or an MVP from the stage of a Potential Real Venture to a Real Ventu</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Programs
