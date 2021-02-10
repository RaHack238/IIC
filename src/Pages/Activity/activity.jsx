import { React } from 'react';
import { Table } from 'react-bootstrap';
import './activity.css';
import funnel from './ideaFunnel.svg';
import ignite from './ignite.svg';
import acdprogram from './academicProgram.svg';
import startuplab from './StartupLab.svg';
import visits from './FieldVisit.svg';
import upcevents from './UpcomingEvents.svg';
import incubation from './Incubation.svg';
import mic from './MICActivity.svg';
import talks from './Talks.svg';
import workshops from './Workshops.svg';

const Activity = () => {

      const imgStyle = {
            width: '15vw',
            height:'20vh'
      }

      return(
            <div className="layout">
                  <div className="activityIcons">
                        <Table responsive="sm">
                              <tr>
                                    <td><img src={funnel} alt="idea-funnel" style={imgStyle} /></td>
                                    <td><img src={ignite} alt="ignite" style={imgStyle}  /></td>
                                    <td><img src={acdprogram} alt="acdprogram"  style={imgStyle} /></td>
                                    <td><img src={startuplab} alt="startup-lab" style={imgStyle} /></td>
                              </tr>
                              <tr>
                                    <td><img src={incubation} alt="incubation" style={imgStyle} /></td>
                                    <td><img src={workshops} alt="workshops" style={imgStyle}  /></td>
                                    <td><img src={talks} alt="talks"  style={imgStyle} /></td>
                                    <td><img src={mic} alt="mic-activity" style={imgStyle} /></td>
                              </tr>
                              <tr>
                                    <td><img src={visits} alt="field-visits" style={imgStyle} /></td>
                                    <td><img src={upcevents} alt="upc-events" style={imgStyle}  /></td>
                              </tr>
                        </Table>
                  </div>
                  <div className="updates">
                        <div style={{display:'flex',flexDirection:'column'}}>
                              <h1 style={{color:'var(--dark-blue)'}}>Updates</h1>
                              <div className="individualUpdates">
                                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <br style={{color: 'var(--dark-blue)', borderStyle:'solid'}} />
                                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <br style={{color: 'var(--dark-blue)', borderStyle:'solid'}} />
                                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <br style={{color: 'var(--dark-blue)', borderStyle:'solid'}} />
                                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                              </div>
                        </div>
                  </div>
            </div>
      )
}

export default Activity;