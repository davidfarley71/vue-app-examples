<template>
  <div class="contactclass">
    <h2>Contact me!</h2>
    <h3>
      Optionally, suggest your favorite book I have not read, after you have checked out my
      <a
        routerLink="/books"
      >reading history</a>.
    </h3>
    <div class="centered">
      <table class="contactTable">
        <tbody>
          <tr>
            <td>
              <label class="label">Name:</label>
            </td>
            <td>
              <input class="inputclass" v-model="name" />
              <div style="float: left;">*</div>
            </td>
          </tr>
          <tr>
            <td>
              <label class="label">Phone:</label>
            </td>
            <td>
              <input class="inputclass" v-model="phone" />
            </td>
          </tr>
          <tr>
            <td>
              <label class="label">Email:</label>
            </td>
            <td>
              <input class="inputclass" v-model="email" />
            </td>
          </tr>
          <tr>
            <td>
              <label class="label">Message:</label>
            </td>
            <td>
              <textarea class="textareaclass" v-model="message" name="message"></textarea>
            </td>
          </tr>
          <tr>
            <td>
              <label class="label">Book Title:</label>
            </td>
            <td>
              <input class="inputclass" v-model="title" />
            </td>
          </tr>
          <tr>
            <td>
              <label class="label">Author:</label>
            </td>
            <td>
              <input class="inputclass" v-model="author" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <button v-on:click="post">Save</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "contact",
  data: function() {
    return {
      name: "",
      phone: "",
      email: "",
      message: "",
      title: "",
      author: ""
    };
  },
  methods: {
    post: function() {
      axios
        .get(
          'https://jzmjq2p2qe.execute-api.us-east-2.amazonaws.com/dev/?name="' +
            this.name +
            '" &email="' +
            this.email +
            '"&phonenumber="' +
            this.phonenumber +
            '" &message="' +
            this.message +
            '"&author="' +
            this.author +
            '"&title="' +
            this.title +
            '"'
        )
        .then(() => {
          console.log("post fired");
          this.name = "";
          this.phone = "";
          this.email = "";
          this.message = "";
          this.title = "";
          this.author = "";
          alert(
            "Thanks for contacting me! Ill receive your message very soon!"
          );
        });
    }
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.centered {
  display: flex;
  justify-content: center;
}

.contactTable {
  background: #1a4c47;
  border-radius: 5px;
  padding: 45px;
}

.textareaclass {
  width: 300px;
  height: 75px;
  border-radius: 3px;
}

.inputclass {
  float: left;
  width: 80%;
  border-radius: 3px;
}
</style>
