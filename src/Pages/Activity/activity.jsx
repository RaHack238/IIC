import {React} from 'react';
import './activity.css';

const Activity = () => {
      return(
            <div className="layout">
                  <div className="activityIcons">

                  </div>
                  <div className="updates">
                        <div style={{display:'flex',flexDirection:'column'}}>
                              <h1 style={{color:'var(--dark-blue)'}}>Updates</h1>
                              <div className="individualUpdates">
                                    <p>Lorem Ipsum</p>
                                    <br style={{color: 'var(--dark-blue)'}} />
                                    <p>Lorem Ipsum</p>
                                    <br style={{color: 'var(--dark-blue)'}} />
                                    <p>Lorem Ipsum</p>
                                    <br style={{color: 'var(--dark-blue)'}} />
                                    <p>Lorem Ipsum</p>
                              </div>
                        </div>
                  </div>
            </div>
      )
}

export default Activity;