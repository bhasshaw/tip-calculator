let calculator = new Vue({
    el: '#calculator',
    data: {
      bill: null,
      tipChoice: null,
      tipAmount: null,
      totalBill: null
    },
    methods: {
      calculateTip: function () {
        this.tipAmount = this.bill * this.tipChoice;
        this.totalBill = this.bill + this.tipAmount;
      }
    }
  })