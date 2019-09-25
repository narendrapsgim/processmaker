export default {
  computed: {
    datasource () {
      return this.$parent.$parent.datasource;
    }
  },
  data () {
    return {
      monacoOptions: {
        automaticLayout: true
      },
      testData: null,
      testError: "",
      testResponse: ""
    };
  },
  methods: {
    testEndpoint () {
      this.$parent.$parent.test(this.rowData);
    }
  },
  watch: {
    testData: {
      deep: true,
      immediate: true,
      handler () {
        try {
          const testData = JSON.parse(this.testData);
          if (testData && testData instanceof Object) {
            this.$set(this.rowData, "testData", testData);
          }
          this.testError = "";
        } catch (e) {
          this.testError = e;
        }
      }
    },
    rowData: {
      deep: true,
      immediate: true,
      handler () {
        if (this.rowData.testData === undefined) {
          this.$set(this.rowData, "testData", {});
        }
      }
    }
  }
};
