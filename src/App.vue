<template>
  <div>
    <header>
      <div class="contenu">
        <nav>
          <span class="accueil">Formula One</span>
          <router-link to="/">Circuits</router-link>
          <router-link to="/drivers">Drivers</router-link>
        </nav>
        <div class="center">
          <h1>Vitesse<br>adrénaline<br>passion</h1>
          <p>Découvrez l'univers palpitant de la Formule 1 sur notre site ! Explorez les circuits mythiques et rencontrez
            les pilotes les plus talentueux du monde. Plongez dans l'action et vivez la passion de la F1 avec nous."</p>
        </div>

      </div>
    </header>
    <main class="contenu">
      <router-view />
    </main>
    <footer>
      <p>© {{ new Date().getFullYear() }} Formula One</p>
      <p>Créé par Lilou Bernard</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

header {
  color: white;
  height: 80vh;
  width: 100%;
  background-image: url("/img/image01.jpg");
  background-size: cover;
}

h1 {
  line-height: 1.1em;
  font-size: 75px;
  font-weight: 900;
}

p {
  font-size: 18px;
  margin-top: 24px;
  max-width: 700px;
}

.accueil {
  font-weight: 700;
  font-size: 18px;
  margin-right: 18px;
}

.contenu {
  max-width: 900px;
  height: 100%;
  width: 100%;
  margin: 0 auto;
}

.center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  margin-bottom: 10%;
}

nav {
  margin: 2rem 0;
  display: flex;
  align-items: baseline;
  gap: 1rem;
}

footer {
  background-color: #ff2b2b;
  color: white;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;
  width: 100%;
}

footer p {
  margin: 2px 0;
}

.router-link-exact-active {
  font-weight: 700;
  text-decoration: underline;
}

@media screen and (max-width: 950px) {
  h1 {
    font-size: 50px;
  }

  p {
    font-size: 16px;
  }

  .center {
    margin-bottom: 20%;
  }

  .accueil {
    font-size: 16px;
  }

  .contenu {
    padding: 0 24px;
  }

}
</style>