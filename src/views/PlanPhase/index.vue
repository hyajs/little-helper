<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    max-height="300"
    :default-sort="{ prop: 'create_date', order: 'descending' }"
  >
    <el-table-column
      prop="information_source"
      label="实施人员"
      width="100"
      align="center"
    />
    <el-table-column prop="question" label="围堵措施" width="300" />
    <el-table-column
      prop="create_date"
      label="根本原因"
      width="180"
      sortable
      align="center"
    />
    <el-table-column prop="create_person" label="防呆措施" align="center" />
    <el-table-column
      prop="influence_type"
      label="计划完成时间"
      align="center"
    />
    <el-table-column
      prop="influence_data"
      label="实际完成时间"
      align="center"
    />
    <el-table-column prop="pdca" label="PDCA" align="center">
      <template #default="scope">
        <i-bx-bxs-circle-quarter
          v-if="scope.row.pdca == 'P'"
        ></i-bx-bxs-circle-quarter>
        <i-mdi-moon-first-quarter
          v-else-if="scope.row.pdca == 'D'"
        ></i-mdi-moon-first-quarter>
        <i-bx-bxs-circle-three-quarter
          v-else-if="scope.row.pdca == 'C'"
        ></i-bx-bxs-circle-three-quarter>
        <i-ic-sharp-circle
          v-else-if="scope.row.pdca == 'A'"
        ></i-ic-sharp-circle>
        <i-ic-baseline-check-circle v-else></i-ic-baseline-check-circle>
      </template>
    </el-table-column>
    <el-table-column prop="question_source" label="问题来源" align="center" />
    <el-table-column label="操作" width="200" fixed="right" align="center">
      <template #default="scope">
        <div class="flex flex-wrap">
          <el-popconfirm title="确认需要删除该项内容嘛？">
            <template #reference>
              <el-button type="danger">删除</el-button>
            </template>
          </el-popconfirm>

          <el-button type="primary" @click="handleEdit">升级</el-button>
        </div>
      </template>
    </el-table-column>
  </el-table>
  <plan-data-edit
    v-model:visible="viewState.editDialog.visible"
    @close="closeEdit"
  ></plan-data-edit>
</template>

<script lang="ts" setup>
import PlanDataEdit from "./PlanDataEdit.vue";
const viewState = reactive({
  editDialog: { visible: false },
});

function handleEdit(id: string) {
  viewState.editDialog.visible = true;
}
function closeEdit(val: any) {
  viewState.editDialog.visible = false;
}
const tableData = [
  {
    information_source: "MES",
    question: "这是一个long Text的纯文本问题建议",
    create_date: "2023-08-11",
    create_person: "熊大",
    influence_type: "停机",
    influence_data: "2023-08-11",
    pdca: "P",
    question_source: "问题",
  },
  {
    information_source: "MES",
    question: "这是一个long Text的纯文本问题建议",
    create_date: "2023-08-07",
    create_person: "熊大",
    influence_type: "停机",
    influence_data: "2023-08-11",
    pdca: "D",
    question_source: "问题",
  },
  {
    information_source: "MES",
    question: "这是一个long Text的纯文本问题建议",
    create_date: "2023-09-11",
    create_person: "熊大",
    influence_type: "停机",
    influence_data: "2023-08-11",
    pdca: "C",
    question_source: "问题",
  },
];
</script>

<style></style>
