import { defineStore } from "pinia";

const User = defineStore({
  // 这里的id必须为唯一ID
  id: "user_login",
  state: () => {
    return {
      Name: "Anoymous",
      Department: "冲压区域",
      Role: "admin",
    };
  },
  // 等同于vuex的getter
  getters: {
    getUserName: (state) => state.Name,
    getUserDepartment: (state) => state.Department,
    getUserRole: (state) => state.Role,
  },
  // pinia 放弃了 mutations 只使用 actions
  actions: {
    // actions可以用async做成异步形式
    setRoleType(role: string) {
      this.Role = role;
    },
  },
});

export default User;
