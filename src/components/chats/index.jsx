import './styles.scss';
import chatImg from '../../images/img--photo.jpg';

function Chats () {
  return (
    <div className="chats">
      <div className="chatsItem">
        <div className="chatsItem-imageBox">
          <img src={chatImg} alt="" className="chatsItem-image"/>
        </div>

        <div className="chatsItem-name">Angelie Crison</div>
        <div className="chatsItem-lastSeen">1 m Ago</div>

        <div className="chatsItem-text">Thank you very much. I’m glad Thank you very much. I’m glad</div>

        <i className="chatsItem-status seen"/>
      </div>
      <div className="chatsItem">
        <div className="chatsItem-imageBox">
          <img src={chatImg} alt="" className="chatsItem-image"/>
        </div>

        <div className="chatsItem-name">Angelie Crison</div>
        <div className="chatsItem-lastSeen">1 m Ago</div>

        <div className="chatsItem-text">Thank you very much. I’m glad Thank you very much. I’m glad</div>

        <i className="chatsItem-status unread"/>
      </div>
      <div className="chatsItem">
        <div className="chatsItem-imageBox">
          <img src={chatImg} alt="" className="chatsItem-image"/>
        </div>

        <div className="chatsItem-name">Angelie Crison</div>
        <div className="chatsItem-lastSeen">1 m Ago</div>

        <div className="chatsItem-text">Thank you very much. I’m glad Thank you very much. I’m glad</div>

        <i className="chatsItem-status seen"/>
      </div>
      <div className="chatsItem">
        <div className="chatsItem-imageBox">
          <img src={chatImg} alt="" className="chatsItem-image"/>
        </div>

        <div className="chatsItem-name">Angelie Crison</div>
        <div className="chatsItem-lastSeen">1 m Ago</div>

        <div className="chatsItem-text">Thank you very much. I’m glad Thank you very much. I’m glad</div>

        <i className="chatsItem-status unread"/>
      </div>
    </div>
  )
}

export default Chats;