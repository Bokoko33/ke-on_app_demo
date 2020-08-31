<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
    <NoPC />
  </div>
</template>

<script>
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import NoPC from "./components/common/NoPC";

export default {
  components: {
    Header,
    Footer,
    NoPC,
  },
};
</script>
