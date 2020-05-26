import store from "..";

const topicReplies = {
  state: { topic: {}, replies: {} },
  mutations: {
    topic(state, data) {
      state.topic = data;
      store.state.display.showTopic = true;
    },
    replies(state, data) {
      state.replies = data;
    },
  },
  actions: {
    async getTopic(ctx, id) {
      const url = "http://localhost:3005/topics/getTopic";
      fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/json", topic_id: id },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data) {
            console.log(data);
            ctx.commit("topic", data);
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
    async getTopicReplies(ctx, id) {
      const url = "http://localhost:3005/topics/getTopicReplies";
      fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/json", topic_id: id },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data) {
            console.log(data);
            ctx.commit("replies", data);
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
    async postReply(ctx, post) {
      const url = "http://localhost:3005/topics/postReply";
      fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(post),
      })
        .then((response) => response.json())
        .then(() => {
          store.state.display.postReply = false;
          store.state.display.showTopic = true;
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
  },
  modules: {},
};

export default topicReplies;