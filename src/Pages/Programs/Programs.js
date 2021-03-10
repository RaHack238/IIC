import React, {useState, useEffect} from 'react'
import './Programs.css'
import NavBar from '../../Components/Navbar/Navbar'
import iitlogo from '../../Components/Home/assets/iitgoalogo.svg';
import iiclogo from '../../Components/Home/assets/iiclogo.svg';
import ideaFunnel from '../../Components/vectors/ideaFunnel2.svg';
import igniteIcon from '../../Components/vectors/mic2.svg';
import aeiEPicon from '../../Components/vectors/leadership2.svg';
import startuplabs from '../../Components/vectors/startuplab2.svg';
import nextBlue from './right_blue.png';
import prevBlue from './left_blue.png';
import nextOrange from './right_orange.png';
import prevOrange from './left_orange.png';

import { Carousel } from 'react-bootstrap';
function Programs() {
    
    const [isIdeaFunnelShown, setIsideaFunnelShown] = useState(false);
    const [isIgniteShown, setIsigniteShown] = useState(false);
    const [isAeiEPShown , setIsaeiEPShown] = useState(false);
    const [isStartupLabShown, setIsstartupLabShown] = useState(false);
    const [isCardShown, setIsCardShown] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const mediaMatch = window.matchMedia('(max-width: 720px)');
	const [mobile, setMobile] = useState(mediaMatch.matches);

	useEffect(() => {
		const handler = (e) => setMobile(e.matches);
		mediaMatch.addListener(handler);
		return () => mediaMatch.removeListener(handler);
	});
    const handleIdeaFunnel = () => {
        if(mobile) {
            setIsCardShown(!isCardShown);
        }else{
            setIsideaFunnelShown(!isIdeaFunnelShown);
            setIsCardShown(false);
        }
        
    }
    const handleIgnite= () => {
        if(mobile) {
            setIsCardShown(!isCardShown);
        }else{
            setIsigniteShown(!isIgniteShown);
            setIsCardShown(false);
        }
        
    }
    const handleAeiEP= () => {
        if(mobile) {
            setIsCardShown(!isCardShown);
        }else{
            setIsaeiEPShown(!isAeiEPShown);
            setIsCardShown(false);
        }
       
    }
    const handleStartupLabs = () => {
        if(mobile) {
            setIsCardShown(!isCardShown);
        }else{
            setIsstartupLabShown(!isStartupLabShown);
            setIsCardShown(false);
        }
       
    }
    const handleActiveIndex = (index) => {
        
        setActiveIndex(index);
    }
    
    

    const Card1 = () => {
        return (
            <div className="card_1" style={{ width: mobile ? '' : '25vw'}} >
                <div className="idea_funnel"  style={{ height: mobile ? (  'auto' ) : (isIdeaFunnelShown ? '120%' : '18vw'), margin: mobile ? '0px': '0px 0px 0px 10px'}}>
                    <div className="info_card_header" >
                        <div className="icon"  id= "icons" style={{  width: mobile ? ('50vw') : (isIdeaFunnelShown ? '12vw' :  '20vw'), height: mobile ? ('20vh') : (isIdeaFunnelShown ? '10vw' : '14vw'),}}>
                            <img src ={ideaFunnel} alt="Idea Funnel"  onClick=  {handleIdeaFunnel} style={{ height: '100%', width: '100%', objectFit: 'contain'}}/>                                    
                        </div>                            
                        <p style={{color:'var(--dark-blue)', fontSize: mobile ? ('1.5em') :'2vw',fontWeight:'bold', marginTop: mobile ? '' : (isIdeaFunnelShown ? '-16px' : ''), fontFamily: 'Domine-bold'}}>Idea Funnel</p>    
                    </div>
                    <div className="info_card_content" style={{ display:( mobile ? (isCardShown ? 'block' : 'none') : (isIdeaFunnelShown ? 'block' : 'none')), padding: mobile ? '' : '0px 5px', wordWrap: 'break-word' }}>
                        <p style={{color:'var(--dark-blue)',fontWeight:'bold',textAlign: 'center',fontFamily: 'Karla-medium'}} id="info_card_content_text" >Idea Funnel is a continuous tool for idea scouting, validation and facilitation. In order to encourage students to bring forward executable ideas, IIC has set up an online idea consolidation mechanism, details of which are attached.</p>
                        <p style={{color:'var(--dark-blue)',fontWeight:'bold', textAlign: 'center',margin: '0px', fontFamily: 'Karla-medium'}} id="info_card_content_text">Please read the attached IDEA Funnel for details.(Appendix A1).</p>
                        <p style={{color:'var(--dark-blue)',fontWeight:'bold', textAlign: 'center', fontFamily: 'Karla-medium'}} id="info_card_content_text"> Link for the application is: <a href="https://forms.gle/BeZuxVrnXFQXd9nB9" target="_blank">https://forms.gle/BeZuxVrnXFQXd9nB9</a> ( All question details in the appendix)</p>

                    </div>
                </div>
            </div>
        );
    }
    const Card2 = () => {
        return (
            <div className="card_2">
                <div className="ignite"  style={{ height: mobile ? ('auto') : isIgniteShown ? '120%' : '18vw', margin: mobile ? '0px': '0px 0px 0px 10px' }}>
                    <div className="info_card_header">
                        <div className="icon"  id= "icons" style={{  width: mobile ? ('50vw') : isIgniteShown ? '12vw' : '20vw', height: mobile ? ('20vh') : isIgniteShown ? '10vw' : '14vw',}}>
                            <img src ={igniteIcon} alt="Idea Funnel" style={{ height: '100%', width: '100%', objectFit: 'contain'}} id= "icons" onClick={handleIgnite}/>
                        </div>
                        <p style={{color:'var(--orange)', fontSize: mobile ? ('1.5em') : '2vw',fontWeight:'bold', fontFamily: 'Karla-medium'}}>Ignite PoC Grant</p>
                    </div>
                    <div className="info_card_content" style={{display:( mobile ? (isCardShown ? 'block' : 'none') : (isIgniteShown ? 'block' : 'none')), padding: mobile ? '' : '0px 5px' }}>
                        <p style={{color:'var(--orange)',fontWeight:'bold',marginTop: '-0.5vw', textAlign: 'center', fontFamily: 'Karla-medium'}} id="info_card_content_text">POC Grant was developed to enable entrepreneurial spirit and develop a culture of innovation. Interested students work on their idea proposal with faculty and teams to develop a prototype.</p>
                        <p style={{color:'var(--orange)',fontWeight:'bold',marginTop: '-0.5vw', textAlign: 'center', fontFamily: 'Karla-medium'}} id="info_card_content_text"> please read the attached IGNITE document. (Appendix A2).</p>
                    </div>
                </div>
            </div>
        );
    }
    const Card3 = () => {
        return(
            <div className="card_3">
                <div className="aeiEP"  style={{ height: mobile ? ('auto') : (isAeiEPShown ? '120%' : '18vw'), margin: mobile ? '0px': '0px 0px 0px 10px'}}>
                    <div className="info_card_header">
                        <div className="icon"  id= "icons" style={{  width: mobile ? ('50vw') : (isAeiEPShown ? '12vw' : '20vw'), height: mobile ? ('20vh') : (isAeiEPShown ? '10vw' : '14vw'),}}>
                            <img src ={aeiEPicon} alt="Idea Funnel" style={{ height: '100%', width: '100%', objectFit: 'contain'}} onClick={handleAeiEP}/>
                        </div>
                        <p style={{color:'var(--dark-blue)', fontSize: mobile ? ('1.5em') :'2vw',fontWeight:'bold', fontFamily: 'Karla-medium'}}>AeIEP</p>
                    </div>
                    <div className="info_card_content" style={{ display: ( mobile ? (isCardShown ? 'block' : 'none') : (isAeiEPShown ? 'block' : 'none')), padding: mobile ? '' : '0px 5px'}}>
                        <p style={{color:'var(--dark-blue)',fontWeight:'bold', marginTop: '-0.5vw', textAlign: 'center', fontFamily: 'Karla-medium'}} id="info_card_content_text"> This program aims to provide skills required for entrepreneurs through courses, internships and similar programs in collaboration with academic units within IIT Goa and external organisations. AeIEP aims to generate better theoretical understanding of various aspects related to innovation, enterpreneurship, design thinking and creating successful and sustainable businesses.</p>
                    </div>
                </div>
            </div>
        );
    }
    const Card4 = () => {
        return(
            <div className="card_4">
                <div className="startuplabs"  style={{ height:  mobile ? ('auto') : (isStartupLabShown ? '120%' : '18vw'), margin: mobile ? '0px': '0px 10px 0px 10px' }}>
                    <div className="info_card_header">
                        <div className="icon"  id= "icons" style={{  width: mobile ? ('50vw') : (isStartupLabShown ? '12vw' : '20vw'), height: mobile ? ('20vh') : (isStartupLabShown ? '10vw' : '14vw'),}}>
                            <img src ={startuplabs} alt="Idea Funnel" style={{ height: '100%', width: '100%', objectFit: 'contain'}} id= "icons" onClick={handleStartupLabs} />
                        </div>
                        <p style={{color:'var(--orange)', fontSize: mobile ? ('1.5em') :'2vw',fontWeight:'bold', marginTop: mobile ? '' : (isStartupLabShown ? '-16px' : ''), fontFamily: 'Karla-medium'}}>Startup Labs</p>
                    </div>
                    <div className="info_card_content" style={{ display:( mobile ? (isCardShown ? 'block' : 'none') : (isStartupLabShown ? 'block' : 'none')), padding: mobile ? '' : '0px 5px'}}>                      
                        <p style={{color:'var(--orange)',fontWeight:'bold', marginTop: '-0.5vw', textAlign: 'center', fontFamily: 'Karla-medium'}} id="info_card_content_text_startup"> A start-up Lab is a program created as a "Hub" for venture creation. Startup Labs offers a structured, guided, and blended program that takes a student who has a business model and/or an MVP from the stage of a Potential Real Venture to a Real Venture. Eligible students identified through the idea funnel & ignite grant program will get access to the startup lab facilities. </p>
                        <p style={{color:'var(--orange)',fontWeight:'bold', marginTop: '-0.5vw', textAlign: 'center', fontFamily: 'Karla-medium'}} id="info_card_content_text_startup">The program is designed to have fixed weekly goals over an 8-12 week period with the objective for facilitate learning and success.</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="programs" style={{ }}>
            <div className="navbar" style={{display:'flex', flexDirection:'row', height: mobile ? '10vh' : '15vh'}}>
				<div className="logos" style={{flex:'1'}}>
					<img src={iitlogo} alt="iit logo" style={{width:'7vw', marginTop:'0.70vw',marginLeft:'1.5vw',marginRight:'0.8vw'}} />
					<img src={iiclogo} alt="iic logo" style={{width:'14vw', marginTop: '0.70vw'}}/>
				</div>
				<div className="heading" style={{flex:'1', textAlign:'center'}}>
					<h1 style={{color:'var(--orange)', marginTop: mobile ? '' : '-30pxs', fontFamily:' Montserrat'}}>Programs</h1>
				</div>
				<div className="menu" style={{flex:'1'}}>
					<NavBar />
				</div>
			</div>
            
            <p className="pre-incubation" style={{ margin: mobile ? ('') : '-40px 0 80px 0', fontFamily:' Montserrat'}}>Pre-Incubation Support</p>
            
            
                <div className="content_1" style={{ overflowY: mobile ? 'scroll' : ''}}>
                    <div className="accessible" style={{ transition: 'transform 100ms' ,transform: isIdeaFunnelShown ? 'translateY(-6vh)' : ''}}>
                        <p style={{color:'var(--dark-blue)', fontSize: mobile ? '1.5em' :'2em',textAlign: mobile ? 'center' : 'right',fontWeight:'bold', fontFamily:'Domine'}} id="heading_text">Accessible</p>
                        <p style={{ color: 'var(--orange)', fontSize: mobile ? '1em' : '',textAlign: mobile ? 'center' : 'right', fontFamily:'Karla'}} id="content_text">All graduate and undergraduate students can participate</p>
                    </div>
                    <div className="educational" style={{ transition: 'transform 100ms' ,transform: isIgniteShown? 'translateY(-6vh)' : ''}}>
                        <p style={{color:'var(--orange)', fontSize: mobile ? '1.5em' :'2em',fontWeight:'bold', textAlign:'center',fontFamily:'Domine'}} id="heading_text">Educational</p>
                        <p style={{ color: 'var(--dark-blue)',fontSize: mobile ? '1em' : '', textAlign: 'center', fontFamily:'Karla'}}  id="content_text">Designed to fit within the academic experience, the programs help students pursue entrepreneurial ideas along with classwork</p>
                    </div>
                    <div className="personalized" style={{ transition: 'transform 100ms' ,transform: isAeiEPShown ? 'translateY(-6vh)' : ''}}>
                        <p style={{color:'var(--darl-blue)',fontSize: mobile ? '1.5em' :'2em',fontWeight:'bold', textAlign:'center',fontFamily:'Domine'}} id="heading_text">Personalized</p>
                        <p style={{ color: 'var(--orange)', fontSize: mobile ? '1em' : '', textAlign: 'center', fontFamily:'Karla'}} id="content_text">Student teams are matched with mentors and given personalized attention that best support them in moving their ideas forward</p>
                    </div>
                    <div className="practical" style={{ transition: 'transform 100ms' ,transform: isStartupLabShown ? 'translateY(-6vh)' : ''}}>
                        <p style={{color:'var(--orange)', fontSize: mobile ? '1.5em' :'2em',fontWeight:'bold', textAlign: mobile ? 'center' : 'left',fontFamily:'Domine'}} id="heading_text">Practical</p>
                        <p style={{ color: 'var(--dark-blue)', fontSize: mobile ? '1em' : '', textAlign: mobile ? 'center' : 'left', fontFamily:'Karla'}} id="content_text"> Students learn by doing and gain real world experience in moving their ideas forward from concept to creation</p>
                    </div>
                </div>
                {!mobile &&
                <div className="card_content" >
                    <Card1 />
                    <Card2 />
                    <Card3 />
                    <Card4 />                  
                </div>
                }
                
                {mobile && 
                    <div className="card" style={{display: 'flex', flexGrow: '1', justifyContent: 'flex-end',border: 'none', bottom: '0px', width: '100vw',}}>
                        <Carousel onSelect={handleActiveIndex} activeIndex={activeIndex}  interval={null} controls={true} indicators={false} wrap={false} nextIcon={ <img  src={(activeIndex == 0 || activeIndex == 2 )? nextBlue : nextOrange} /> } prevIcon = {<img src={(activeIndex == 1 || activeIndex == 3) ? prevOrange : prevBlue} />}  prevLabel={''} nextLabel={""}>
                            <Carousel.Item >
                                <Card1 />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Card2 />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Card3 />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Card4 />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                }
        </div>
    )
}

export default Programs
