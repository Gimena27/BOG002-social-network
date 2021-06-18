export function footer(){
    const footer=document.createElement("footer");
    footer.innerHTML=`
    <nav>
        <ul>
        <li><a id="inicio" href="#/home"><i class="icon fas fa-home"></i></a>Inicio </li>
        <li><a id="perfil" href="#/search"><i class="icon fas fa-search"></i></a>Buscar</li>
        <li><a id="buscar" href="#/profile"><i class="icon fas fa-user"></i></a>Perfil</li>
      </ul>
    </nav>`;

    return footer;
}