import { useRef, useState, useEffect, useContext } from "react";
import {
  HeaderUpperContainer,
  DesktopNavBar,
  MenuOuterContainer,
} from "./styles";
import DropdownMenu from "../DropdownMenu";
import header_logo from "../../assets/header_logo.png";
import Button from "../Button";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import DefaultProfilePicture from "../DefaultProfilePicture";
import { AuthContext } from "../../providers/auth";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Header = ({ isLoggedIn = false, username }) => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [ddownMenu, setDdownMenu] = useState(false);
  const ddownRef = useRef();
  const history = useHistory();

  const { handleLogout } = useContext(AuthContext);

  useEffect(() => {
    const closeDropdown = (e) => {
      if (ddownRef.current) {
        if (!ddownRef.current.contains(e.target)) {
          setDdownMenu(false);
        }
      }
    };

    document.body.addEventListener("click", closeDropdown);
  }, []);

  return (
    <>
      <HeaderUpperContainer>
        <img
          className="logo"
          src={header_logo}
          alt="header_logo"
          onClick={() => history.push("/")}
        />

        <DesktopNavBar>
          <div className="desktop_inner_menu">
            <div className="d_menu_item" onClick={() => history.push("/")}>
              <FaHome />
              Início
            </div>
          </div>
          {isLoggedIn ? (
            <div
              ref={ddownRef}
              className="d_user_container"
              onClick={() => setDdownMenu(!ddownMenu)}
            >
              <DefaultProfilePicture username={username} />
              <div className="d_user_name_txt">{username}</div>

              <DropdownMenu top={"4.5em"} right={"2.5em"} isActive={ddownMenu}>
                <div
                  className="ddown_item"
                  onClick={() => handleLogout(history)}
                >
                  Sair
                </div>
              </DropdownMenu>
            </div>
          ) : (
            <div className="desktop_outer_menu">
              <div
                className="d_menu_login"
                onClick={() => history.push("/login")}
              >
                Fazer Login
              </div>

              <Button
                width="133px"
                height="48px"
                borderColor="var(--grey-4)"
                onClick={() => history.push("/register")}
              >
                Cadastrar
              </Button>
            </div>
          )}
        </DesktopNavBar>

        <button
          className="mobile_menu_btn"
          onClick={() => setIsMenuClicked(!isMenuClicked)}
        >
          {isMenuClicked ? (
            <AiOutlineClose size={20} />
          ) : (
            <GiHamburgerMenu size={20} />
          )}
        </button>
      </HeaderUpperContainer>

      {isMenuClicked && (
        <MenuOuterContainer>
          <div className="inner_items">
            <ul className="items_ul">
              <li className="menu_item" onClick={() => history.push("/")}>
                Início
              </li>
            </ul>
          </div>

          <div className="outer_items">
            {isLoggedIn ? (
              <div
                ref={ddownRef}
                className="d_user_container"
                onClick={() => setDdownMenu(!ddownMenu)}
              >
                <DefaultProfilePicture username={username} />
                <div className="d_user_name_txt">{username}</div>

                <DropdownMenu
                  top={"4.5em"}
                  right={"2.5em"}
                  isActive={ddownMenu}
                >
                  <div
                    className="ddown_item"
                    onClick={() => handleLogout(history)}
                  >
                    Sair
                  </div>
                </DropdownMenu>
              </div>
            ) : (
              <>
                <ul className="items_ul">
                  <li
                    className="menu_item"
                    onClick={() => history.push("/login")}
                  >
                    Fazer Login
                  </li>
                </ul>

                <Button
                  className="signup_btn"
                  width="88vw"
                  borderColor="var(--grey-4)"
                  onClick={() => history.push("/register")}
                >
                  Cadastrar
                </Button>
              </>
            )}
          </div>
        </MenuOuterContainer>
      )}
    </>
  );
};

export default Header;
