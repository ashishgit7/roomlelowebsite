<template>
  <div id="div-portal">
    <header id="header" class>
      <h2
        id="head-agent"
        style="margin:0 auto; text-align:center; color:white;display:none;"
      >Notification to Agent</h2>
      <ul>
        <li id="show-o">
          <button id="owner-btn" onclick="showOwner()">Owner</button>
        </li>
        <li id="show-u">
          <button id="user-btn" onclick="showUser()">User</button>
        </li>
        <li id="show-a">
          <button id="agent-btn" onclick="showAgent()">Agent</button>
        </li>
        <li id="show-n">
          <button id="show-notice-btn" onclick>Notice</button>
        </li>
        <li id="show-c">
          <button id="show-complaint-btn" onclick>Complaints</button>
        </li>
      </ul>
    </header>
    <!-- /header -->
    <form>
      <div id="owner-div">
        <input id="o-name" type="text" required placeholder="Name" />
        <input id="o-phone" type="text" required placeholder="Phone" />
        <input id="o-email" type="text" required placeholder="Email" />
        <input id="o-address" type="text" required placeholder="Address" />
        <button
          type
          id="submit-owner"
          onclick="submitOwner()"
          style="margin-top: 50px; float: right;"
        >Submit</button>
      </div>
      <div id="user-div">
        <input id="u-name" type="text" required placeholder="Name" />
        <input id="u-phone" type="text" required placeholder="Phone" />
        <input id="u-email" type="text" required placeholder="Email" />
        <button
          type
          id="submit-user"
          onclick="submitUser()"
          style="margin-top: 50px; float: right;"
        >Submit</button>
      </div>
      <div id="agent-div">
        <input id="a-name" type="text" required placeholder="Name" />
        <input id="a-phone" type="text" required placeholder="Phone" />
        <input id="a-email" type="text" required placeholder="Email" />
        <input id="a-address" type="text" required placeholder="Address" />
        <button
          type
          id="submit-agent"
          onclick="submitAgent()"
          style="margin-top: 50px; float: right;"
        >Submit</button>
      </div>

      <div id="notice-div"></div>

      <div id="complaint-div"></div>

      <div id="all-detalis">
        <!-- Agent portal or company portal -->
        <input type="text" id="notice-fire" placeholder="User Id : usernamephone" />
        <textarea
          id="new-notice"
          style="margin:50px auto; background-color: rgba(0,0,0,0.2); color:white;font-family:Bahnschrift;width: 100%; height:200px; "
          placeholder="Write New Notice ...."
        ></textarea>
        <button
          style="margin-top: -50px; margin-bottom: 50px; float: right;"
          onclick="fireNotice()"
        >Submit</button>

        <ul>
          <li>
            <button id="user-notice-details" onclick="userNotice()">Notice to User</button>
          </li>
          <li>
            <button id="user-complaint-details" onclick="userComplaints()">User Complaints</button>
          </li>
          <li>
            <button id="owner-notice-details" onclick="ownersNotice()">Notice to Owner</button>
          </li>
          <li>
            <button id="owner-complaint-details" onclick="ownersComplaints()">Owner Complaints</button>
          </li>
        </ul>
      </div>
    </form>

    <div id="conformation">
      <img id="img-conf" src="src/assets/loading.gif" alt />
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap';
import { Power2} from "gsap";
export default {
  data() {
    return {
      title: "my vue file"
    };
  },
  mounted() {
    let externalScript = document.createElement("script");
    externalScript.setAttribute("src", "../script-portal.js");
    document.body.appendChild(externalScript);
    document.getElementById("home").classList.remove("active");
    document.getElementById("home").style.color = "white";
    document.getElementById("search-link").style.color = "white";

    document.getElementById("portal-btn").style.backgroundColor = "white";
    document.getElementById("portal-btn").style.color = "black";

    document.getElementById("owner-btn").style.backgroundColor = "white";
    document.getElementById("owner-btn").style.color = "black";
    document.getElementById("user-div").style.display = "none";
    document.getElementById("agent-div").style.display = "none";

    gsap.from("#o-name", 0.4, { opacity: 0, ease: Power2.easeInOut, x: -400 });
    gsap.from("#o-phone", 0.8, { opacity: 0, ease: Power2.easeInOut, x: -400 });
    gsap.from("#o-email", 1.2, { opacity: 0, ease: Power2.easeInOut, x: -400 });
    gsap.from("#o-address", 1.6, {
      opacity: 0,
      ease: Power2.easeInOut,
      x: -400
    });

    document
      .getElementById("show-notice-btn")
      .addEventListener("click", function() {
        document.getElementById("notice-div").style.display = "block";
        document.getElementById("complaint-div").style.display = "none";
        document.getElementById("show-notice-btn").style.backgroundColor =
          "white";
        document.getElementById("show-notice-btn").style.color = "black";
        document.getElementById("show-complaint-btn").style.backgroundColor =
          "rgba(0,0,0,0.1)";
        document.getElementById("show-complaint-btn").style.color = "white";
      });
    document
      .getElementById("show-complaint-btn")
      .addEventListener("click", function() {
        document.getElementById("complaint-div").style.display = "block";
        document.getElementById("notice-div").style.display = "none";
        document.getElementById("show-complaint-btn").style.backgroundColor =
          "white";
        document.getElementById("show-complaint-btn").style.color = "black";
        document.getElementById("show-notice-btn").style.backgroundColor =
          "rgba(0,0,0,0.1)";
        document.getElementById("show-notice-btn").style.color = "white";
      });
  }
};
</script>


