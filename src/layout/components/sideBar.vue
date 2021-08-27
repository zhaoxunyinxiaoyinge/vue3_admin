<template>
  <div class="sidebar" v-if="!item.meta.hidden">
    <template
      v-if="
        hasOneShowingChild(item.children, item) &&
        (!onlyOneChild.children || onlyOneChild.noShowingChildren)
      "
    >
      <app-link v-if="onlyOneChild.meta" :to="resolvePath(onlyOneChild.path)">
        <el-menu-item
          :index="resolvePath(onlyOneChild.path)"
          :class="{ 'submenu-title-noDropdown': false }"
        >
          <Item
            :title="onlyOneChild.meta.title"
            :icon="onlyOneChild.meta.icon"
          />
        </el-menu-item>
      </app-link>
    </template>

    <el-submenu
      v-else
      ref="subMenu"
      :index="resolvePath(item.path)"
      popper-append-to-body
    >
      <template #title>
        <Item
          v-if="item.meta"
          :title="item.meta.title"
          :icon="item.meta.icon"
        />
      </template>

      <side-bar
        v-for="child in item.children"
        :key="child.path"
        :item="child"
        :base-path="resolvePath(child.path)"
      />
    </el-submenu>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import AppLink from "./link";
import Item from "./item";
import path from "path";

export default {
  name: "sideBar",
  props: {
    item: {
      type: Object,
      default() {
        return {};
      },
    },
    basePath: {
      type: String,
      default: "",
    },
  },

  components: {
    AppLink,
    Item,
  },

  data() {
    return {
      onlyOneChild: null,
    };
  },

  setup(props, context) {
    return {};
  },

  methods: {
    hasOneShowingChild(children = [], parent) {
      const showingChildren = children.filter((item) => {
        if (item.hidden) {
          return false;
        } else {
          // Temp set(will be used if only has one showing child)
          this.onlyOneChild = item;
          return true;
        }
      });

      if (showingChildren.length === 1) {
        return true;
      }

      // Show parent if there are no child router to display
      if (showingChildren.length === 0) {
        this.onlyOneChild = { ...parent, path: "", noShowingChildren: true };
        return true;
      }
      return false;
    },

    resolvePath(routePath) {
      return path.resolve(this.basePath, routePath);
    },
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  width: 100%;
}

.el-submenu {
  width: auto;
  text-align: left;
  i.icon {
    color: #fff;
  }

  .txt {
    flex: 1;
    margin-left: 20px;
    text-align: left;
  }

  .el-menu-item:hover {
    background: rgb(71, 12, 12) !important;
  }

  .el-menu-item {
    text-align: left;
  }
}
.el-menu-item {
  .txt {
    text-align: center;
    margin-left: 10px;
  }
}
</style>
