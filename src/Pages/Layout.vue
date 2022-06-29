<template>
  <div class="wrapper">
    <header>
      <img src="src/assets/Logo-flowers.png" />
      <div class="links">
        <ul>
          <li>Home</li>
          <li>Catalog</li>
          <li>Tenders</li>
          <li>Trade</li>
          <li>Web-Shop NL</li>
        </ul>
      </div>
    </header>
    <main></main>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

header {
  height: 70px;
  background: #4e4e4e;
  display: flex;
  align-items: center;

  img {
    margin-left: 140px;
    opacity: 0.5;
  }
}

main {
  background: #666666;
  height: 100%;
}

.links {
  margin-left: 90px;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    font-family: "Roboto Mono";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    color: #000000;
    display: flex;
    gap: 38px;
  }
}
</style>