import './Header.css';
import { Link } from 'react-router-dom';


export default function Header() {
return (
<div className="header_container">
<div className="header_left">
</div>
<div className="header_middle">
    <Link className="link_middle" to="/">Bias Awareness</Link>
</div>
<div className="header_right">
<Link className="link" to="/Workplace">Workplace</Link>
<Link className="link" to="/Classroom">Classroom</Link>
<Link className="link" to="/SocialLife">Social <br/>Life</Link>
<Link className="link" to="/Resources">Resources</Link>
</div>
</div>
);
}