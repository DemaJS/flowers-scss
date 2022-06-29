<template>
  <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <button type="button" class="btn-close" @click="close">&#x2715;</button>
      </header>
      <section class="modal-body">
        <slot name="body"> This is the default body! </slot>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped lang="scss">
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #f5f5f5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}

.modal-header {
  padding: 15px;
  display: flex;
  position: relative;
  justify-content: space-between;
}

.modal-body {
  position: relative;
  padding-bottom: 40px;
}

.btn-close {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: #000000;
  background: transparent;
}
</style>