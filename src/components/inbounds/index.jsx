import { useRef } from "react";

import './style.scss';

const INBOUNDS_FIXTURE = [
  {
    itemType: 'danger',
    callStatus: 'inProgress',
    isVoicemail: true,
    date: '4/11/2024 09:51am',
    name: 'Jack Fox',
    badge: 'diamond',
    phone: '(206) 600-7576',
    userStatus: 'success',
    tags: [
      {
        label: 'Pricing',
        active: true,
      },
      {
        label: 'Facial',
      },
    ]
  },
  {
    itemType: 'success',
    callStatus: 'incoming',
    date: '4/11/2024 09:51am',
    name: 'Jack Fox',
    badge: 'new',
    phone: '(206) 600-7576',
    userStatus: 'alert',
    tags: [
      {
        label: 'Pricing',
        active: true,
      },
      {
        label: 'Facial',
      },
    ]
  },
  {
    itemType: 'success',
    callStatus: 'onHold',
    date: '4/11/2024 09:51am',
    name: 'Jack Fox',
    badge: 'gold',
    phone: '(206) 600-7576',
    userStatus: 'danger',
    tags: [
      {
        label: 'Pricing',
        active: true,
      },
      {
        label: 'Facial',
      },
    ]
  },
  {
    itemType: 'disabled',
    callStatus: 'missed',
    voicemail: true,
    date: '4/11/2024 09:51am',
    name: 'Jack Fox',
    badge: 'platinum',
    phone: '(206) 600-7576',
    userStatus: 'danger',
    tags: [
      {
        label: 'Pricing',
        active: true,
      },
      {
        label: 'Facial',
      },
    ]
  },
  {
    itemType: 'disabled',
    callStatus: 'answered',
    date: '4/11/2024 09:51am',
    name: 'Jack Fox',
    badge: 'gold',
    phone: '(206) 600-7576',
    userStatus: 'success',
    tags: [
      {
        label: 'Pricing',
        active: true,
      },
      {
        label: 'Facial',
      },
    ]
  },
  {
    itemType: 'disabled',
    callStatus: 'answered',
    date: '4/11/2024 09:51am',
    name: 'Jack Fox',
    badge: false,
    phone: '(206) 600-7576',
    userStatus: 'alert',
    tags: [
      {
        label: 'Pricing',
        active: true,
      },
      {
        label: 'Facial',
      },
    ]
  },
];

function Inbounds () {
  const getItemClassName = (status) => {
    return {
      success: 'success',
      danger: 'danger',
      disabled: 'disabled',
    }[status] || '';
  }

  const getStatusIconClassName = (status) => {
    return {
      inProgress: 'inProgress',
      incoming: 'incoming',
      onHold: 'onHold',
      missed: 'missed',
      answered: 'answered',
    }[status] || '';
  }

  const getBadgeClassName = (badge) => {
    return {
      new: 'new',
      gold: 'gold',
      platinum: 'platinum',
      diamond: 'diamond',
    }[badge] || '';
  }

  const getStatusIndicatorClassName = (status) => {
    return {
      success: 'success',
      danger: 'danger',
      alert: 'alert',
    }[status] || '';
  }

  const popoverRef = useRef(null);

  const handleInboundsMenuClick = (e, action) => {
    e.preventDefault();
    console.log(action);

    popoverRef.current.hidePopover();
  }

  return (
    <div className="inbounds">
      <div popover="auto" id="inbound-menu" ref={popoverRef}>
        <div className="inboundsMenu">
          <div className="inboundsMenu-header">
            <h4 className="inboundsMenu-headerText">Additional Details</h4>
          </div>
          <div className="inboundsMenu-content">
            <div className="inboundsMenuItems">
              <a
                href="#"
                className="inboundsMenu-item inboundsMenu-item--add-task"
                onClick={(e) => handleInboundsMenuClick(e, 'addTask')}
              >Add Task</a>
              <a
                href="#"
                className="inboundsMenu-item inboundsMenu-item--add-lead"
                onClick={(e) => handleInboundsMenuClick(e, 'addLead')}
              >Add Lead</a>
              <a
                href="#"
                className="inboundsMenu-item inboundsMenu-item--start-call"
                onClick={(e) => handleInboundsMenuClick(e, 'startCall')}
              >Start Call</a>
              <a
                href="#"
                className="inboundsMenu-item inboundsMenu-item--open-chat"
                onClick={(e) => handleInboundsMenuClick(e, 'openChat')}
              >Open SMS Chat</a>
              <a
                href="#"
                className="inboundsMenu-item inboundsMenu-item--voicemail"
                onClick={(e) => handleInboundsMenuClick(e, 'voicemail')}
              >Listen to Voicemail/Read transcription</a>
            </div>
          </div>
        </div>
      </div>

      {INBOUNDS_FIXTURE.map((item, idx) => {
        return (
          <div className={`inboundsItem ${getItemClassName(item.itemType)}`} key={idx}>
            <div className="inboundsItem-statusBar">
              <i className={`inboundsItem-statusIcon ${getStatusIconClassName(item.callStatus)}`}/>
              <span className="inboundsItem-statusText">Call on hold | Katy</span>
              {item.isVoicemail && (
                <span className="inboundsItem-statusCallType">Voicemail</span>
              )}
            </div>

            <div className="inboundsItem-menu">
              <button className="inboundsItem-button inboundsItem-button--close"/>
              <button popovertarget="inbound-menu" className="inboundsItem-button inboundsItem-button--menu"/>
            </div>

            <div className="inboundsItem-date">4/11/2024 09:51am</div>

            <div className="inboundsItem-name">
              Jack Fox
              {item.badge && (
                <span className={`inboundsItem-badge ${getBadgeClassName(item.badge)}`}>Diamond</span>
              )}
            </div>
            <span className="inboundsItem-phone">(206) 600-7576</span>

            <div className="inboundsItem-footer">
              <i className={`inboundsItem-statusIndicator ${getStatusIndicatorClassName(item.userStatus)}`}/>

              <div className="inboundsItem-tags">
                <div className="inboundsItem-tag isActive">Pricing</div>
                <div className="inboundsItem-tag">Facial</div>
              </div>
            </div>
          </div>
        )
      })}

      <hr/>
      <hr/>

      <div className="inboundsItem">
        <div className="inboundsItem-statusBar">
          <i className="inboundsItem-statusIcon"/>
          <span className="inboundsItem-statusText">Call on hold | Katy</span>
          <span className="inboundsItem-statusCallType">Voicemail</span>
        </div>

        <div className="inboundsItem-menu">
          <button className="inboundsItem-button inboundsItem-button--close"/>
          <button className="inboundsItem-button inboundsItem-button--menu"/>
        </div>

        <div className="inboundsItem-date">4/11/2024 09:51am</div>

        <div className="inboundsItem-name">Jack Fox <span className="inboundsItem-badge diamond">Diamond</span></div>

        <span className="inboundsItem-phone">(206) 600-7576</span>

        <div className="inboundsItem-footer">
          <i className="inboundsItem-statusIndicator"/>

          <div className="inboundsItem-tags">
            <div className="inboundsItem-tag isActive">Pricing</div>
            <div className="inboundsItem-tag">Facial</div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Inbounds;