<template>
  <el-dialog :model-value="visible" width="500px" title="计划升级">
    <el-form
      :model="DraftForm"
      :rules="rules"
      ref="DraftFormRef"
      label-width="110px"
      label-position="left"
    >
      <el-form-item label="人员姓名" prop="op_name">
        <el-input
          v-model="DraftForm.op_name"
          placeholder="请输入人员姓名"
          clearable
        />
      </el-form-item>
      <el-form-item label="围堵措施" prop="containment_measure">
        <el-input
          v-model="DraftForm.containment_measure"
          placeholder="请输入围堵措施"
          clearable
        />
      </el-form-item>
      <el-form-item label="根本原因" prop="root_cause">
        <el-input
          v-model="DraftForm.root_cause"
          placeholder="请输入根本原因"
          clearable
        />
      </el-form-item>
      <el-form-item label="防呆措施" prop="foolproof_measure">
        <el-input
          v-model="DraftForm.foolproof_measure"
          placeholder="请输入防呆措施"
          clearable
        />
      </el-form-item>
      <el-form-item label="计划完成时间" prop="plan_start">
        <el-date-picker
          v-model="DraftForm.plan_start"
          type="date"
          placeholder="请选择时间"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(DraftFormRef)">
          提交
        </el-button>
        <el-button @click="resetForm(DraftFormRef)">重置</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script setup lang="ts">
import { ElDatePicker } from "element-plus";
import type { FormInstance, FormRules } from "element-plus";

interface RuleForm {
  op_name: string;
  containment_measure: string;
  root_cause: string;
  foolproof_measure: string;
  plan_start: string;
}
const props = defineProps(["visible"]);
const DraftForm = reactive({
  op_name: "",
  containment_measure: "",
  root_cause: "",
  foolproof_measure: "",
  plan_start: "",
});
const DraftFormRef = ref<FormInstance>();
const rules = reactive<FormRules<RuleForm>>({
  op_name: [{ required: true, message: "请输入人员姓名！", trigger: "change" }],
  containment_measure: [
    { required: true, message: "请输入围堵措施！", trigger: "change" },
  ],
  root_cause: [
    { required: true, message: "请输入防呆措施！", trigger: "change" },
  ],
  foolproof_measure: [
    { required: true, message: "请输入防呆措施！", trigger: "change" },
  ],
  plan_start: [
    { required: true, message: "请选择计划完成时间！", trigger: "change" },
  ],
});
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log("submit!");
    } else {
      console.log("error submit!", fields);
    }
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>
