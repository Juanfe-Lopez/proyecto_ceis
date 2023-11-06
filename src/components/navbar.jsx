import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <header>
        <div className="brand">
          <a href="/">
            <img src="https://s3-alpha-sig.figma.com/img/144c/0607/562cbc7ba3775f480816f8f32f271a19?Expires=1698624000&Signature=bfdC5aaSQrmfZkGMgu6uqfajta0DlmMoGeLcmmfOjOIM6pT3v35FwBr6AaGqeyFverqr8-W6rs-GB0Kq7xCbLsyRj4xqevmn3uu5JRgm1VZ5czDnaam7nL270G5NzRY-s8bfzTzX6lzMuuHInxKH6mtH62a4AXR9CVO-oMTglMZfDZQdtHDQSsxMhV-H1Id3OmDUcD4xOCdynwz9Bnvh2i9WzlybjGlKOAFbmwoygBxN8SYiWE4yiJ5FYERCEWznL60cbXxNXvJeY4ClXAI~e4ejqFUrnjMQOhm~zF8lGECpiNkkg-ZbVs4Q1Zx0zH9iE2sF9MoBfQFytjv1ZsriVQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="Logo"/>
         </a>
        </div>
        <div>
          <a href="/voluntariados">Match Voluntariados</a>
        </div>
        <div>
          <a href="/Estadisticas">Estadisticas</a>
        </div>
        <div>
          <a href="/Contactanos">Contactanos</a>
        </div>
        <div>
          <a href="/Donar">Donar</a>
        </div>
        <div>
          <a href="/Login">Iniciar Sesión</a>
        </div>

      </header>
      
    </>
  );
};

export default Navbar;