import store from "@/store/index";

export default {
  created() {
    window.addEventListener("resize", this.getDeveiceName);
  },

  beforeDestory() {
    window.removeEventListener("resize", this.getDeveiceName);
  },

  methods: {
    getDeveiceName() {
      if (!document.hidden) {
        let isDeskTop = window.navigator.userAgent.match(
          /(iphone||Android.*Mobile)/
        );
        if (isDeskTop) {
          store.commit("app/SET_DEVICE", "mobile");
        } else {
          store.commit("app/SET_DEVICE", "deskTop");
        }
      }
    },
  },
};
