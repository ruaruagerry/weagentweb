<template>
  <div v-show="show">
    <el-input type="number"
              v-model="playerid"
              style="width:200px"
              placeholder="请输入用户ID"></el-input>
    <el-button type="primary"
               icon="el-icon-search"
               @click="onGetResources">搜索</el-button>
    <br />
    <br />
    <br />
    <el-table :data="data"
              border
              style="width: 100%">
      <el-table-column prop="cfgid"
                       label="ID"
                       align="center"></el-table-column>
      <el-table-column :formatter="judgename"
                       label="名称"
                       align="center"></el-table-column>
      <el-table-column prop="num"
                       label="数量"
                       align="center"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getResource, getResourceConfig } from '@/api/api'
export default {
  created () {
    getResourceConfig().then(resp => {
      if (resp.data && resp.data.result === 0) {
        this.options = resp.data.data

        for (var i in this.options) {
          let itemconfig = this.options[i]
          this.optionmap[itemconfig.cfgid] = itemconfig.name
        }
      } else {
        this.$message.error(resp.data.msg)
      }
    })
  },
  props: ['show'],
  data () {
    return {
      options: [],
      optionmap: {},
      data: [],
      playerid: ''
    }
  },
  methods: {
    onGetResources () {
      if (this.playerid === '') {
        this.$message.error('搜索的用户ID不能为0')
        return;
      }

      getResource(this.playerid).then(resp => {
        if (resp.data && resp.data.result === 0) {
          this.data = resp.data.data
        } else {
          this.$message.error(resp.data.msg)
        }
      })
    },
    judgename (data) {
      return this.optionmap[data.cfgid]
    }
  }
}
</script>
