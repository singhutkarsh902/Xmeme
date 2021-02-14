import React from 'react';

function Header() {
    return (
        <div className="conatiner-fluid main_menu">
            <div className="row">
                <div className="col-12 mx-auto">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <a className="navbar-brand" href="/">
                            Xmeme
                        </a>
                        <div>by </div>
                        <a href="https://github.com/singhutkarsh902" className="nav-link">
                            @singhutkarsh902
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Header;