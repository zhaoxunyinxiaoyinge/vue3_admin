<template>
  <div class="tags" v-if="tagList.length > 0">
    <router-link
      class="label"
      tag="a"
      :key="index"
      :class="isActive(item) ? 'active' : ''"
      v-for="(item, index) in tagList"
      :to="item.path"
      >{{ item.title }}
      <span class="icon" @click.prevent.stop="closeTag(item)">&times;</span>
    </router-link>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
export default {
  name: "tag_router",
  data() {
    return {
      tagList: [],
      currentRouter: this.$route.path,
    };
  },

  created() {
    this.tagList = this.tagRouter || [];
  },
  methods: {
    ...mapActions("app", ["actionTagRouter", "actionRemoveTagRouter"]),
    closeTag(arg) {
      this.actionRemoveTagRouter(arg);
      let lastRouter = this.getTagRouter[this.getTagRouter.length - 1];
      if (lastRouter) {
        this.$router.push(lastRouter);
      } else {
        this.$router.push("/home/index");
      }
    },
    isActive(item) {
      return this.$route.path == item.path;
    },
  },

  computed: {
    ...mapGetters("app", ["getTagRouter"]),
    ...mapState("app", ["tagRouter"]),
  },
  watch: {
    currentRouter(newValue, oldValue) {},
  },
};
</script>

<style lang="scss" scoped>
.tags {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  margin: 0 0 10px;
  border: 1px solid rgba(158, 155, 155, 0.1);
  border-left: none;
  border-right: none;
  .label {
    position: relative;
    text-align: center;
    font-size: 14px;
    color: #222;
    padding: 10px 30px;
    margin: 5px 10px 5px 0;
    border: 1px solid #eee;
    text-decoration: none;

    cursor: pointer;
    &:hover,
    &.active {
      background-color: rgba(56, 143, 85, 0.932);
      color: #fff;
    }
    span.icon {
      position: absolute;
      font-size: 26px;
      vertical-align: middle;
      top: 5px;
      right: 5px;
    }
  }
}
</style>
