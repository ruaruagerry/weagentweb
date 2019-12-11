<template>
  <div v-show="show">
    <el-form :model="item" label-width="80px" size="mini" align="left" style="width:400px">
      <el-form-item label="接受者">
        <el-input v-model="item.Accepter" style="width:100px"></el-input>
      </el-form-item>
      <el-form-item label="资源">
        <el-select v-model="item.ItemID" clearable filterable placeholder="请选择">
          <el-option v-for="list in options" :key="list.cfgid" :label="list.name" :value="`${list.cfgid}#${list.name}`">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="数量">
        <el-input v-model="item.Num" style="width:100px"></el-input>
      </el-form-item>
      <ul class="upload-list">
        <li v-for="(prop, index) in propstr" class="upload-props" v-bind:key="index">
          <a class="upload-props-name"><i class="fa fa-file-text-o" aria-hidden="true"></i>{{prop}}</a>
          <label class="upload-props-label" @click="onDelProp(index,prop)">删除</label>
        </li>
      </ul>
      <el-button type="primary" v-bind:disabled="!item.ItemID || !item.Num" @click="onAddResources">添加附件</el-button>
    </el-form>
    <div align="center">
      <el-button type="primary" @click="onSendAddResources">添加资源</el-button>
    </div>
  </div>
</template>

<script>
import { addResource, getResourceConfig } from '@/api/api';
export default {
  props: ['show', 'mailType'],
  created() {
    getResourceConfig().then(resp => {
      if (resp.data && resp.data.result === 0) {
        console.log(resp.data);
        this.options = resp.data.data;
      } else {
        this.$message.error(resp.data.msg);
      }
    });
  },
  data() {
    return {
      item: {},
      props: [],
      mailprop: {},
      propstr: [],
      options: [],
      value: ''
    };
  },
  methods: {
    onAddResources() {
      let propid = this.item.ItemID.split('#')[0];
      let propName = this.item.ItemID.split('#')[1];
      this.mailprop = {
        cfgid: propid,
        num: parseInt(this.item.Num)
      };
      this.props.push(this.mailprop);
      let tmp = '资源:' + propid + ' 名称:' + propName + ' 数量:' + this.item.Num;
      this.propstr.push(tmp);
      this.mailprop = {};
      this.item.ItemType = '';
      this.item.Num = 0;
    },
    onDelProp(index, prop) {
      this.props.splice(index, 1);
      this.propstr.splice(index, 1);
    },
    onSendAddResources() {
      this.$confirm('确定是否发送！', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          let playerId = this.item.Accepter;
          addResource(playerId, JSON.stringify(this.props)).then(resp => {
            if (resp.data && resp.data.result === 0) {
              this.$message.success('添加资源成功');
            } else {
              this.$message.error(resp.data.msg);
            }
          });
          this.props = [];
          this.propstr = [];
        })
        .catch(err => {
          console.log('err:', err);
          this.$message.info('取消添加资源');
          this.item = {};
          this.props = [];
          this.propstr = [];
        });
    }
  }
};
</script>
