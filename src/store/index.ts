import Vue from "vue";
import Vuex from "vuex";
import { ILocalStorage } from "@/services/ILocalStorage";
import { LocalStorage } from "@/services/implementations/LocalStorage";
import { User } from "@/models/User";
import { Message } from "@/models/Message";
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import testData from "./profileData.json";

Vue.use(Vuex);
export const localStorageService: ILocalStorage = new LocalStorage();
export default new Vuex.Store({
  state: {
    currentMessageGroupIndex: 0,
    profile: new User({
      name: "Guest",
      avatar: "https://ducanerichmond.co.uk/img/testi-bg-2.png",
      messageGroups: []
    })
  },
  mutations: {
    setInfo(state, val) {
      state.profile = val;
    },
    addGroup(state, val) {
      state.profile.messageGroups.push(val);
    },
    addMessage(state, message: Message) {
      state.profile.messageGroups[state.currentMessageGroupIndex].messages.push(
        message
      );
    }
  },
  actions: {
    getInfo({ commit }) {
      const info: string | null = localStorageService.getItem("profile");

      if (
        info !== null &&
        Object.prototype.hasOwnProperty.call(JSON.parse(info), "messageGroups")
      ) {
        commit("setInfo", new User(JSON.parse(info)));
      }
    },
    saveInfo({ state }) {
      localStorageService.setItem("profile", JSON.stringify(state.profile));
    },
    fillTestData({ commit }) {
      localStorageService.setItem("profile", JSON.stringify(testData));
      commit("setInfo", new User(testData));
    }
  },
  getters: {
    messagesCount: state => (index: number) => {
      return state.profile.messageGroups[index].messages.length;
    }
  }
});
