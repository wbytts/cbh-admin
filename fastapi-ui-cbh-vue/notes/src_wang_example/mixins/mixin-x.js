import { mapMutations, mapState } from "vuex";

export default {
  data() {
    return {
      a: 1,
      b: 2,
    };
  },
  methods: {
    ...mapMutations(["修改X的值"]),
  },
  computed: {
    ...mapState(["x"]),
  },
  mounted() {
    console.log("hunru挂载完成");
  },
};
