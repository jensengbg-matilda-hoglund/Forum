<template>
  <div class="home">
    <Header class="header" />
    <main class="main">
      <Categories class="categories" @category="showCategory" />
      <Discussion v-if="this.$store.state.display.discussion === true" class="discussion" :Topic="topic" />
      <Profile v-else-if="this.$store.state.display.profile === true" />
      <!-- <SideBar class="side-bar" /> -->
    </main>
  </div>
</template>

<script>
import Header from "../components/Header";
import Categories from "../components/Categories";
import Discussion from "../components/Discussion";
import Profile from "../components/Profile";

//import SideBar from "../components/Side";

export default {
  components: {
    Header,
    Categories,
    Discussion,
    Profile
    //SideBar
  },
  data: () => {
    return {
      topic: ""
    };
  },
  methods: {
    showCategory(index) {
      this.topic = index;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
@import "../assets/scss/button.scss";

.home {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  padding: 0% 5%;
  align-items: center;
  background: $black;
  grid-template-rows: 10% 90%;

  .main {
    display: grid;
    grid-template-columns: 150px 88%;
    column-gap: 0.5rem;

    width: 100%;
    margin: 0.5rem 0;

    .categories {
      padding: 1rem;
    }

    .duscussion {
      padding: 1rem;
    }

    /* .side-bar {
      padding: 1rem;
    } */
  }
}
</style>
