function NavBar() {
    return (
        <>
        <nav class="navbar navbar-expand-lg">
            
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <span class="material-symbols-outlined">
                        home
                    </span>
                </a>
                
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#inicio">Nosotros</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link active" href="#">Contactanos</a>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Productos
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Sahumerios</a></li>
                                <li><a class="dropdown-item" href="#">Pastillas de defumacion</a></li>
                                <li><a class="dropdown-item" href="#">Velas</a></li>
                            </ul>
                        </li>

                    </ul>

                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search"></input>
                        <button class="btn btn-outline-success" type="submit">Buscar</button>
                    </form>
                </div>
            </div>            
        </nav>
        </>
    )
}

export default NavBar 