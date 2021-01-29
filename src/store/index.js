import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    costdetial:[],
    paydetial:[],
    refunddetial:[],
    status: 0,
    reserveTableData: []
  },
  mutations: {
    "COSTDETIAL":function(state,payload){
      state.costdetial=payload;
    },
    "PAYDETIAL":function(state,payload){
      state.paydetial=payload;
    },
    "REFUNDDETIAL":function(state,payload){
      state.refunddetial=payload;
    },
    'updateStatus': function(state, payload) {
      state.status = payload
    },
    'updateReserveTableData': function(state, payload) {
      state.reserveTableData = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
