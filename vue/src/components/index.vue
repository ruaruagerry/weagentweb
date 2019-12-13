<template>
  <div>
    <el-row>
      <el-col style="height:80px">
        <el-button type="primary"
                   @click="onShowAddItems">增加背包道具</el-button>
        <el-button type="primary"
                   @click="onShowGetItems">查询背包道具</el-button>
        <el-button type="primary"
                   @click="onShowGetResources">查询资源</el-button>
        <el-button type="primary"
                   @click="onShowAddResources">增加资源</el-button>
      </el-col>
      <el-col align="center">
        <addItems :show="showAddItems"></addItems>
        <getItems :show="showGetItems"></getItems>
        <getResources :show="showGetResources"></getResources>
        <addResources :show="showAddResources"></addResources>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import addItems from '@/components/addItems.vue'
import getItems from '@/components/getItems.vue'
import getResources from '@/components/getResources.vue'
import addResources from '@/components/addResources.vue'

export default {
  created () { },
  data () {
    return {
      showAddItems: false,
      showGetItems: false,
      showGetResources: false,
      showAddResources: false
    }
  },
  methods: {
    onShowAddItems () {
      this.showAddItems = true
      this.showGetItems = false
      this.showGetResources = false
      this.showAddResources = false
    },
    onShowGetItems () {
      this.showAddItems = false
      this.showGetItems = true
      this.showGetResources = false
      this.showAddResources = false
    },
    onShowGetResources () {
      this.showAddItems = false
      this.showGetItems = false
      this.showGetResources = true
      this.showAddResources = false
    },
    onShowAddResources () {
      this.showAddItems = false
      this.showGetItems = false
      this.showGetResources = false
      this.showAddResources = true
    }
  },
  components: {
    addItems,
    getItems,
    getResources,
    addResources
  }
}
</script>