<style>
header ul {
  margin: 100px auto;
  text-align: center;
  padding: 0px;
}
header ul li {
  list-style: none;
  display: inline-block;
  margin-right: 100px;
  margin-left: 100px;
}
#div-portal {
  background: rgb(23, 22, 22);
  background: linear-gradient(
    90deg,
    rgba(23, 22, 22, 1) 0%,
    rgba(24, 23, 24, 1) 0%,
    rgba(7, 7, 8, 1) 0%,
    rgba(135, 189, 249, 0.9976365546218487) 0%
  );
  font-family: Bahnschrift;
  position: absolute;
  width: 100%;
  height: 700%;
  top: 0%;
  z-index: -10;
}
button {
  background-color: rgba(0, 0, 0, 0.1);
  min-width: 80px;
  height: 35px;
  color: white;
  border: 0px;
  outline: 0;
  font-family: Bahnschrift;
  border-radius: 20px;
  font-weight: 600;
  margin-top: 20px;
}
button:active {
  transform: scale(0.95);
}
#owner-div,
#user-div,
#agent-div {
  max-width: 200px;
  margin: 0 auto;
}
#notice-div,
#complaint-div,
#all-detalis {
  max-width: 900px;
  margin: 0 auto;
  color: white;
  font-family: Bahnschrift;
}
input {
  margin-top: 20px;
  height: 30px;
  border: 0;
  background-color: transparent;
  border-bottom: 1px solid white;
  color: white;
  width: 200px;
  transition: all ease 0.2s;
  font-family: Bahnschrift;
  font-size: 16px;
}
input::placeholder {
  color: rgba(256, 256, 256, 0.6);
  text-align: center;
  font-family: Bahnschrift;
}
input:focus {
  outline: 0;
  border: 0;
  border-bottom: 1px solid white;
  text-align: center;
}
#conformation {
  display: none;
  width: 300px;
  height: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
#img-conf {
  width: 100%;
  height: 100%;
}
#show-n,
#show-c {
  display: none;
}
#notice-div,
#complaint-div,
#all-detalis {
  display: none;
  margin-bottom: 30px;
}
#all-detalis ul li {
  list-style: none;
  display: inline-block;
  margin-right: 30px;
  margin-left: 30px;
}
#all-details ul {
  margin: 150px auto;
  text-align: center;
  padding: 0px;
}
button:active {
  border: 0px;
  outline: 0px;
}
button:focus {
  border: 0px;
  outline: 0px;
}

#head-agent {
  margin-top: 70px !important;
}

@media (max-width: 480px) {
  #notice-div,
  #complaint-div {
    margin: 30px;
  }
  #all-detalis {
    margin: 30px;
  }
  #div-portal {
    height: 900%;
  }

  #head-agent {
    margin-top: 100px !important;
  }
}
</style>
