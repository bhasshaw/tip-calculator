let calculator = new Vue({
    el: '#calculator',
    data: {
      bill: 0,
      tipChoice: 0,
      tipAmount: 0,
      totalBill: 0
    },
    methods: {
      calculateTip: function () {
        this.tipAmount = this.bill * this.tipChoice;
        this.totalBill = this.bill + this.tipAmount;
      }
    }
  })